import VendController from "./components/vendController.js";

class App {
    constructor(){
        this.controllers={
            vendController : new VendController()
        }
    }
}

window.app = new App()