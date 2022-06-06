class Turno {
    constructor() {
        this.frase = ""
        this.n_idioma_correcto = ""
        this.c_idioma_correcto = ""
        this.id_idioma_correcto = ""
        this.array_idiomas_incorrectos = []
        this.frase_traducida = ""
            /**
             * Definición del slot del botón donde estará la respuesta correcta
             */
        this.lugar_respuesta_correcta = Math.floor(Math.random() * 4) + 1;
        this.respuesta_incorrecta1 = 0
        this.respuesta_incorrecta2 = 0
        this.respuesta_incorrecta3 = 0
        this.nombre_incorrecto1 = ""
        this.nombre_incorrecto2 = ""
        this.nombre_incorrecto3 = ""
            /**
             * Botones del html
             */
        this.boton1 = document.getElementById("Boton 1");
        this.boton2 = document.getElementById("Boton 2");
        this.boton3 = document.getElementById("Boton 3");
        this.boton4 = document.getElementById("Boton 4");
        //  this.boton1.addEventListener("click", (event) => juego.model.respuestaJugador(event));
        //  this.boton2.addEventListener("click", (event) => juego.model.respuestaJugador(event));
        //  this.boton3.addEventListener("click", (event) => juego.model.respuestaJugador(event));
        //  this.boton4.addEventListener("click", (event) => juego.model.respuestaJugador(event));

        this.var_boton1 = (event) => { juego.model.respuestaJugador(event); };
        this.var_boton2 = (event) => { juego.model.respuestaJugador(event); };
        this.var_boton3 = (event) => { juego.model.respuestaJugador(event); };
        this.var_boton4 = (event) => { juego.model.respuestaJugador(event); };
        this.boton1.addEventListener('click', this.var_boton1, true);
        this.boton2.addEventListener('click', this.var_boton2, true);
        this.boton3.addEventListener('click', this.var_boton3, true);
        this.boton4.addEventListener('click', this.var_boton4, true);



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
        this.array_idiomas_incorrectos = idiomas_incorrectos
    }
    getIdiomasIncorrectos(i) {
        return this.array_idiomas_incorrectos[i]
    }


    //Funciones de colocarBotones()
    getLugarRespuestaCorrecta() {
            return this.lugar_respuesta_correcta
        }
        //Funciones para los lugares con las respuetas incorrectas
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
    setIdiomaIncorrecto1(nombre_incorrecto1) {
        this.nombre_incorrecto1 = nombre_incorrecto1
    }
    setIdiomaIncorrecto2(nombre_incorrecto2) {
        this.nombre_incorrecto2 = nombre_incorrecto2
    }
    setIdiomaIncorrecto3(nombre_incorrecto3) {
        this.nombre_incorrecto3 = nombre_incorrecto3
    }
    getIdiomaIncorrecto1() {
        return this.nombre_incorrecto1
    }
    getIdiomaIncorrecto2() {
        return this.nombre_incorrecto2
    }
    getIdiomaIncorrecto3() {
        return this.nombre_incorrecto3
    }

    borrarEventos() {
        //   this.boton1.addEventListener("click", (event) => null);
        //   this.boton2.addEventListener("click", (event) => null);
        //   this.boton3.addEventListener("click", (event) => null);
        //   this.boton4.addEventListener("click", (event) => null);
        this.boton1.removeEventListener('click', this.var_boton1, true);
        this.boton2.removeEventListener('click', this.var_boton2, true);
        this.boton3.removeEventListener('click', this.var_boton3, true);
        this.boton4.removeEventListener('click', this.var_boton4, true);
        alert("eventos borrados")
    }
}