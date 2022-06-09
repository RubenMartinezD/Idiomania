/**
 * Clase Vista
 * Encargada de mostrar los botones de inicio
 */
class View {
    // añadimos un botón en tiempo de ejecución
    constructor() {
        this.miBotonInicio
        this.crearBotonInicio()
        this.miBotonPuntuaciones
        this.crearBotonPuntuaciones()
        this.div_titulo = document.getElementById("pantalla_titulo")
        this.div_juego = document.getElementById("pantalla_juego")
        this.div_datos = document.getElementById("pantalla_datos")
        this.div_instrucciones = document.getElementById("instrucciones")
        this.div_puntuaciones = document.getElementById("puntuaciones")
    }

    /**
     *  Función para crear un botón inicio que se incrustará en el html
     */
    crearBotonInicio() {
        this.miBotonInicio = document.createElement('button')
        this.miBotonInicio.id = "comienzo_juego"
        this.miBotonInicio.innerHTML = "<b>Iniciar juego</b>"
        document.getElementById("pantalla_titulo").appendChild(this.miBotonInicio)
    }

    /**
     * Método que llamaremos desde el controller
     * Configura el listener del boton con la función del Model
     * @param {funcion} handle función del Model que ejecuta iniciarJuego()    
     *  */
    botonInicio(handle) {
        this.miBotonInicio.addEventListener(
            'click',
            function(event) {
                //ocultar los div del html de la pantalla de título
                handle()
                this.div_datos.hidden = false;
                this.div_juego.hidden = false;
                this.div_titulo.hidden = true;
                this.div_instrucciones.hidden = true;
                this.div_puntuaciones.hidden = true;


            }.bind(this), false)
    }

    /**
     *  Función para crear un botón ver récords que se incrustará en el html
     */
    crearBotonPuntuaciones() {
        this.miBotonPuntuaciones = document.createElement('button')
        this.miBotonPuntuaciones.id = "boton_puntuaciones"
        this.miBotonPuntuaciones.innerHTML = "<b>Ver records</b>"
        document.getElementById("puntuaciones").appendChild(this.miBotonPuntuaciones)
    }

    /**
     * Método que llamaremos desde el controller
     * Configura el listener del boton con la función del Model
     * @param {funcion} handle función del Model que devuelve la frase
     */
    botonPuntuaciones(handle) {
        this.miBotonPuntuaciones.addEventListener(
            'click',
            function(event) {
                //ocultar el botón de records al pulsarlo
                this.miBotonPuntuaciones.hidden = true;
                handle()
            }.bind(this), false)

    }
}