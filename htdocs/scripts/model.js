class Model {
    constructor() {
        this.cuentita = new CuentaAtras()
        this.jugador = new Player()
        this.lugar_respuesta_correcta = 0
        this.turno = new Turno()
    }

    nuevoJugador() {
        this.jugador.contandoAtras()
    }




    /**
     * Método para obtener una frase al azar de la base de datos e insertarla en el html
     * @returns boolean true
     */
    obtenerFrase() {
        /**
         * El id que se buscará en la base de datos, tabla frases
         */
        var respuesta = ""
        var id_frase = Math.floor(Math.random() * 120) + 1;
        $.ajax({
            data: { "id_frase": id_frase },
            url: 'php/obtenerFrase.php',
            type: 'get',
            async: false,
            success: function(response) {
                /**
                 * El JSON que contendrá la frase (respuesta[i].contenido)
                 */
                respuesta = JSON.parse(response);
                //    for (var i = 0; i < respuesta.length; i++) {

                //    $("#frase").html(respuesta[i].contenido);
                //     console.log(respuesta);

                //    }
            }
        });
        this.turno.setFrase(respuesta[0].contenido)
        return respuesta[0].contenido;
    }

    /**
     * Método para obtener un idioma al azar de la base de datos e insertarlo en el html
     * @returns boolean true
     */
    obtenerIdioma() {
        /**
         * el id que se buscará en la base de datos, tabla idiomas
         */
        var respuesta_idioma = ""
        var id_idioma = Math.floor(Math.random() * 25) + 1;
        /**
         * Extraer con ajax la frase correspondiente e imprimirla en las etiquetas html ocultas idioma_traducido y codigo_idioma_correcto
         */
        $.ajax({
            data: { "id_idioma": id_idioma },
            url: 'php/obtenerIdioma.php',
            type: 'get',
            async: false,
            success: function(response) {
                /**
                 * El JSON que contendrá los datos del idioma
                 */
                respuesta_idioma = JSON.parse(response);
                //    for (var i = 0; i < respuesta_idioma.length; i++) {
                // $("#idioma_traducido").html(respuesta_idioma[0].nombre_idioma)

                //$("#codigo_idioma_correcto").html(respuesta_idioma[i].codigo_idioma)

                // $("#id_idioma_correcto").html(respuesta_idioma[i].id_idioma)

                //   }
                // console.log(idioma);
            }
        });
        this.turno.setIdIdiomaCorrecto(respuesta_idioma[0].id_idioma)
        this.turno.setCodigoIdiomaCorrecto(respuesta_idioma[0].codigo_idioma)
        this.turno.setNombreIdiomaCorrecto(respuesta_idioma[0].nombre_idioma)
        var array_datos_idioma = [this.turno.getNombreIdiomaCorrecto(), this.turno.getCodigoIdiomaCorrecto(), this.turno.getIdIdiomaCorrecto()]
        return array_datos_idioma
    }

    /**
     * Método para obtener un idioma para las opciones incorrectas
     * @param {integer} id_idioma - El ID del idioma en la base de datos (clave primaria)
     * @param {integer} numero_slot - El número del slot que ocupará en el html el almacenaje de la variable
     */
    obtenerIdiomasIncorrectos(id_idioma, numero_slot) {
            // Extraer con ajax el id de idioma correspondiente
            var respuesta = ''
            $.ajax({
                data: { "id_idioma": id_idioma },
                url: 'php/obtenerIdioma.php',
                type: 'get',
                async: false,
                success: function(response) {
                    /**
                     * El JSON que contendrá los datos del idioma
                     */
                    var idioma = JSON.parse(response);
                    respuesta = idioma[0].nombre_idioma

                }
            });
            switch (numero_slot) {
                case 0:
                    this.turno.setIdiomaIncorrecto1(respuesta)
                    break
                case 1:
                    this.turno.setIdiomaIncorrecto2(respuesta)
                    break
                case 2:
                    this.turno.setIdiomaIncorrecto3(respuesta)
                    break
            }
            // console.log(idioma);
            // return respuesta;
        }
        /**
         * Método para obtener los ID de tres idiomas distintos del primero
         */
    recogerMasIdiomas() {
            /** 
             * Contiene el ID del idioma correcto, el cual no debe repetirse.
             */
            var idioma_prohibido = this.turno.getCodigoIdiomaCorrecto();
            console.log("Idioma recogido:" + idioma_prohibido);
            /**
             * Array para introducir los ID correspondientes a idiomas distintos al correcto
             */
            var array_idiomas_incorrectos = [];
            for (let i = 0; i < 3; i++) {
                do { array_idiomas_incorrectos[i] = Math.floor(Math.random() * 25) + 1; }
                while (array_idiomas_incorrectos[i] == idioma_prohibido)
                this.obtenerIdiomasIncorrectos(array_idiomas_incorrectos[i], i)
            }
            return array_idiomas_incorrectos
        }
        /**
         * Método que extrae el idioma y la frase incrustados en el html y se dispone a traducir la frase y mostrarla por pantalla. Al ser asíncrono, es difícil extraer su resultado de forma normal.
         */
    traducirFrase() {
        /**
         * Lugar del html donde se almacena la frase
         */
        //var frase_extraida = document.getElementById("frase");
        var frase_extraida = this.turno.getFrase()
        var codigo_extraido = this.turno.getCodigoIdiomaCorrecto()
            /**
             * Lugar del html donde se almacena el código del idioma, para ser usado por la API
             */
            // var codigo_extraido = document.getElementById("codigo_idioma_correcto");
        console.log("la frase extraida es ..." + frase_extraida)
            /**
             * Función que realiza una llamada a la API de DeepL mediante axios empleando los parámetros entregados anteriormente
             * @returns response - Devuelve un archivo JSON con la frase traducida
             */
        async function traduccion() {
            const response = await axios
                .get("https://api-free.deepl.com/v2/translate", {
                    params: {
                        auth_key: "a57a350c-3be2-fa4f-3318-a5e5e8adf8c8:fx",
                        text: frase_extraida,
                        target_lang: codigo_extraido
                    },
                    proxy: {
                        host: "localhost",
                        port: 8080
                    }
                });
            return response;
        }
        /**
         * Extrae la frase traducida del JSON y la mete en un array. Después se introduce dicha frase en una etiqueta del html
         */
        traduccion().then(function(resultado) {
            console.log(JSON.parse(resultado.request.response).translations[0].text);
            $("#frase_traducida").html((JSON.parse(resultado.request.response).translations[0].text))
        })


    }

    colocarBotones() {

        var idiomatraducido = this.turno.getNombreIdiomaCorrecto();
        /**
         * Localizaciones del html donde se guardan las variables con los idiomas incorrectos
         */
        var idiomaextra0 = this.turno.getIdiomaIncorrecto1();
        var idiomaextra1 = this.turno.getIdiomaIncorrecto2();
        var idiomaextra2 = this.turno.getIdiomaIncorrecto3();
        // Cálculo de la disposición de botones de los idiomas incorrectos
        do { this.turno.setRespuestaIncorrecta1(Math.floor(Math.random() * 4) + 1) }
        while (this.turno.getRespuestaIncorrecta1() == this.turno.getLugarRespuestaCorrecta());
        do { this.turno.setRespuestaIncorrecta2(Math.floor(Math.random() * 4) + 1) }
        while (this.turno.getRespuestaIncorrecta2() == this.turno.getLugarRespuestaCorrecta() || this.turno.getRespuestaIncorrecta2() == this.turno.getRespuestaIncorrecta1());
        do { this.turno.setRespuestaIncorrecta3(Math.floor(Math.random() * 4) + 1) }
        while (this.turno.getRespuestaIncorrecta3() == this.turno.getLugarRespuestaCorrecta() || this.turno.getRespuestaIncorrecta3() == this.turno.getRespuestaIncorrecta1() || this.turno.getRespuestaIncorrecta3() == this.turno.getRespuestaIncorrecta2());
        switch (this.turno.getLugarRespuestaCorrecta()) {
            case 1:
                //Se le pasa el nombre del idioma junto con el valor, que le indica que es la respuesta correcta
                this.turno.boton1.textContent = idiomatraducido
                this.turno.boton1.value = "C"
                break;
            case 2:
                this.turno.boton2.textContent = idiomatraducido
                this.turno.boton2.value = "C"
                break;
            case 3:
                this.turno.boton3.textContent = idiomatraducido
                this.turno.boton3.value = "C"
                break;
            case 4:
                this.turno.boton4.textContent = idiomatraducido
                this.turno.boton4.value = "C"
                break;
        }
        switch (this.turno.getRespuestaIncorrecta1()) {
            case 1:
                this.turno.boton1.textContent = idiomaextra0
                this.turno.boton1.value = "I"
                break;
            case 2:
                this.turno.boton2.textContent = idiomaextra0
                this.turno.boton2.value = "I"
                break;
            case 3:
                this.turno.boton3.textContent = idiomaextra0
                this.turno.boton3.value = "I"
                break;
            case 4:
                this.turno.boton4.textContent = idiomaextra0
                this.turno.boton4.value = "I"
                break;
        }
        switch (this.turno.getRespuestaIncorrecta2()) {
            case 1:
                this.turno.boton1.textContent = idiomaextra1
                this.turno.boton1.value = "I"
                break;
            case 2:
                this.turno.boton2.textContent = idiomaextra1
                this.turno.boton2.value = "I"
                break;
            case 3:
                this.turno.boton3.textContent = idiomaextra1
                this.turno.boton3.value = "I"
                break;
            case 4:
                this.turno.boton4.textContent = idiomaextra1
                this.turno.boton4.value = "I"
                break;
        }
        switch (this.turno.getRespuestaIncorrecta3()) {
            case 1:
                this.turno.boton1.textContent = idiomaextra2
                this.turno.boton1.value = "I"
                break;
            case 2:
                this.turno.boton2.textContent = idiomaextra2
                this.turno.boton2.value = "I"
                break;
            case 3:
                this.turno.boton3.textContent = idiomaextra2
                this.turno.boton3.value = "I"
                break;
            case 4:
                this.turno.boton4.textContent = idiomaextra2
                this.turno.boton4.value = "I"
                break;
        }
    }
    randomizarFrase() {
        /**
         * Función que actúa como un pack 5 en 1 para entregar una frase en un idioma al azar, junto con la colocación de opciones en botones
         */
        this.obtenerFrase()
        this.obtenerIdioma()
        this.traducirFrase()
        this.recogerMasIdiomas()
        this.colocarBotones()
        this.jugador.definirPuntos()
    }
    respuestaJugador(event) {
        if (event.target.value == 'C') {
            console.log("Acertaste wey")
            this.jugador.respuestaCorrecta()
        } else if (event.target.value == 'I') {
            console.log("Fallaste pendejo")
            this.jugador.respuestaIncorrecta()
        }
    }

}