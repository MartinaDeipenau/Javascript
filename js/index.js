function verProductos (){
let welcome = alert("Bienvenido a Brikka Patisserie")
let productos = prompt("Que producto desea adquirir? 1)Lemon pie, 2)Desayuno mini, 3)Baguette de jamon")
while (productos != 1 && productos != 2 && productos !=3) {
    alert("La opcion elegida es incorrecta")
    productos = prompt("Por favor, ingrese que producto desea adquirir. 1)Lemon pie, 2)Desayuno mini, 3)Baguette de jamon")
}
}
verProductos ()
