const form = document.querySelector('#procesar-pago');
const totalProceso = document.querySelector('#totalProceso');

document.addEventListener('DOMContentLoaded', procesarCarrito);
form.addEventListener('submit', enviarPedido);

function procesarCarrito() {
    carrito.forEach((prod) => {
        const listaCompra = document.querySelector('#lista-compra tbody');
        const { id, nombre, precio, cantidad } = prod;
        const row = document.createElement("tr");

        row.innerHTML += `
      <td>
       ${id}
       </td>
       <td>
       ${nombre}
       </td>
       <td>
       ${cantidad}
       </td>
       <td>
       ${'S/. ' + precio * cantidad}
       </td>
       `;
        listaCompra.appendChild(row);
    })
    totalProceso.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
}

function enviarPedido(e) {
    e.preventDefault();
    const cliente = document.querySelector('#cliente').value;
    const correo = document.querySelector('#correo').value;

    if (correo === '' || cliente === '') {
        swal("Ingresa datos en el formulario", "", "error");
    }
    else {
        const btn = document.getElementById('button');

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_j7ayfsj';

        emailjs.sendForm(serviceID, templateID, this);

        swal("Gracias por su compra!", "+Tech se lo agradece", "success")
            .then((value) => {
                btn.value = 'Finalizar compra';
                localStorage.setItem("carrito", []);
                location.href = ("home.html");
            });
    }
}
