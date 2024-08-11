const main = document.getElementById("main");

const resumen = document.getElementById("resumen");

let total = 0


const cargarCarritoDesdeLocalStorage = () => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
};

const carritoGuardado = cargarCarritoDesdeLocalStorage()

carritoGuardado.forEach(el => {

    total = total + el.price;

    const cardProducto = `
        <div class="contenedor">
            <h3>Titulo: ${el.title}</h3>
            <img src="${el.image}" />
            <p>Precio: $${el.price} </p>
            <p>Categoria: ${el.category}</p>
        </div>
        `

    main.innerHTML += cardProducto;
})


resumen.innerHTML = `<h2>El total a pagar es: $${total}</h2>`;

function calcularTotal(producto, precio, cantidad = 1) {
    total += precio * cantidad
}

