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
                        $("#respuesta").html("id_frase: " + respuesta[i].id_frase + " Contenido: " +
                            respuesta[i].contenido);
                        console.log(respuesta);
                    }
                    return true;
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

    recogerMasIdiomas() {
            var idioma_prohibido = document.getElementById("id_idioma_correcto")
            var idioma_extra = []
            for (i = 1; i < 4; i++) {
                idioma_extra[i] = Math.floor(Math.random() * 25) + 1;
                do { idioma_extra[i] = Math.floor(Math.random() * 25) + 1; }
                while (idioma_extra[i] == idioma_prohibido)
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
    randomizarFrase() {
        this.obtenerFrase()
        this.obtenerIdioma()
        this.traducirFrase()
        this.lugar_respuesta_correcta = Math.floor(Math.random() * 4) + 1;
    }

    iniciarJuego() {
        var nomheroe = comprobarNombre();
        heroe = new Heroe(nomheroe, 2, 20, 5, 2, 40, 25)
        $("#NOMH").html(heroe.getnombre)
        $("#NOME").html(enemigo.getnombre)
        sessionStorage.setItem("NOMH", nomheroe)
    }


}