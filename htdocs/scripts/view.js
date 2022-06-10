/**
 * Clase Vista
 * Encargada de mostrar los botones de inicio
 */
class View {
    // añadimos un botón en tiempo de ejecución
    constructor() {
        // Botón que el usuario pulsará para empezar la partida
        this.miBotonInicio
        this.crearBotonInicio();
        // Botón que el usuario pulsará para ver las puntuaciones
        this.miBotonPuntuaciones
        this.crearBotonPuntuaciones();
        //divs correspondientes a los elementos del juego
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
        //cuando el usuario hace click en el botón de mostrar puntuaciones
        this.miBotonPuntuaciones.addEventListener(
            'click',
            function(event) {
                //ocultar el botón de records al pulsarlo
                this.miBotonPuntuaciones.hidden = true;
                handle()
            }.bind(this), false)

    }

    /**
     * Función para ocultar y mostrar los div del html pertinentes cuando se acabe el juego
     * Parámetros correspondientes a cada <div>:
     * @param {html} datos 
     * @param {html} juego 
     * @param {html} titulo 
     * @param {html} instrucciones 
     * @param {html} puntuaciones 
     */
    ocultardiv(datos, djuego, titulo, instrucciones, puntuaciones) {
        datos.hidden = true;
        djuego.hidden = true;
        titulo.hidden = false;
        instrucciones.hidden = false;
        puntuaciones.hidden = false;
    }


}