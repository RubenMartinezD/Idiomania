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
     * Importante el uso de la funcion bind(), de esta manera podemos utilizar 'this'
     * Explicación: https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
     * @param {funcion} handle función del Model que devuelve la frase
     */
    botonInicio(handle) {
        this.miBotonInicio.addEventListener(
            'click',
            function(event) {
                // el listener utiliza displayFrase para meter el contenido en el HTML
                // como parámetro recibe lo que devuelve la función handle()
                // handle es la función obtnerFrase del Model
                // devuelve una string, la frase
                handle()
                this.div_datos.hidden = false;
                this.div_juego.hidden = false;
                this.div_titulo.hidden = true;
                this.div_instrucciones.hidden = true;
                this.div_puntuaciones.hidden = true;


            }.bind(this), false)
    }

    crearBotonPuntuaciones() {
        this.miBotonPuntuaciones = document.createElement('button')
        this.miBotonPuntuaciones.id = "boton_puntuaciones"
        this.miBotonPuntuaciones.innerHTML = "<b>Ver records</b>"
        document.getElementById("puntuaciones").appendChild(this.miBotonPuntuaciones)
    }

    botonPuntuaciones(handle) {
        this.miBotonPuntuaciones.addEventListener(
            'click',
            function(event) {
                // el listener utiliza displayFrase para meter el contenido en el HTML
                // como parámetro recibe lo que devuelve la función handle()
                // handle es la función obtnerFrase del Model
                // devuelve una string, la frase
                this.miBotonPuntuaciones.hidden = true;
                handle()
            }.bind(this), false)

    }
}