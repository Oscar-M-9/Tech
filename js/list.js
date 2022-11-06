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
    console.log('se agrega los productos');
    totalProceso.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
}

function enviarPedido(e) {
    e.preventDefault();
    console.log('Enviando...');
    const cliente = document.querySelector('#cliente').value;
    const correo = document.querySelector('#correo').value;
    console.log(cliente);
    console.log(correo);

    if (correo === '' || cliente === '') {

        swal("Ingresa datos en el formulario", "", "error")
        // alert('rellena el formulario');

    }
    else {

        const btn = document.getElementById('button');

        /*  document.getElementById('form')
              .addEventListener('submit', function (event) {
                  event.preventDefault();*/

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_j7ayfsj';

        emailjs.sendForm(serviceID, templateID, this)

        swal("Gracias por su compra!", "+Tech se lo agradece", "success")
            .then((value) => {
                btn.value = 'Finalizar compra';
                location.href = ("../index.html")
            });

        /*   .then(() => {
               btn.value = 'Finalizar compra';
               alert('Enviado correctamente!');
           }, (err) => {
               btn.value = 'Finalizar compra';
               alert(JSON.stringify(err));
           });
*/



        /*   });*/


        console.log('pasaste exitosamente');
        const spinner = document.querySelector('#spinner');
        spinner.classList.add('d-flex');
        spinner.classList.remove('d-none');

        setTimeout(() => {
            spinner.classList.remove('d-flex');
            spinner.classList.add('d-none');
            form.reset();

            const alertExito = document.createElement('p');
            alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success');
            alertExito.textContent = 'Compra realizada correctamente';
            form.appendChild(alertExito);

            setTimeout(() => {
                alertExito.remove();
            }, 3000)

        }, 3000);
        // localStorage.setItem('carrito', []);
        localStorage.clear()
    }


}