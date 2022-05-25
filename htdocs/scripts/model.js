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
            success: function(response) {
                var respuesta = JSON.parse(response);
                for (var i = 0; i < respuesta.length; i++) {
                    $("#respuesta").html("id_frase: " + respuesta[i].id_frase + " Contenido: " +
                        respuesta[i].contenido);
                    console.log(respuesta);
                }
            }
        });
        return true;
    }

    traducirFrase() {
        async function traduccion() {

            const response = await axios
                .get("https://api-free.deepl.com/v2/translate", {
                    params: {
                        auth_key: "a57a350c-3be2-fa4f-3318-a5e5e8adf8c8:fx",
                        text: "Adios mundo",
                        target_lang: "DE"
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
        })
    }
}