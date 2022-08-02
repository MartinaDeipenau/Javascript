let ver 
let nombreProducto 



function verProducto() {
    let ver = alert(
        "Bienvenido a Brikka Patisserie");
    let nombreProducto = prompt(
        "Seleccione los productos: Lemon pie, Box desayuno mini, Baguette de jamon");
    console.log("Producto elegido:", seleccionarPoducto(nombreProducto));

    let producto = prompt("Escriba su producto:");
    if (producto === "") {
        alert("No eligio ningun producto");
    }
    else {
        alert("Cargando...");
    }
}

function seleccionarProducto(item) {
    switch (item) {
        case "Lemon pie":
            return "Base de galletas de vainilla, con crema de limon y merengue Italiano. Su valor es de $1250";
        case "Box desayuno mini":
            return "Contiene: 1 alfajor de maicena y de frutos rojos, 2 medialunas, 1 baguette de jamon mini y 1 jugo exprimido(sabor a eleccion). Su valor es de $1000";
        case "Baguette de Jamon":
            return "Pan blanco, jamon y queso a eleccion. Su valor es de $750";
        default: 
        return "No eligio producto";
    }
}