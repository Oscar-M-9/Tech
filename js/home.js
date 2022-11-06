const contenedorProductos = document.getElementById('contenedor-productos')

//TERCER PASO

const contenedorCarrito = document.getElementById('carrito-contenedor')
//SEXTO PASO
const botonVaciar = document.getElementById('vaciar-carrito')
//SEXTIMO PASO, MODIFICAR LOS CONTADORES
const contadorCarrito = document.getElementById('contadorCarrito')

//OCTAVO PASO
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')
//Para procesar compra
//List.js
const comprar = document.getElementById('comprar-carrito');

//fin list.js
let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    //need change 
    carrito = JSON.parse(localStorage.getItem('carrito'));
    actualizarCarrito();
    document.querySelector('#activaFuncion').click(procesarCarrito);
})


//SEXTO PASO
if (botonVaciar) {
    botonVaciar.addEventListener('click', () => {
        carrito.length = 0
        actualizarCarrito()
    })
}


//PRIMER PRIMER PASO, INYECTAR EL HTML

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
    contenedorProductos.appendChild(div)

    //2 - SEGUNDO PASO, LUEGO DE QUE INSERTEMOS EL HTML EN EL DOM:
    const boton = document.getElementById(`agregar${producto.id}`)
    //Por cada elemento de mi array, creo un div, lo cuelgo, le pongo un id particular, una vez colgado
    //le hago un get element by id (el de agregar) Obtengo el elemento y a dicho elemento le agregamos
    //el add event listener

    boton.addEventListener('click', () => {
        //esta funcion ejecuta el agregar el carrito con la id del producto
        agregarAlCarrito(producto.id);
        VanillaToasts.create({
            // notification title
            title: 'Se agregó al carrito',
            // notification message
            text: '1 ' + producto.nombre,
            // success, info, warning, error   / optional parameter
            type: 'info',
            // path to notification icon
            icon: '..//img/ok.png',
            // topRight, topLeft, topCenter, bottomRight, bottomLeft, bottomCenter
            positionClass: 'bottomLeft',
            // auto dismiss after 5000ms
            timeout: 3000,
            // hide any other toasts, keeping only the latest visible
            single: true,
            // executed when toast is clicked
        });

        //
    })
})

//List.js
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
            //alert('No hay ningún producto añadido')
        } else {
            location.href = "list.html"
        }

    })
}

// 1- PRIMER PASO

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some(prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro
    console.log("agregarCarrito")
    if (existe) { //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
        const prod = carrito.map(prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
            // map encuentre cual es el q igual al que está agregado, le suma la cantidad
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTÉ, AGREGAMOS EL CURSO AL CARRITO
        const item = stockProductos.find((prod) => prod.id === prodId) //Trabajamos con las ID
        //Una vez obtenida la ID, lo que haremos es hacerle un push para agregarlo al carrito
        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se ve.
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
}
//agregarAlCarrito(1) //Le pasamos el ID por parametro. Tenemos que asigarle como evento esta funcion al boton
//con el id de su producto correspondiente

// 5 - QUINTO PASO
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento q yo le pase y nos devuelve su indice.

    carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos 
    // un elemento 
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
    console.log(carrito)
}

const actualizarCarrito = () => {
    //4- CUARTO PASO
    //LOS APPENDS SE VAN ACUMULANDO CON LO QE HABIA ANTES
    //Cada vez que yo llame a actualizarCarrito, lo primero q hago
    //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
    //actualizado
    //3 - TERCER PASO. AGREGAR AL MODAL. Recorremos sobre el array de carrito.

    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)
    
    localStorage.setItem('carrito', JSON.stringify(carrito))
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `          
          <div class="column"> <p>${prod.nombre}</p> </div>
          <div class="column"> <p>Precio: S/. ${prod.precio}</p> </div>
          <div class="column"> <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p></div>
          <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
           `
        contenedorCarrito.appendChild(div)


    })


    /* carrito.forEach((prod) => {
     const div = document.createElement('div')
     div.className = ('productoEnCarrito')
     div.innerHTML = `
 
     <p>${prod.nombre}</p>
     <p>Precio:$${prod.precio}</p>
     <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
     <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
     `
     contenedorCarrito.appendChild(div)
 
     localStorage.setItem('carrito', JSON.stringify(carrito))
 
 })*/


    //SEPTIMO PASO
    contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
    //OCTAVO PASO
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.


}
