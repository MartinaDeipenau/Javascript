class Producto {
    constructor( img, nombre, tamaño, precio, id) {
        this.img = img
        this.nombre = nombre
        this.tamaño = tamaño
        this.precio = precio
        this.id = id
    }
}
const productos = []

// listado de tartas

function agregarProductos() {
    productos.push(new Producto(1, "img","Lemon Pie", "mediana", 1000))
    productos.push(new Producto(2, "img","Tarta oreo", "grande", 1350))
    productos.push(new Producto(3, "img","Cheesecake", "mediana", 1050))
    productos.push(new Producto(4, "img","Cheesecake de nutella", "grande", 1500))
    productos.push(new Producto(5, "img","Brownie", "mediana", 1400))
}
agregarProductos()

// agregar DOM

function ProductosDom() {
    let container = document.querySelector(".container")
    productos.forEach(el => {
        let div = document.createElement("div")
        div.className = "card"
        div.innerHTML = `<img class="img" src="${el.img}"/> 
        <p class="card-nombre">${el.nombre}</p>
        <p class=""card-tamaño">${el.tamaño}</p>
        <p class="card-price">$${el.precio}</p>
        <button id="${el.id}" class="card-button">Agregar al carrito</button>`
        container.append(div)
    })
}
ProductosDom()

let carrito = []

// funcion comprar

function comprar() {
    let cardbutton = document.querySelectorAll(".card-button")
    cardbutton.forEach(el => {
        el.addEventListener("click", (ev) => {
            let button = ev.target
            let id = button.id
            console.log(id)
            agregarAlCarrito(id)
        })
    })
}
comprar()

// agregar al carrito

function agregarAlCarrito(IdParametro) {
    const buscar = productos.find(el => el.id === parseInt(IdParametro))
    carrito.push(buscar)
    agregarAlCarritoDom()
}

// agregar dom al carrito 

function agregarAlCarritoDom() {
    let cuerpo = document.querySelector(".cuerpo")
    cuerpo.innerHTML = ""
    carrito.forEach(el => {
        let tr = document.createElement("tr")
        tr.className = "cards"
        tr.innerHTML = `<td><img class="table-img" src="${el.img}"/></td>
        <td>${el.nombre}</td>
        <td>${el.tamaño}</td>
        <td>$${el.precio}</td>
        <td class="table-id">${el.id}</td>
        `
        cuerpo.append(tr)
    })
    eliminarProducto()
 }

// eliminar del carrito

function eliminarProducto() {
    let eliminarbutton = document.querySelectorAll(".eliminar-button")
    eliminarbutton.forEach(el=>{
        el.addEventListener("click", (ev)=>{
            let button = ev.target.parentElement.parentElement
            let eliminarDom = button.querySelector(".table-id")
            button.remove()
            eliminar(eliminarDom.innerText)
        })
    })
}
function eliminar(id) {
    carrito = carrito.filter(el=> el.id !== parseInt(id))
    
}





