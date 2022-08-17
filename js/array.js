class Tarta {
    constructor(id, nombre, precio, tamaño, img) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.tamaño = tamaño
        this.img = img
    }
}

// listado de tartas

function listadoTartas() {
    Tartas.push(new Tarta(1, "Lemon Pie", 900, "mediana"))
    Tartas.push(new Tarta(2, "Tarta oreo", 950, "grande"))
    Tartas.push(new Tarta(3, "Cheesecake", 1050, "mediana"))
    Tartas.push(new Tarta(4, "Cheesecake de nutella", 1300, "grande"))
    Tartas.push(new Tarta(5, "Brownie", 1000, "mediana"))
}
listadoTartas()

// agregar DOM

function dom() {
    let container = document.querySelector(".container")
    Tartas.forEach(el => {
        let div = document.createElement("div")
        div.className = "card"
        div.innerHTML = `<img class="card-img" src="${"el.img"}/> 
        <p class="card-title">${el.nombre}</p>
        <p class="card-price">${el.precio}</p>
        <button id="${el.id}" class="card-button">Comprar</button>`
        container.append(div)
    })
}
dom()

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

function agregarAlCarrito() {
    const buscar = productos.find(el => el.id === parseInt())
    agregarAlCarrito.push(buscar)
    agregarAlCarritoDom()
}

// agregar dom al carrito 

function agregarAlCarritoDom() {
    let tartas = document.querySelector(".tartas")
    tartas.innerHTML = ""
    agregarAlCarrito.forEach(el => {
        let tr = document.createElement("tr")
        tr.className = "cart"
        tr.innerHTML = `<td class="tartas-id">${el.id}</td>
        <td>${el.nombre}</td>
        <td>${el.precio}</td>
        <td><button class="eliminar">X</button></td>`
        tabla.append(tr)

    })
    eliminarProductoDom()
}

// eliminar carrito 

function eliminarProductoDom() {
    let eliminar = document.querySelectorAll(".eliminar")
    eliminar.forEach(el=>{
        el.addEventListener("click", (ev)=>{
            let button = ev.target.parentElement.parentElement
            let eliminarDom = button .querySelector(".tartas-id")
            button.remove()
            eliminarProductoCart(eliminarDom.innerText)
        })
    })
}

function eliminarProductoCart(id) {
    carrito = carrito.filter(el=> el.id !== parseInt(id))
}




