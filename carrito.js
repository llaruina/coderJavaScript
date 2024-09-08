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

total = total.toFixed(2);

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

            <div id="mensajeError" style="color:red;">

            `;
        datosEnvio.innerHTML = envio;

        console.log('Formulario de envío añadido');
    }

    if (e.target && e.target.matches('.btnEnviar')) {
        console.log("Boton enviar clic")

        const nombre = document.getElementById('nombre').value.trim();
        const direccion = document.getElementById('direccion').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensajeError = document.getElementById('mensajeError');

        if (!nombre || !direccion || !email) {
            mensajeError.innerHTML = 'Por favor completa todos los campos.';
            return;
        } else {
            mensajeError.innerHTML = ''; 
           
                Swal.fire({
                title: "Compra finalizada!",
                 text: "En minutos le llegará un correo con el detalle!",
                icon: "success"
            });

    
            const volver =  `<a href="index.html"> Volver al Inicio</a>`


            datosEnvio.innerHTML += volver;
        }
        
        console.log("Formulario enviado correctamente");
    }
});
