class Turno {
    constructor() {
        this.frase = ""
        this.n_idioma_correcto = ""
        this.c_idioma_correcto = ""
        this.id_idioma_correcto = ""
        this.idiomas_incorrectos = ""
        this.frase_traducida = ""
            /**
             * Definición del slot del botón donde estará la respuesta correcta
             */
        this.lugar_respuesta_correcta = Math.floor(Math.random() * 4) + 1;
        this.respuesta_incorrecta1 = 0
        this.respuesta_incorrecta2 = 0
        this.respuesta_incorrecta3 = 0
            /**
             * Botones del html
             */
        this.boton1 = document.getElementById("Boton 1");
        this.boton2 = document.getElementById("Boton 2");
        this.boton3 = document.getElementById("Boton 3");
        this.boton4 = document.getElementById("Boton 4");

    }

    //Funciones de obtenerFrase()
    getFrase() {
        return this.frase
    }
    setFrase(frase) {
        this.frase = frase
    }

    // Funciones de obtenerIdioma()
    getNombreIdiomaCorrecto() {
        return this.n_idioma_correcto
    }
    setNombreIdiomaCorrecto(n_idioma_correcto) {
        this.n_idioma_correcto = n_idioma_correcto
    }
    getCodigoIdiomaCorrecto() {
        return this.c_idioma_correcto
    }
    setCodigoIdiomaCorrecto(c_idioma_correcto) {
        this.c_idioma_correcto = c_idioma_correcto
    }
    getIdIdiomaCorrecto() {
        return this.id_idioma_correcto
    }
    setIdIdiomaCorrecto(id_idioma_correcto) {
        this.id_idioma_correcto = id_idioma_correcto
    }

    //Funciones de traducirFrase()
    getFraseTraducida() {
        this.frase_traducida = document.getElementById("frase_traducida").textContent
        return this.frase_traducida
    }

    //Funciones de recogerMasIdiomas()
    setIdiomasIncorrectos(idiomas_incorrectos) {
        this.idiomas_incorrectos = idiomas_incorrectos
    }

    //Funciones de colocarBotones()
    getLugarRespuestaCorrecta() {
        return this.lugar_respuesta_correcta
    }
    setRespuestaIncorrecta1(respuesta_incorrecta1) {
        this.respuesta_incorrecta1 = respuesta_incorrecta1
    }
    setRespuestaIncorrecta2(respuesta_incorrecta2) {
        this.respuesta_incorrecta2 = respuesta_incorrecta2
    }
    setRespuestaIncorrecta3(respuesta_incorrecta3) {
        this.respuesta_incorrecta3 = respuesta_incorrecta3
    }
    getRespuestaIncorrecta1() {
        return this.respuesta_incorrecta1
    }
    getRespuestaIncorrecta2() {
        return this.respuesta_incorrecta2
    }
    getRespuestaIncorrecta3() {
        return this.respuesta_incorrecta3
    }

}