const main = document.getElementById("main");

const resumen = document.getElementById("resumen");

const datosEnvio = document.getElementById("datosEnvio");

let total = 0

let carritoGuardado = []


const cargarCarritoDesdeLocalStorage = () => { 
    carritoGuardado = []
    carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
};

carritoGuardado = cargarCarritoDesdeLocalStorage()

carritoGuardado.forEach(el => {

    total = total + el.price;

    const cardProducto = `
        <div class="contenedorChico">
            <h3>Titulo: ${el.title}</h3>
            <img src="${el.image}" />
            <p>Precio: $${el.price} </p>
            <p>Categoria: ${el.category}</p>
        </div>
        `

    main.innerHTML += cardProducto;
})



resumen.innerHTML = `<h2>El total a pagar es: $${total}</h2>
<button class="btnComprar"> Finalizar compra </button>
`;


document.addEventListener('click', function(e) {
    if (e.target && e.target.matches('.btnComprar')) {
        const envio = `
            <div class="contenedorChico">
                <p> 
                    <label> Nombre:
                    <input type="text" id="nombre"> 
                </p> 

                <p> 
                    <label> Direccion:
                    <input type="text" id="direccion"> 
                </p> 

                <p> 
                <label> Email:
                <input type="text" id="email"> 
                </p> 

                <button class="btnEnviar"> Enviar </button>
            </div>
            `;
        datosEnvio.innerHTML = envio;
        console.log('Formulario de envío añadido');
    }

    if (e.target && e.target.matches('.btnEnviar')) {
        console.log("Boton enviar clic")
        const volver = `
            <div class="contenedorChico">
                <a href="index.html"> Volver al Inicio</a>  
            </div>
            `;
        datosEnvio.innerHTML += volver;
    }
});

function calcularTotal(producto, precio, cantidad = 1) {
    total += precio * cantidad
}

