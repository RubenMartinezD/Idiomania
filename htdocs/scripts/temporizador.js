/**
 * objeto cuenta atrás
 */
class cuentaAtras {
    constructor() {
            this.milisegundos = 1000
            this.segundos = 60
        }
        /**
         * Función para comenzar la cuenta atrás y refrescar el intervalo
         */
    comenzarCuenta() {
        while (this.segundos !== 0 && this.milisegundos !== 0) {
            int = setInterval(contandoAtras, 10);
            clearInterval(int);
        }
    }
    contandoAtras() {
        this.milisegundos += 10;
        if (this.segundos == 0 && this.milisegundos == 0) {}
        if (this.milisegundos == 1000) {
            this.milisegundos = 0;
            this.segundos--;
            console.log(this.segundos, ':', this.milisegundos)
        }
    }
}