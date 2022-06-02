class Model {
    constructor() {
        this.cuentita = new CuentaAtras()
        this.jugador = new Player()
        this.lugar_respuesta_correcta = 0
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
                var respuesta = JSON.parse(response);
                for (var i = 0; i < respuesta.length; i++) {
                    $("#frase").html(respuesta[i].contenido);
                    console.log(respuesta);
                    return true;
                }

            }
        });

    }

    /**
     * Método para obtener un idioma al azar de la base de datos e insertarlo en el html
     * @returns boolean true
     */
    obtenerIdioma() {
        /**
         * el id que se buscará en la base de datos, tabla idiomas
         */
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
                var idioma = JSON.parse(response);
                for (var i = 0; i < idioma.length; i++) {
                    $("#idioma_traducido").html(idioma[i].nombre_idioma)
                    $("#codigo_idioma_correcto").html(idioma[i].codigo_idioma)
                    $("#id_idioma_correcto").html(idioma[i].id_idioma)
                }
                console.log(idioma);
                return true;
            }
        });

    }

    /**
     * Método para obtener un idioma para las opciones incorrectas
     * @param {integer} id_idioma - El ID del idioma en la base de datos (clave primaria)
     * @param {integer} numero_slot - El número del slot que ocupará en el html el almacenaje de la variable
     */
    obtenerIdioma2(id_idioma, numero_slot) {
        // Extraer con ajax el id de idioma correspondiente
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
                for (let i = 0; i < idioma.length; i++) {
                    $("#nombre_idiomaextra" + numero_slot).html(idioma[i].nombre_idioma)
                }
                console.log(idioma);
                return true;
            }
        });

    }

    /**
     * Método para obtener los ID de tres idiomas distintos del primero
     */
    recogerMasIdiomas() {
            /** 
             * Lugar del HTML donde se guarda el ID del idioma
             */
            var idioma_preprohibido = document.getElementById("id_idioma_correcto");
            /** 
             * Contiene el ID del idioma correcto, el cual no debe repetirse.
             */
            var idioma_prohibido = idioma_preprohibido.textContent;
            console.log("Idioma recogido:" + idioma_prohibido);
            /**
             * Array para introducir los ID correspondientes a idiomas distintos al correcto
             */
            var idioma_extra = [];
            for (let i = 0; i < 3; i++) {
                do { idioma_extra[i] = Math.floor(Math.random() * 25) + 1; }
                while (idioma_extra[i] == idioma_prohibido)
                console.log("Idioma extra" + i + ":" + idioma_extra[i])
                this.obtenerIdioma2(idioma_extra[i], i)
            }

        }
        /**
         * Método que extrae el idioma y la frase incrustados en el html y se dispone a traducir la frase y mostrarla por pantalla
         */
    traducirFrase() {
        /**
         * Lugar del html donde se almacena la frase
         */
        var frase_extraida = document.getElementById("frase");
        /**
         * Lugar del html donde se almacena el código del idioma, para ser usado por la API
         */
        var codigo_extraido = document.getElementById("codigo_idioma_correcto");
        console.log("la frase extraida es ..." + frase_extraida.textContent)
        console.log("El idioma extraido es ..." + codigo_extraido.textContent)
            /**
             * Función que realiza una llamada a la API de DeepL mediante axios empleando los parámetros entregados anteriormente
             * @returns response - Devuelve un archivo JSON con la frase traducida
             */
        async function traduccion() {
            const response = await axios
                .get("https://api-free.deepl.com/v2/translate", {
                    params: {
                        auth_key: "a57a350c-3be2-fa4f-3318-a5e5e8adf8c8:fx",
                        text: frase_extraida.textContent,
                        target_lang: codigo_extraido.textContent
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
        /**
         * Definición del slot del botón donde estará la respuesta correcta
         */
        var lugar_respuesta_correcta = Math.floor(Math.random() * 4) + 1;
        /**
         * Respuestas incorrectas
         */
        var respuesta_incorrecta1 = 0
        var respuesta_incorrecta2 = 0
        var respuesta_incorrecta3 = 0
            /**
             * Botones del html
             */
        var boton1 = document.getElementById("Boton 1");
        var boton2 = document.getElementById("Boton 2");
        var boton3 = document.getElementById("Boton 3");
        var boton4 = document.getElementById("Boton 4");
        /**
         * Localización del html donde se guarda la variable con el idioma correcto
         */
        var idiomatraducido = document.getElementById("idioma_traducido").textContent;
        /**
         * Localizaciones del html donde se guardan las variables con los idiomas incorrectos
         */
        var idiomaextra0 = document.getElementById("nombre_idiomaextra0").textContent;
        var idiomaextra1 = document.getElementById("nombre_idiomaextra1").textContent;
        var idiomaextra2 = document.getElementById("nombre_idiomaextra2").textContent;
        // Cálculo de la disposición de botones de los idiomas incorrectos
        do { respuesta_incorrecta1 = Math.floor(Math.random() * 4) + 1; }
        while (respuesta_incorrecta1 == lugar_respuesta_correcta);
        do { respuesta_incorrecta2 = Math.floor(Math.random() * 4) + 1; }
        while (respuesta_incorrecta2 == lugar_respuesta_correcta || respuesta_incorrecta2 == respuesta_incorrecta1);
        do { respuesta_incorrecta3 = Math.floor(Math.random() * 4) + 1; }
        while (respuesta_incorrecta3 == lugar_respuesta_correcta || respuesta_incorrecta3 == respuesta_incorrecta1 || respuesta_incorrecta3 == respuesta_incorrecta2);
        switch (lugar_respuesta_correcta) {
            case 1:
                //Se le pasa el nombre del idioma junto con el valor, que le indica que es la respuesta correcta
                boton1.textContent = idiomatraducido
                boton1.value = "C"
                break;
            case 2:
                boton2.textContent = idiomatraducido
                boton2.value = "C"
                break;
            case 3:
                boton3.textContent = idiomatraducido
                boton3.value = "C"
                break;
            case 4:
                boton4.textContent = idiomatraducido
                boton4.value = "C"
                break;
        }
        switch (respuesta_incorrecta1) {
            case 1:
                boton1.textContent = idiomaextra0
                boton1.value = "I"
                break;
            case 2:
                boton2.textContent = idiomaextra0
                boton2.value = "I"
                break;
            case 3:
                boton3.textContent = idiomaextra0
                boton3.value = "I"
                break;
            case 4:
                boton4.textContent = idiomaextra0
                boton4.value = "I"
                break;
        }
        switch (respuesta_incorrecta2) {
            case 1:
                boton1.textContent = idiomaextra1
                boton1.value = "I"
                break;
            case 2:
                boton2.textContent = idiomaextra1
                boton2.value = "I"
                break;
            case 3:
                boton3.textContent = idiomaextra1
                boton3.value = "I"
                break;
            case 4:
                boton4.textContent = idiomaextra1
                boton4.value = "I"
                break;
        }
        switch (respuesta_incorrecta3) {
            case 1:
                boton1.textContent = idiomaextra2
                boton1.value = "I"
                break;
            case 2:
                boton2.textContent = idiomaextra2
                boton2.value = "I"
                break;
            case 3:
                boton3.textContent = idiomaextra2
                boton3.value = "I"
                break;
            case 4:
                boton4.textContent = idiomaextra2
                boton4.value = "I"
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
    }


}