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
      alert('rellena el formulario');

  }
  else {
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
      localStorage.setItem('carrito', []);
  }


}