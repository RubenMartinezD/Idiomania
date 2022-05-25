/**
 * Clase para construir el objeto jugador
 */
class Player extends cuentaAtras {
    /**
     * Constructor de la clase
     * @param {integer} puntos - puntos del jugador
     * @param {integer} turno - turno actual
     * @param {?} tiempo_restante cuenta atrás en milisegundos del tiempo restante para finalizar el juego
     * @param {string} nombre - nombre del jugador
     * @param 
     */
    constructor(tiempo_restante, nombre) {
        super(tiempo_restante);
        this.puntos = 0
        this.turno = 0
        this.nombre = nombre

    }

    // obtenemos el tiempo restante
    getTiempoRestante() {
        return this.tiempo_restante
    }

    // obtenemos los puntos
    getPuntos() {
        return this.puntos
    }


    // obtenemos el turno
    getTurnos() {
        return this.turno
    }

    // obtenemos el nombre proporcionado
    getNombre() {
        return this.nombre
    }


    // aumentamos la velocidad en un valor
    acelerar(valor) {
        this.velocity = this.velocity + valor
    }

    // disminuimos la velocidad en un valor
    frenar(valor) {
        this.velocity = this.velocity - valor
    }
}