const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const cantidad = document.getElementById('cantidad');
const precioTotal = document.getElementById('precioTotal');
const cantidadTotal = document.getElementById('cantidadTotal');
const comprar = document.getElementById('comprar-carrito');
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    actualizarCarrito();
});

if (botonVaciar) {
    botonVaciar.addEventListener('click', () => {
        carrito.length = [];
        actualizarCarrito();
    });
}

stockProductos.forEach((producto) => {

    const div = document.createElement('div');
    div.classList.add('producto');
    div.classList.add('col');
    div.classList.add('mb-5');

    div.innerHTML = `
        <div class="card mb-5" id = "card">
        <div class="card h-100">
        <img src=${producto.img} alt= "">
        </div>
    
        <div class="card-body">
        <div class="text-center">
        <h3>${producto.nombre}</h3>
        
        <p>${producto.desc}</p>
        <p class="precioProducto">Precio: S/. ${producto.precio}</p>
        </div>
        </div>
    
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
        <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        </div>
        </div>
        </div>
        `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`agregar${producto.id}`);
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id);
        VanillaToasts.create({
            title: 'Se agregó al carrito',
            text: '1 ' + producto.nombre,
            type: 'info',
            icon: '..//img/ok.png',
            positionClass: 'bottomLeft',
            timeout: 3000,
            single: true,
        });
    });
});

if (comprar) {
    comprar.addEventListener('click', () => {
        if (carrito.length == 0) {
            Swal.fire({
                title: "¡Tu carrito está vacio!",
                text: "Compra algo para continuar con la compra",
                icon: "error",
                confirmButtonText: "Aceptar",
                confirmButtonColor: '#175898',


            });
        } else {
            location.href = "list.html";
        }
    });
}

const agregarAlCarrito = (prodId) => {

    const existe = carrito.some(prod => prod.id === prodId); //comprobar si el elemento ya existe en el carro
    if (existe) {
        carrito.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad++;
            }
        });
    } else {
        const item = stockProductos.find((prod) => prod.id === prodId);
        carrito.push(item);
    }
    actualizarCarrito();
};

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);

    const indice = carrito.indexOf(item);

    carrito.splice(indice, 1);
    actualizarCarrito();
};

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = "";

    localStorage.setItem('carrito', JSON.stringify(carrito));
    carrito.forEach((prod) => {
        const div = document.createElement('div');

        div.className = ('productoEnCarrito');
        div.innerHTML = `          
          <div class="column"> <p>${prod.nombre}</p> </div>
          <div class="column"> <p>Precio: S/. ${prod.precio}</p> </div>
          <div class="column"> <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p></div>
          <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
           `;
        contenedorCarrito.appendChild(div);
    });

    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
};
