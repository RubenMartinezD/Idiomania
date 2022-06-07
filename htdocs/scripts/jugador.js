/**
 * Clase para construir el objeto jugador
 */
class Player extends CuentaAtras {
    /**
     * Constructor de la clase
     */
    constructor(milisegundos, segundos) {
        /**
         * Se hereda la cuenta atrás del objeto homónimo
         */
        super(milisegundos, segundos);
        /**
         * Puntos del jugador en esta partida
         * @type {integer} 
         */
        this.puntos = 0;
        /**
         * Turnos efectuados
         * @type {integer} 
         */
        this.turnos = 1;
        /**
         * Nombre del jugador en esta partida
         * @type {integer} 
         */
        this.nombre = 'cosa';
        /**
         * Variable usada parea el cálculo de punros
         * @type {integer} 
         */
        this.var_puntosSEG = 60000;
        /**
         * Variable usada parea el cálculo de punros
         * @type {integer} 
         */
        this.var_puntosMILS = 0;
        /**
         * Variable usada parea el cálculo de punros
         * @type {integer} 
         */
        this.valor_puntos = 0;
        /**
         * Lugar del HTML donde el usuario verá su puntuación
         * @type {integer} 
         */
        this.puntuacion = document.getElementById("puntuacion");
        /**
         * Lugar del HTML donde el usuario verá su nombre
         * @type {integer} 
         */
        this.nombre_jugador = document.getElementById("nombre_jugador");
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
        return this.turnos
    }
    setTurnos(turnos) {
        this.turnos = turnos
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
        this.nombre_jugador.innerHTML = this.nombre
    }

    // obtenemos el nombre proporcionado
    getNombre() {
        return this.nombre
    }
    definirPuntos() {
        this.puntuacion.innerHTML = this.getPuntos()
    }

    /**
     * Función que se ejecuta en cuanto el usuario escoge una respuesta correcta
     */
    respuestaCorrecta() {
        this.setPuntos(this.puntos + parseInt((this.getSegundos() * 1000 + this.getMilisegundos()) - (this.getValorPuntosSEG() + this.getValorPuntosMILS()) / 750000))
        this.segundos = this.segundos + 2;
        this.setValorPuntosSEG(this.segundos);
        this.setValorPuntosMILS(this.milisegundos);
        this.definirPuntos()
        this.turnos = this.turnos + 1
    }

    /**
     * Función que se ejecuta en cuanto el usuario escoge una respuesta incorrecta
     */
    respuestaIncorrecta() {
        this.setPuntos(this.puntos - parseInt((this.getSegundos() * 1000 + this.getMilisegundos()) - (-this.getValorPuntosSEG() + this.getValorPuntosMILS()) / 1500000))
        if (this.getPuntos() < 0) { this.setPuntos(0) }
        this.setValorPuntosSEG(this.segundos);
        this.setValorPuntosMILS(this.milisegundos);
        if (this.getSegundos() == 0) { this.setMilisegundos(0) } else { this.segundos = (this.segundos - 1) }
        this.definirPuntos()
        this.turnos = this.turnos + 1
    }
}