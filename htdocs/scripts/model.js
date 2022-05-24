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
        /** 
                const projectId = 'future-sunrise-350010';

                // Imports the Google Cloud client library
                const { Translate } = require('@google-cloud/translate').v2;

                // Instantiates a client
                const translate = new Translate({ projectId });

                async function quickStart() {
                    // The text to translate
                    const text = 'Hello, world!';

                    // The target language
                    const target = 'ru';

                    // Translates some text into Russian
                    const [translation] = await translate.translate(text, target);
                    console.log(`Text: ${text}`);
                    console.log(`Translation: ${translation}`);
                }

                quickStart();

            }
        */
        /** 
         $.ajax({
             data: { "id_frase": 5 },
             url: 'php/traducirFrase.php',
             type: 'get',
             success: function(response) {
                 var respuesta = JSON.parse(response);
                 console.log(respuesta);
             }
         });
 
 */
        $.ajax({
            data: { auth_key: "a57a350c-3be2-fa4f-3318-a5e5e8adf8c8:fx", text: "Adios mundo", target_lang: "DE" },
            url: 'http://api-free.deepl.com',
            type: 'post',
            success: function(response) {
                var respuesta = JSON.parse(response);
                console.log(respuesta)
            }
        });
    }
}