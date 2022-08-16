class Tarta {
    constructor(id, producto, precio, tamaño) {
        this.id = id
        this.producto= producto
        this.precio = precio
        this.tamaño = tamaño
    }
}

const tartas = []

function agregarTartas() {
    tartas.push(new Tarta(1, "Lemon Pie", 900, "mediana"))
    tartas.push(new Tarta(2, "Tarta Oreo", 950, "grande"))
    tartas.push(new Tarta(3, "Cheesecake", 1050, "grande"))
}
agregarTartas();

function recorrerTartas() {
    tartas.forEach(element => {
        console.table(element)
    })
}

alert("Bienvenidos a Brikka")
pedido = prompt("Que tarta vas a comprar? : \nLemon Pie, \nTarta Oreo, \nCheesecake")
let buscar = tartas.filter(el => el.producto.includes(pedido))

alert("A continuación le diremos cual es el precio a pagar por la Tarta")

alert(`El precio a pagar es de: ${buscar[0].precio}`)

alert("Gracias por tu compra")