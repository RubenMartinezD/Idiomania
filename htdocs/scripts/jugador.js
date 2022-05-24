/**
 * Clase para construir el objeto jugador
 */
class Player extends cuenta_atras {
    /**
     * Constructor de la clase
     * @param {integer} puntos - puntos del jugador
     * @param {integer} turno - turno actual
     * @param {?} tiempo_restante cuenta atrás en milisegundos del tiempo restante para finalizar el juego
     * @param {string} nombre - nombre del jugador
     * @param 
     */
    constructor(tiempo_restante, puntos, turno, nombre) {
        this.marca = marca
            // inicializamos la velocidad a cero
        this.velocity = 0
    }

    // obtenemos la velocidad
    getVelocity() {
        return this.velocity
    }

    // obtenemos el modelo
    getMarca() {
        return this.marca
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