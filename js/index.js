class producto {
    constructor(id, img, nombre, precio) {
        this.id = id
        this.img = img
        this.nombre = nombre
        this.precio = precio

    }
}

const productos = []
let carrito = JSON.parse(localStorage.getItem("carritoLocal")) || []
let numeroCarrito = document.querySelector(".numero")
let totalCarrito = document.querySelector(".total")



function agregarProductos() {
    productos.push(new producto(1, `img/Lemonpie-min.jpg`,"Lemon Pie", 1500))
    productos.push(new producto(2, `img/Tortaoreo-min.jpg`,"Tarta oreo", 1350))
    productos.push(new producto(3, `img/Crumbledemanzana-min.jpg`,"Crumble de manzana", 1250))
    productos.push(new producto(4, `img/Brownie-min.jpg`,"Brownie", 1500))
    productos.push(new producto(5,`img/Tortamoussech-min.jpg`,"Tarta mousse de Chocolate",1300))
    productos.push(new producto(6, `img/Torredealfajores-min.jpg`,"Torre de alfajores",550))
    productos.push(new producto(7,`img/chocomerengon-min.jpg`,"Chocomerengon",300))
    productos.push(new producto(8, `img/Alfajores3-min.jpg`,"Alfajores",200))

}

function ProductosDom() {
    let container = document.querySelector(".products")
    productos.forEach(el => {
        let div = document.createElement("div")
        div.className = "card"
        div.innerHTML = 
        `<img class="img" src="${el.img}"/> 
        <p class="card-nombre">${el.nombre}</p>
        <p class="card-price">$${el.precio}</p>
        <button id="btn-agregar${el.id}" class="card-btn">Agregar al carrito</button>`
        container.append(div)
    })
    comprar()
}


function comprar() {
    productos.forEach((prod) => {
        document.querySelector(`#btn-agregar${prod.id}`).addEventListener("click", () => {
            agregarAlCarrito(prod.id)
        })
    })
}
comprar()

function agregarAlCarrito(IdParametro) {
    const buscar = productos.find(el => el.id == IdParametro)
    carrito.push(buscar)
    localStorage.setItem("carritoLocal", JSON.stringify(carrito))
    calcularTotal()
    agregarAlCarritoDom()
    alert_agregar()
}


function agregarAlCarritoDom() {
    let cuerpo = document.querySelector(".cuerpo")
    cuerpo.innerHTML = ""
    carrito.forEach(prod => {
        let tr = document.createElement("tr")
        tr.className = "cart"
        tr.innerHTML = 
        `<td class= "table-id">${prod.id}</td>
        <td><img class="table-img" src="${prod.img}"/></td>
        <td>${prod.nombre} <class="nombre"></td>
        <td>$${prod.precio} <class="precio"></td>
        <td><button id="btn-eliminar-${prod.id}" class="eliminar-btn">X</button></td>
        `
        cuerpo.append(tr)
    })
    borrarProducto()
    calcularTotal()
}


function calcularTotal() {
    let total = carrito.reduce((acc, prod) => acc + prod.precio, 0)
    totalCarrito.innerHTML = total

}

function borrarProducto() {
    let eliminarBtn = document.querySelectorAll(".eliminar-btn")
    eliminarBtn.forEach(el => {
        el.addEventListener("click", (ev) => {
            let button = ev.target.parentElement.parentElement
            let eliminarDom = button.querySelector(".table-id")
            eliminar(eliminarDom.innerText)
            calcularTotal()
            agregarAlCarritoDom()
        })
    })
}

function eliminar(param) {
    let item = carrito.find(el => el.id == param)
    let index = carrito.indexOf(item)
    carrito.splice(index, 1)
    localStorage.setItem("carritoLocal", JSON.stringify(carrito))
    alert_eliminar()
}


let boton_compra = document.getElementById("boton-comprar")

boton_compra.addEventListener("click", compraFinalizada)


function alert_agregar(){
    Swal.fire({
        title: "El producto se añadio al carrito exitosamente",
        color: "black",
        background: "#006d77",
        timer: 2000,
        position: "top",
        showConfirmButton: false,
    })
}

function alert_eliminar() {
    Swal.fire({
        icon: "error",
        title: "Producto eliminado del carrito",
        color: "black",
        timer: 2000,
        background: "#ffddd2",
        showConfirmButton: false
    })
}
function compraFinalizada() {
    Swal.fire({
        title: "¡Gracias por su compra!",
        color: "black",
        confirmButtonColor: "#006d77",
    })
}


//FETCH

async function getProductos() {
    try {
        const result = await fetch("productos.json")
        const data = await result.json()
        const productos = data.items
        console.log('acá se imprimen los productos en el DOM->', productos)
    }
    catch (err) {
        console.log(err)
    }
}
getProductos()


agregarProductos()
ProductosDom()
agregarAlCarritoDom()



