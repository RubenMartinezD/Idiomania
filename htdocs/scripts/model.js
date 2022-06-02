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
     * Método para obtener una frase al azar de la base de datos y mostrarla por pantalla
     * @returns boolean true
     */
    obtenerFrase() {
            var id_frase = Math.floor(Math.random() * 120) + 1;
            $.ajax({
                data: { "id_frase": id_frase },
                url: 'php/obtenerFrase.php',
                type: 'get',
                async: false,
                success: function(response) {
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
         * Método para obtener un idioma al azar de la base de datos y mostrarla por pantalla
         * @returns boolean true
         */
    obtenerIdioma() {
            /**
             * Obtener un idioma al azar de los 25 que hay en la base de datos correspondientes a la API
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
         * Método para obtener
         * @param {*} id_idioma 
         * @param {*} numero_slot 
         */
    obtenerIdioma2(id_idioma, numero_slot) {
        /**
         * Extraer con ajax la frase correspondiente e imprimirla en las etiquetas html ocultas idioma_traducido y codigo_idioma_correcto
         */
        $.ajax({
            data: { "id_idioma": id_idioma },
            url: 'php/obtenerIdioma.php',
            type: 'get',
            async: false,
            success: function(response) {
                var idioma = JSON.parse(response);
                for (let i = 0; i < idioma.length; i++) {
                    $("#nombre_idiomaextra" + numero_slot).html(idioma[i].nombre_idioma)
                }
                console.log(idioma);
                return true;
            }
        });

    }


    recogerMasIdiomas() {
            var idioma_preprohibido = document.getElementById("id_idioma_correcto");
            var idioma_prohibido = idioma_preprohibido.textContent;
            console.log("Idioma recogido:" + idioma_prohibido);
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
             * Extraer del html los valores de contenido de la frase y el código de idioma para emplearlos en la API
             */
            var frase_extraida = document.getElementById("frase");
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
             * Extrae la frase traducida del JSON y la mete en un array
             */
            traduccion().then(function(resultado) {
                console.log(JSON.parse(resultado.request.response).translations[0].text);
                $("#frase_traducida").html((JSON.parse(resultado.request.response).translations[0].text))
            })
        }
        /**
         * Función que actúa como un pack 3 en 1 para entregar una frase en un idioma al azar
         */
    colocarBotones() {
        var lugar_respuesta_correcta = Math.floor(Math.random() * 4) + 1;
        var respuesta_incorrecta1 = 0
        var respuesta_incorrecta2 = 0
        var respuesta_incorrecta3 = 0
        var boton1 = document.getElementById("Boton 1");
        var boton2 = document.getElementById("Boton 2");
        var boton3 = document.getElementById("Boton 3");
        var boton4 = document.getElementById("Boton 4");
        var idiomatraducido = document.getElementById("idioma_traducido").textContent;
        var idiomaextra0 = document.getElementById("nombre_idiomaextra0").textContent;
        var idiomaextra1 = document.getElementById("nombre_idiomaextra1").textContent;
        var idiomaextra2 = document.getElementById("nombre_idiomaextra2").textContent;
        do { respuesta_incorrecta1 = Math.floor(Math.random() * 4) + 1; }
        while (respuesta_incorrecta1 == lugar_respuesta_correcta);
        do { respuesta_incorrecta2 = Math.floor(Math.random() * 4) + 1; }
        while (respuesta_incorrecta2 == lugar_respuesta_correcta || respuesta_incorrecta2 == respuesta_incorrecta1);
        do { respuesta_incorrecta3 = Math.floor(Math.random() * 4) + 1; }
        while (respuesta_incorrecta3 == lugar_respuesta_correcta || respuesta_incorrecta3 == respuesta_incorrecta1 || respuesta_incorrecta3 == respuesta_incorrecta2);
        switch (lugar_respuesta_correcta) {
            case 1:
                boton1.textContent = idiomatraducido
                break;
            case 2:
                boton2.textContent = idiomatraducido
                break;
            case 3:
                boton3.textContent = idiomatraducido
                break;
            case 4:
                boton4.textContent = idiomatraducido
                break;
        }
        switch (respuesta_incorrecta1) {
            case 1:
                boton1.textContent = idiomaextra0
                break;
            case 2:
                boton2.textContent = idiomaextra0
                break;
            case 3:
                boton3.textContent = idiomaextra0
                break;
            case 4:
                boton4.textContent = idiomaextra0
                break;
        }
        switch (respuesta_incorrecta2) {
            case 1:
                boton1.textContent = idiomaextra1
                break;
            case 2:
                boton2.textContent = idiomaextra1
                break;
            case 3:
                boton3.textContent = idiomaextra1
                break;
            case 4:
                boton4.textContent = idiomaextra1
                break;
        }
        switch (respuesta_incorrecta3) {
            case 1:
                boton1.textContent = idiomaextra2
                break;
            case 2:
                boton2.textContent = idiomaextra2
                break;
            case 3:
                boton3.textContent = idiomaextra2
                break;
            case 4:
                boton4.textContent = idiomaextra2
                break;
        }
    }
    randomizarFrase() {
        this.obtenerFrase()
        this.obtenerIdioma()
        this.traducirFrase()
        this.recogerMasIdiomas()
        this.colocarBotones()
    }


}