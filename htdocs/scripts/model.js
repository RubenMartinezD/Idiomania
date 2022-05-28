class Model {
    constructor() {}
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
                var frase = JSON.parse(response);
                for (var i = 0; i < frase.length; i++) {
                    $("#frase").html(frase[i].contenido)
                }
                console.log(frase);
                return response;
            }
        });

    }
    obtenerIdioma() {
        var id_idioma = Math.floor(Math.random() * 25) + 1;
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
                }
                console.log(idioma);
                return response;
            }
        });

    }

    traducirFrase() {
        var frase_extraida = document.getElementById("frase");
        var codigo_extraido = document.getElementById("codigo_idioma_correcto");
        console.log("la frase extraida es ..." + frase_extraida.textContent)
        console.log("El idioma extraido es ..." + codigo_extraido.textContent)
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
        traduccion().then(function(resultado) {
            console.log(JSON.parse(resultado.request.response).translations[0].text);
            $("#frase_traducida").html((JSON.parse(resultado.request.response).translations[0].text))
        })
    }

}