//Private

import VendService from "./vendService.js";
import Snack from "../models/snack.js";



let _vendService = new VendService;

function draw(){
    let b = _vendService.Balance
    document.getElementById('dep').innerText = b
    
}
    function drawSnacks(){
        let snacks=_vendService.getSnacks
        let template = ''
            for (const key in _vendService.Snacks) {
                let snack = _vendService.Snacks[key];
                template += snack.getTemplate();
                    
                }
            document.getElementById('snack').innerHTML = template
        }


//Public
export default class VendController{
    constructor(){
        console.log('...Building Controller...')
        draw()
        drawSnacks()
    }
    addQuarter(){
        _vendService.addQuarter()
        draw()
    }
    addDime(){
        _vendService.addDime()
        draw()
    }
    addNickel(){
        _vendService.addNickel()
        draw()
    }
    refund(){
        _vendService.refund()
        draw()
    }
    purchaseSnack(snackLocation){
        console.log('you have selected '+ snackLocation)
        _vendService.purchaseSnack(snackLocation)
        draw()
    }
}