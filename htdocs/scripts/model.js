class Model {
    constructor() {

    }
    conectarDB() {
        var apellidos = prompt("Introduce los apellidos a buscar");
        $.ajax({
            data: { "apellidos": apellidos },
            url: 'main.php',
            type: 'get',
            success: function(response) {
                var respuesta = JSON.parse(response);
                $("#respuesta").html(" Apellidos: " + respuesta.apellidos);

            }
        });
    }
}