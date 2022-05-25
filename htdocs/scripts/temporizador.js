class cuentaAtras {
    constructor() {
        this.milisegundos = 1000
        this.segundos = 60
            //eventos para seleccionar horas, minutos y segundos y conservar los valores en las variables y el HTML
    }

    comenzarCuenta() { // calcular el tiempo de la cuenta atrás
        int = setInterval(10);
        this.milisegundos += 10;
        if (this.segundos == 0 && this.milisegundos == 0) {
            clearInterval(int);
        }
        if (this.milisegundos == 1000) {
            this.milisegundos = 0;
            this.segundos--;
            console.log(this.segundos)
        }
    }
}