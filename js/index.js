class tarta {
    constructor(producto, tamaño, precio) {
        this.producto = producto
        this.tamaño = tamaño
        this.precio = precio
    }
    price() {
        //debugger 
        if (this.producto == "Lemon pie") {
            let priceL = this.tamaño * mediano
            return priceL
        }
        else if (this.producto == "Cheesecake") {
            let priceCh = this.tamaño * grande
            return priceCh
        }
        else {
            let priceO = this.tamaño * chico
            return priceO
        }
    }
}
function carrito(){
    let producto = prompt("Que desea comprar?: Lemon pie, Cheesecake o ambas")
    producto = producto.toLocaleLowerCase()
    let tamaño = parseInt(prompt("Ingrese el tamaño de la tarta, (chico,mediano,grande)"))
    let precio = precio 
    buy.push (new tarta(producto,tamaño,precio))
    console.table(buy)
}
carrito ()