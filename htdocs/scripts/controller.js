/**
 * Clase Controller
 *  Enlaza el model con el html
 * 
 * @field model encargado de los datos
 */
class Controller {
    constructor(model) {
        this.model = model
    }

}
const juego = new Controller(new Model)