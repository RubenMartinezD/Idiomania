class Model {

    constructor() {}

    /**
     * Método para obtener una frase al azar de la base de datos e insertarla en el html
     * @returns {string} respuesta[0].contenido La frase en sí
     */
    obtenerFrase() {
        /**
         * La variable que contendrá el JSON parseado
         * @type {array}
         */
        var respuesta = "";
        /**
         * El id de la frase que se buscará en la tabla frases base de datos (clave primaria)
         * @type {integer}
         */
        var id_frase = Math.floor(Math.random() * 120) + 1;
        $.ajax({
            data: { "id_frase": id_frase },
            url: 'php/obtenerFrase.php',
            type: 'get',
            async: false,
            success: function(response) {
                //El JSON que contendrá la frase (respuesta[i].contenido)
                respuesta = JSON.parse(response);
            }
        });
        this.turno.setFrase(respuesta[0].contenido);
        return respuesta[0].contenido;
    };

    /**
     * Método para obtener un idioma al azar de la base de datos
     * @returns {array} arraydatosidioma - array con los datos de idioma extraidos de la base datos
     */
    obtenerIdioma() {
        /**
         * La variable que contendrá el JSON parseado
         * @type {array}
         */
        var respuesta_idioma = "";
        /**
         * el id que se buscará en la base de datos, tabla idiomas
         * @type {integer}
         */
        var id_idioma = Math.floor(Math.random() * 25) + 1;
        //Extraer con ajax el idioma correspondiente y sus datos
        $.ajax({
            data: { "id_idioma": id_idioma },
            url: 'php/obtenerIdioma.php',
            type: 'get',
            async: false,
            success: function(response) {
                respuesta_idioma = JSON.parse(response);

            }
        });
        this.turno.setIdIdiomaCorrecto(respuesta_idioma[0].id_idioma);
        this.turno.setCodigoIdiomaCorrecto(respuesta_idioma[0].codigo_idioma);
        this.turno.setNombreIdiomaCorrecto(respuesta_idioma[0].nombre_idioma);
        /**
         * array con los datos de idioma extraido
         * @type {array}
         */
        var array_datos_idioma = [this.turno.getNombreIdiomaCorrecto(), this.turno.getCodigoIdiomaCorrecto(), this.turno.getIdIdiomaCorrecto()];
        return array_datos_idioma;
    };

    /**
     * Método para obtener un idioma para las opciones incorrectas
     * @param {integer} id_idioma - El ID del idioma en la base de datos (clave primaria)
     * @param {integer} numero_slot - El número del slot que ocupará el almacenaje de la variable
     */
    obtenerIdiomasIncorrectos(id_idioma, numero_slot) {
        /**
         * Variable donde se guardará el nombre del idioma correspondiente al ID
         */
        var respuesta = ''
        $.ajax({
            data: { "id_idioma": id_idioma },
            url: 'php/obtenerIdioma.php',
            type: 'get',
            async: false,
            success: function(response) {
                /**
                 * El JSON que contendrá los datos del idioma
                 * @type {array}
                 */
                var idioma = JSON.parse(response);
                respuesta = idioma[0].nombre_idioma;

            }
        });
        /**
         * Switch para determinar al azar qué idioma incorrecto va en cada slot
         */
        switch (numero_slot) {
            case 0:
                this.turno.setIdiomaIncorrecto1(respuesta);
                break;
            case 1:
                this.turno.setIdiomaIncorrecto2(respuesta);
                break;
            case 2:
                this.turno.setIdiomaIncorrecto3(respuesta);
                break;
        }
    };

    /**
     * Método para obtener los ID de tres idiomas distintos del correcto (Podrían ser idénticos entre sí, lo cual sería una pista).
     * @returns {array} arrayidiomasincorrectos - array con los ID de los idiomas incorrectos
     */
    recogerMasIdiomas() {
        /** 
         * Contiene el ID del idioma correcto, el cual no debe repetirse.
         * @type {integer}
         */
        var idioma_prohibido = this.turno.getCodigoIdiomaCorrecto();
        console.log("Idioma recogido:" + idioma_prohibido);
        /**
         * Array para introducir los ID correspondientes a idiomas distintos al correcto
         * @type {array}
         */
        var array_idiomas_incorrectos = [];
        for (let i = 0; i < 3; i++) {
            do { array_idiomas_incorrectos[i] = Math.floor(Math.random() * 25) + 1; }
            while (array_idiomas_incorrectos[i] == idioma_prohibido)
            //se introduce el número de ID del idioma y el slot donde irá (0,1,2)
            this.obtenerIdiomasIncorrectos(array_idiomas_incorrectos[i], i);
        }
        return array_idiomas_incorrectos
    };

    /**
     * Método que extrae el idioma y la frase incrustados en el html y se dispone a traducir la frase y mostrarla por pantalla. Al ser asíncrono por necesidad, es difícil extraer su resultado de forma normal.
     */
    traducirFrase() {
        /**
         * Frase correspondiente al turno actual, en inglés sin traducir, para su uso con la API
         * @type {string} 
         */
        var frase_extraida = this.turno.getFrase();
        /**
         * Código del idioma correcto, para su uso con la API
         * @type {string} 
         */
        var codigo_extraido = this.turno.getCodigoIdiomaCorrecto();
        /**
         * Función que realiza una llamada a la API de DeepL mediante axios empleando los parámetros entregados anteriormente
         * @returns {JSON} response - Devuelve un archivo JSON con la frase traducida
         */
        async function traduccion() {
            const response = await axios
                .get("https://api-free.deepl.com/v2/translate", {
                    params: {
                        auth_key: "a57a350c-3be2-fa4f-3318-a5e5e8adf8c8:fx",
                        text: frase_extraida,
                        target_lang: codigo_extraido
                    },
                    proxy: {
                        host: "localhost",
                        port: 8080
                    }
                });
            return response;
        }
        // Extrae la frase traducida del JSON y la mete en un array. Después se introduce dicha frase en una etiqueta del html que se mostrará al usuario
        traduccion().then(function(resultado) {
            console.log(JSON.parse(resultado.request.response).translations[0].text);
            $("#frase_traducida").html((JSON.parse(resultado.request.response).translations[0].text))
        })


    };

    /**
     * Método para colocar en cada botón del HTML el nombre de cada idioma y si es el botón correcto o no
     */
    colocarBotones() {
        this.turno.setNuevoLugarRespuestaCorrecta();
        /**
         * Nombre correspondiente al idioma correcto
         * @type {string}
         */
        var idiomatraducido = this.turno.getNombreIdiomaCorrecto();
        /**
         * Nombre correspondiente a uno de los idiomas incorrectos
         * @type {integer}
         */
        var idiomaextra0 = this.turno.getIdiomaIncorrecto1();
        /**
         * Nombre correspondiente a uno de los idiomas incorrectos
         * @type {integer}
         */
        var idiomaextra1 = this.turno.getIdiomaIncorrecto2();
        /**
         * Nombre correspondiente a uno de los idiomas incorrectos
         * @type {integer}
         */
        var idiomaextra2 = this.turno.getIdiomaIncorrecto3();

        // Cálculo de la disposición de botones de los idiomas incorrectos
        do { this.turno.setRespuestaIncorrecta1(Math.floor(Math.random() * 4) + 1) }
        while (this.turno.getRespuestaIncorrecta1() == this.turno.getLugarRespuestaCorrecta());
        do { this.turno.setRespuestaIncorrecta2(Math.floor(Math.random() * 4) + 1) }
        while (this.turno.getRespuestaIncorrecta2() == this.turno.getLugarRespuestaCorrecta() || this.turno.getRespuestaIncorrecta2() == this.turno.getRespuestaIncorrecta1());
        do { this.turno.setRespuestaIncorrecta3(Math.floor(Math.random() * 4) + 1) }
        while (this.turno.getRespuestaIncorrecta3() == this.turno.getLugarRespuestaCorrecta() || this.turno.getRespuestaIncorrecta3() == this.turno.getRespuestaIncorrecta1() || this.turno.getRespuestaIncorrecta3() == this.turno.getRespuestaIncorrecta2());
        switch (this.turno.getLugarRespuestaCorrecta()) {
            case 1:
                //Se le pasa el nombre del idioma junto con el valor, que le indica que es la respuesta correcta
                this.turno.boton1.textContent = idiomatraducido
                this.turno.boton1.value = "C"
                break;
            case 2:
                this.turno.boton2.textContent = idiomatraducido
                this.turno.boton2.value = "C"
                break;
            case 3:
                this.turno.boton3.textContent = idiomatraducido
                this.turno.boton3.value = "C"
                break;
            case 4:
                this.turno.boton4.textContent = idiomatraducido
                this.turno.boton4.value = "C"
                break;
        }
        switch (this.turno.getRespuestaIncorrecta1()) {
            case 1:
                this.turno.boton1.textContent = idiomaextra0
                this.turno.boton1.value = "I"
                break;
            case 2:
                this.turno.boton2.textContent = idiomaextra0
                this.turno.boton2.value = "I"
                break;
            case 3:
                this.turno.boton3.textContent = idiomaextra0
                this.turno.boton3.value = "I"
                break;
            case 4:
                this.turno.boton4.textContent = idiomaextra0
                this.turno.boton4.value = "I"
                break;
        }
        switch (this.turno.getRespuestaIncorrecta2()) {
            case 1:
                this.turno.boton1.textContent = idiomaextra1
                this.turno.boton1.value = "I"
                break;
            case 2:
                this.turno.boton2.textContent = idiomaextra1
                this.turno.boton2.value = "I"
                break;
            case 3:
                this.turno.boton3.textContent = idiomaextra1
                this.turno.boton3.value = "I"
                break;
            case 4:
                this.turno.boton4.textContent = idiomaextra1
                this.turno.boton4.value = "I"
                break;
        }
        switch (this.turno.getRespuestaIncorrecta3()) {
            case 1:
                this.turno.boton1.textContent = idiomaextra2
                this.turno.boton1.value = "I"
                break;
            case 2:
                this.turno.boton2.textContent = idiomaextra2
                this.turno.boton2.value = "I"
                break;
            case 3:
                this.turno.boton3.textContent = idiomaextra2
                this.turno.boton3.value = "I"
                break;
            case 4:
                this.turno.boton4.textContent = idiomaextra2
                this.turno.boton4.value = "I"
                break;
        }
    };

    /**
     * Función que actúa como un pack 6 en 1 para entregar una frase en un idioma al azar, junto con la colocación de opciones en botones y actualización de la puntuación
     */
    randomizarFrase() {

        this.obtenerFrase();
        this.obtenerIdioma();
        this.traducirFrase();
        this.recogerMasIdiomas();
        this.colocarBotones();
        this.jugador.definirPuntos();
    };

    /**
     * Función que recoge por evento la respuesta del jugador y determina si es correcta o no
     * @param {event} event El evento que ocurre cuando el jugador pincha en un botón
     */
    respuestaJugador(event) {
        if (event.target.value == 'C') {
            console.log("Acertaste");
            this.jugador.respuestaCorrecta();
            this.randomizarFrase();
        } else if (event.target.value == 'I') {
            console.log("Fallaste");
            this.jugador.respuestaIncorrecta();
            this.randomizarFrase();
        }
    };

    /**
     * Función que inserta en la base de datos los datos de partida: nombre de jugador y puntos
     */
    insertarPuntuacion() {
        /**
         * Puntos que el jugador obtuvo en la partida
         * @type {integer} puntos
         */
        var puntos = this.jugador.getPuntos();
        /**
         * Nombre que el jugador se dio en la partida
         * @type {string} usuario 
         */
        var usuario = this.jugador.getNombre();
        //Inserción con AJAX en la base de datos
        $.ajax({
            data: {
                "nombre_usuario": usuario,
                "puntuacion_final": puntos
            },
            url: 'php/insertarPuntuacion.php',
            type: 'get',
            async: false,
            success: function(response) {}
        });
    };

    /**
     * Método que extrae y muestra las puntuaciones de la base de datos en un array sencillo
     * @returns {array} array_frase -  Array con los datos de puntuaciones extraidos
     */
    mostrarPuntuaciones = () => {
        /**
         * Tabla donde se guarda el select parseado
         * @type {array}
         */
        var tablita_puntos = "";
        /**
         * Array donde dos arrays con datos de la base de datos se condensarán un uno
         * @type {array}
         */
        var array_frase = ["LISTA DE PUNTUACIONES"]
        $.ajax({
            url: 'php/obtenerLeaderboard.php',
            type: 'get',
            async: false,
            success: function(response) {
                tablita_puntos = JSON.parse(response);
                for (let i = 0; i < 10; i++) {
                    let posicion = i + 1;
                    let partefrase = (posicion + " " + tablita_puntos[i].nombre_usuario + ":" + tablita_puntos[i].puntuacion)
                    console.log(partefrase)
                    array_frase.push(partefrase)
                }
            }
        });
        /**
         * Tabla donde se guardan los datos del array simplificado en formato html
         * @type {string}
         */
        var tabla_records = array_frase[0] + "<br>" + array_frase[1] + "<br>" + array_frase[2] + "<br>" + array_frase[3] + "<br>" + array_frase[4] + "<br>" + array_frase[5] + "<br>" + array_frase[6] + "<br>" + array_frase[7] + "<br>" + array_frase[8] + "<br>" + array_frase[9] + "<br>" + array_frase[10]
        document.getElementById("tabla_records").innerHTML = tabla_records
        return array_frase
    };

    /**
     * Función pack que se ejecuta al comenzar el juego
     */
    iniciarJuego = () => {
        /**
         * Objeto del jugador que se define al principio de la partid
         * @type {object} 
         */
        this.jugador = new Player();
        /**
         *  Objeto del turno que se define al principio de la partida y se va actualizando
         * @type {object} 
         */
        this.turno = new Turno();
        this.jugador.setNombre();
        this.jugador.contandoAtras();
        this.randomizarFrase();
    };

    /**
     * Función pack que se ejecuta al acabar el juego
     */
    finJuego() {
        this.turno.borrarEventos();
        this.insertarPuntuacion();
    };
}