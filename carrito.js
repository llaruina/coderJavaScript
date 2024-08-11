const main = document.getElementById("main");

const cargarCarritoDesdeLocalStorage = () => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
};

const carritoGuardado = cargarCarritoDesdeLocalStorage()

carritoGuardado.forEach(el => {
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
