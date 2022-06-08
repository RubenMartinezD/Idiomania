/**
 * Clase Controller
 *  Enlaza el model con el html
 * 
 * @field model encargado de los datos
 */
class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
        this.view.botonInicio(this.model.iniciarJuego)
        this.view.botonPuntuaciones(this.model.mostrarPuntuaciones)
    }

}
const juego = new Controller(new Model, new View)