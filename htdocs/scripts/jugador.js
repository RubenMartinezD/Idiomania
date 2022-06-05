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
        this.turno = 1;
        this.nombre = 'cosa';
        this.var_puntosSEG = 60000;
        this.var_puntosMILS = 0;
        this.valor_puntos = 0;
        this.puntuacion = document.getElementById("puntuacion");

    }

    // obtenemos el tiempo restante
    getTiempoRestante() {
        return [this.segundos, this.milisegundos]
    }

    // obtenemos los puntos
    getPuntos() {
        return this.puntos
    }
    setPuntos(puntos) {
            this.puntos = puntos
        }
        // obtenemos el turno
    getTurnos() {
        return this.turno
    }
    setTurnos(turno) {
        this.turnos = turno
    }
    setValorPuntosSEG(var_puntosSEG) {
        this.var_puntosSEG = var_puntosSEG
    }
    getValorPuntosSEG() {
        return this.var_puntosSEG
    }
    setValorPuntosMILS(var_puntosMILS) {
        this.var_puntosMILS = var_puntosMILS
    }
    getValorPuntosMILS() {
        return this.var_puntosMILS
    }
    setNombre() {
            this.nombre = prompt("Escribe tu nombre de jugador");
        }
        // obtenemos el nombre proporcionado
    getNombre() {
        return this.nombre
    }
    definirPuntos() {
        $("#puntuacion").html(this.getPuntos())
    }

    respuestaCorrecta() {
        this.setPuntos(this.getPuntos() + (this.getValorPuntosSEG() + this.getValorPuntosMILS() - (this.getSegundos() * 1000 + this.getMilisegundos)))
        this.setSegundos(this.getSegundos() + 4)
        this.setValorPuntosSEG(this.segundos);
        this.setValorPuntosMILS(this.milisegundos);
        this.definirPuntos()
        this.setTurnos(this.getTurnos() + 1)
    }
    respuestaIncorrecta() {
        this.setPuntos(this.getPuntos() - (this.getValorPuntosSEG() + this.getValorPuntosMILS() - (this.getSegundos() * 1000 + this.getMilisegundos)))
        if (this.getPuntos() < 0) { this.setPuntos(0) }
        this.setValorPuntosSEG(this.segundos);
        this.setValorPuntosMILS(this.milisegundos);
        this.setSegundos(this.getSegundos() - 1)
        this.definirPuntos()
        this.setTurnos(this.getTurnos() + 1)
    }

    /**
     * 
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
     * 
     * 
     */

}