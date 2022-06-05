/**
 * Objeto que instancia una cuenta atrás
 * @param model - el model
 * @param {integer} milisegundos - milisegundos de la cuenta atrás, en múltiplos de 10
 * @param {integer} segundos - segundos de la cuenta atrás, empezando en 60
 * @param {?} intervalo - variable con el intervalo necesario para la cuenta atrás
 * @param {boolean} bool_cuenta - booleano que indica la orden de continuar o parar la cuenta atrás
 */
class CuentaAtras {
    constructor(model) {
        this.model = model
        this.milisegundos = 0
        this.segundos = 60
        this.intervalo = null
        this.bool_cuenta = true
        this.display = document.getElementById("display_tiempo")
    }
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
                this.display.innerHTML = this.segundos + ":" + this.milisegundos
                if (this.segundos == 0 && this.milisegundos == 0) {
                    console.log("fin");
                    this.bool_cuenta = false
                }
                if (this.milisegundos == 0) {
                    this.milisegundos = 1000;
                    this.segundos--;
                }
                if (this.segundos == 0 && this.milisegundos == 0) {
                    this.bool_cuenta = false
                }
                this.milisegundos -= 10;
            }
        }, 10);
    }
}