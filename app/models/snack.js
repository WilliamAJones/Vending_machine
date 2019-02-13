//PRIVATE

//PUBLIC

export default class Snack{
    constructor(name, img, price, location){
        this.snack=name
        this.img=img
        this.price=price
        this.location=location
    }
    getTemplate(){
        return `    
        <div class="col-4">
            <div class="card content-center">
                <img src="${this.img}" class="card-img-top">
                <div class= "align-items-center text-center card-body">
                    <h3> ${this.location}</h3>
                    <h5> ${this.snack}</h5>
                    <p> ${this.price.toFixed(2)}</p>
                    <button class= "button purchase" onClick="app.controllers.vendController.purchaseSnack('${this.location}') ">Purchase Item</button>
                </div>
            </div>
        </div>`
    }
}