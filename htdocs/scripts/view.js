class View {
    // añadimos un botón en tiempo de ejecución
    constructor() {
        this.miBoton
        this.crearBotonInicio()
        this.div_titulo = document.getElementById("pantalla_titulo")
        this.div_juego = document.getElementById("pantalla_juego")
        this.div_datos = document.getElementById("pantalla_datos")
        this.div_instrucciones = document.getElementById("instrucciones")
    }

    /**
     *  creamos un boton y lo añadimos al contenedor
     */

    crearBotonInicio() {
        this.miBoton = document.createElement('button')
        this.miBoton.id = "comienzo_juego"
        this.miBoton.innerHTML = "<b>Iniciar juego</b>"
        document.getElementById("pantalla_titulo").appendChild(this.miBoton)
    }

    /**
     * Método que llamaremos desde el controller
     * Configura el listener del boton con la función del Model
     * Importante el uso de la funcion bind(), de esta manera podemos utilizar 'this'
     * Explicación: https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
     * @param {funcion} handle función del Model que devuelve la frase
     */
    botonInicio(handle) {
        this.miBoton.addEventListener(
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

            }.bind(this), false)
    }
}