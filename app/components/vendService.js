//PRIVATE
import VendingMachine from "../models/vendingMachine.js";

let _balance = 0.00;

let _vendingMachine = new VendingMachine()

//PUBLIC

export default class VendService{
    constructor(){
    console.log('...Building Services...');
    console.log('Balance: ' , _balance);

}
get Balance(){
    return _balance.toFixed(2)
}
get Snacks(){
    return _vendingMachine.snacks

}
addQuarter(){
    _balance += .25
}
addDime(){
    _balance += .10
}
addNickel(){
    _balance += .05
}
refund(){
    let change = _balance.toFixed(2)
    if( _balance > 0){
    alert("Please Take Your Change below : $" + change)
    _balance = _balance - change
    }
    
    alert("Thank You For Shopping")
}
purchaseSnack(snackLocation){
    //find the snack who's name equals the snackName parameter
    //if vm.balance is greater than or equal to found snack, then etc...
    if( _balance >= _vendingMachine.snacks[snackLocation].price) {
        _balance = _balance - _vendingMachine.snacks[snackLocation].price
    }else{
    alert('Moar monie plx')
    }
}
}