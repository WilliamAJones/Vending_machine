//PRIVATE
import Snack from "./snack.js";

//PUBLIC
// let snack = Snack['']
export default class VendingMachine{
    constructor(){
        this.snacks = {
            A1: new Snack('Gum', './assets/gum.png', .50, 'A1'),
            A2: new Snack('Jerky','./assets/jerky.png',1.15, 'A2'),
            A3: new Snack('Goldfish', './assets/goldfish.png',1.25, 'A3'),
        }
    }
}