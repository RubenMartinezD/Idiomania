class Model {
    constructor() {

    }
    conectarDB() {
        var id_frase = prompt("Introduce el ID de la frase a buscar");
        $.ajax({
            data: { "id_frase": id_frase },
            url: 'scripts/obtenerFrase.php',
            type: 'get',
            success: function(response) {
                var respuesta = JSON.parse(response);
                for (var i = 0; i < respuesta.length; i++) {
                    $("#respuesta").html("id_frase: " + respuesta[i].id_frase + " Contenido: " +
                        respuesta[i].contenido);
                    console.log(respuesta)
                }
            }
        });
    }
}