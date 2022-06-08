/**
 * Objeto que instancia una cuenta atrás
 */
class CuentaAtras {
    constructor() {
        /**
         * milisegundos de la cuenta atrás, en múltiplos de 10
         * @type {integer} 
         */
        this.milisegundos = 0;
        /**
         * segundos de la cuenta atrás, empezando en 60
         * @type {integer}
         */
        this.segundos = 60;
        /**
         * variable con el intervalo necesario para la cuenta atrás
         * @type {interval}
         */
        this.intervalo = null;
        /**
         * Booleano que termina el juego si es false
         * @type {interval}
         */
        this.bool_cuenta = true;
        /**
         * Display del HTML que muestra al usuario el tiempo de juego restante
         */
        this.display = document.getElementById("display_tiempo")
    }

    //sets y gets
    getSegundos() {
        return this.segundos
    }
    setSegundos(segundos) {
        this.segundos = segundos
    }
    getMilisegundos() {
        return this.milisegundos
    }
    setMilisegundos(milisegundos) {
        this.milisegundos = milisegundos
    }
    getBoolCuentaAtras() {
        return this.bool_cuenta
    }
    setBoolCuentaAtras(bool_cuenta) {
        this.bool_cuenta = bool_cuenta
    }


    /**
     * Función que lleva a cabo la cuenta atrás mediante un intervalo
     */
    contandoAtras() {
        clearInterval(this.intervalo);
        this.intervalo = null;
        this.milisegundos = 0;
        this.segundos = 60;
        this.bool_cuenta = true
        this.intervalo = setInterval(() => {
            if (this.bool_cuenta) {
                this.display.innerHTML = "Tiempo: " + this.segundos
                if (this.segundos == 0 && this.milisegundos == 0) {
                    alert("Fin del juego. Tu puntuación es de " + this.puntos);
                    this.bool_cuenta = false
                    juego.model.finJuego();
                }
                if (this.milisegundos == 0) {
                    this.milisegundos = 1000;
                    this.segundos--;
                }
                this.milisegundos -= 10;
            }
        }, 10);
    }
}