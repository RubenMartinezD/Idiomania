/**
 * Clase para construir el objeto jugador
 */
class Player extends CuentaAtras {
    /**
     * Constructor de la clase
     * @param {integer} puntos - puntos del jugador
     * @param {integer} turno - turno actual
     * @param {integer} milisegundos cuenta atrás en milisegundos del tiempo restante para finalizar el juego
     * @param {string} nombre - nombre del jugador
     * @param 
     */
    constructor(milisegundos, segundos) {
        super(milisegundos, segundos);
        this.puntos = 0;
        this.turno = 0;
        this.nombre = 'cosa';
        this.var_puntosSEG = 60000;
        this.var_puntosMILS = 0;
        this.valor_puntos = 0;

    }

    // obtenemos el tiempo restante
    getTiempoRestante() {
        return [this.segundos, this.milisegundos]
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

    respuestaCorrecta() {
        this.valor_puntos = this.valor_puntos + ((this.valor_puntosSEG + this.valor_puntosMILS) - (this.segundos * 1000 + this.milisegundos));
        this.segundos = this.segundos + 4;
        this.valor_puntosSEG = this.segundos;
        this.valor_puntosMILS = this.milisegundos;
    }
    respuestaIncorrecta() {
        this.valor_puntos = this.valor_puntos - (((this.valor_puntosSEG + this.valor_puntosMILS) - (this.segundos * 1000 + this.milisegundos)) / 20);
        this.valor_puntosSEG = this.segundos
        this.valor_puntosMILS = this.milisegundos
        this.segundos = this.segundos - 1;
    }
}