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
}