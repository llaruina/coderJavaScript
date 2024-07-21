let seguirComprando = true

const productos = ["pantalon", "remera", "camisa", "zapatos"]

let productosComprados = []

let total = 0

let cantidad = 1

let producto = ""


function calcularTotal(producto, precio, cantidad = 1) {
    total += precio * cantidad
}


function llenarCarrito(codigo, producto) {

    cantidad = 1

    if (codigo >= 1 && codigo <= 4) {
        cantidad = prompt("Ingrese la cantidad a comprar")
    }

    switch (codigo) {

        case "1":
            calcularTotal(producto, 100, cantidad)
            break

        case "2":
            calcularTotal(producto, 200, cantidad)
            break

        case "3":
            calcularTotal(producto, 300, cantidad)
            break

        case "4":
            calcularTotal(producto, 400, cantidad)
            break

        default:
            alert("Codigo no valido")
            break
    }
}

while (seguirComprando) {

    const codigo = prompt("Ingrese el código del producto que desea comprar: \n \n Cod  Producto    Precio \n" +
        "  1-     " + productos[0] + "  $ 100 c/u \n  2-     " + productos[1] + "   $200 c/u \n  3-     " + productos[2] +
        "   $300 c/u \n  4-     " + productos[3] + "  $400 c/u")

    llenarCarrito(codigo, productos[codigo - 1])

    seguirComprando = confirm("¿Desea seguir comprando?")
}

alert("El importe a pagar es: " + total)