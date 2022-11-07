const file = document.getElementById("file");
const buton_aceptar = document.getElementById("buton-aceptar");

let image = document.getElementById("imageUser");

file.addEventListener("change", loadFile);
buton_aceptar.addEventListener("click", capturaInfo);

function loadFile() {
    image.src = window.URL.createObjectURL(event.target.files[0]);
    //base64
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onload = () => {
        localStorage.setItem("imageUser", reader.result);
    }
    reader.readAsDataURL(file);
}

function capturaInfo() {
    let nameUser = document.getElementById("input-user").value;
    localStorage.setItem("user", nameUser);
    localStorage.setItem("carrito", []);
}
