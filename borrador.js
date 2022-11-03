/*
<!--<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Enter your description here" />
    <link rel="stylesheet" href="../css/normalize.css">
   
    <link rel="shortcut icon" href="../img/logo2.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.0/journal/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <title>Tech</title>
    <style>
        .avatar {
            min-width: 50px;
            height: 50px;
            display: flex;
            flex-direction: row;
        }

        .imageUser {
            width: 40px;
            height: 40px;
            margin: 5px;
            border-radius: 50%;
        }

        .bvnuser {
            margin-top: 10px;
            margin-left: 10px;
            color: #fff;
        }

        .sv {
            margin: 40px;
        }

        .card {
            background-color: #FFCDC648;
            box-shadow: 0px 2px 6px #000;
        }

        .cant {
            display: flex;
            flex-direction: row-reverse;
        }

        .ct {
            width: 100px;
        }

        .separator {
            width: 20px;
        }
    </style>

    <link rel="stylesheet" href="../css/home.css" />
</head>

<header>
    <ul class="container">
        <li><img class="imageUser" id="imageAvatar" src="../img/avatar.jpg" />
        </li>
        <li>Jugador(a):
            <input id="ingreTexto2" class="input-jugador"></input>
        </li>
        <li>Moves: <span>0</span></li>
        <li id="timer">Tiempo 0:00</li>
        <li><button class="btn btn-danger">REINICIAR</button></li>
    </ul>
</header>

<div class="sv">
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card h-100">
                <img src="https://realplaza.vtexassets.com/arquivos/ids/16502762-800-auto?v=637540366718200000&width=800&height=auto&aspect=true"
                    class="card-img-top img-p" alt="...">
                <div class="card-body">
                    <h5 class="card-title" id="producto1">Audífono Bluetooth Inalámbrico Gato STN-28L</h5>
                    <p class="card-text" id="precio1">
                        S/59.00
                    </p>
                </div>
                <div class="card-footer cant">
                    <button type="button" class="btn btn-success"> <svg width="24px" height="24px" stroke-width="1.5"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
                            <path d="M19.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M5 4h17l-2 11H7L5 4zm0 0c-.167-.667-1-2-3-2M20 15H5.23c-1.784 0-2.73.781-2.73 2 0 1.219.946 2 2.73 2H19.5"
                                stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg> Añadir</button>
                    <div class="separator"></div>
                    <input type="number" class="btn btn-light ct" id="cantidad1" value="1">
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img src="https://realplaza.vtexassets.com/arquivos/ids/17741823-800-auto?v=637725933982630000&width=800&height=auto&aspect=true"
                    class="card-img-top img-p" alt="...">
                <div class="card-body">
                    <h5 class="card-title" id="producto2">Celular Samsung Galaxy A52S 5G 128GB 6GB RAM Negro</h5>
                    <p class="card-text" id="precio2">
                        S/1,548.00
                    </p>
                </div>
                <div class="card-footer cant">
                    <button type="button" class="btn btn-success"> <svg width="24px" height="24px" stroke-width="1.5"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
                            <path d="M19.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M5 4h17l-2 11H7L5 4zm0 0c-.167-.667-1-2-3-2M20 15H5.23c-1.784 0-2.73.781-2.73 2 0 1.219.946 2 2.73 2H19.5"
                                stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg> Añadir</button>
                    <div class="separator"></div>
                    <input type="number" class="btn btn-light ct" id="cantidad2" value="1">
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img src="https://realplaza.vtexassets.com/arquivos/ids/22968386-800-auto?v=637877137188970000&width=800&height=auto&aspect=true"
                    class="card-img-top img-p" alt="...">
                <div class="card-body">
                    <h5 class="card-title" id="producto3">Parlante Avatec Para Pc Computadora Laptop Luces Rgb CSP-2037B
                    </h5>
                    <p class="card-text" id="precio3">
                        S/75.00
                    </p>
                </div>
                <div class="card-footer cant">
                    <button type="button" class="btn btn-success"> <svg width="24px" height="24px" stroke-width="1.5"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
                            <path d="M19.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M5 4h17l-2 11H7L5 4zm0 0c-.167-.667-1-2-3-2M20 15H5.23c-1.784 0-2.73.781-2.73 2 0 1.219.946 2 2.73 2H19.5"
                                stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg> Añadir</button>
                    <div class="separator"></div>
                    <input type="number" class="btn btn-light ct" id="cantidad3" value="1">
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img src="https://realplaza.vtexassets.com/arquivos/ids/21712213-800-auto?v=637829627747130000&width=800&height=auto&aspect=true"
                    class="card-img-top img-p" alt="...">
                <div class="card-body">
                    <h5 class="card-title" id="producto4">Sound Tower EV2001</h5>
                    <p class="card-text" id="precio4">
                        S/299.00
                    </p>
                </div>
                <div class="card-footer cant">
                    <button type="button" class="btn btn-success"> <svg width="24px" height="24px" stroke-width="1.5"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
                            <path d="M19.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M5 4h17l-2 11H7L5 4zm0 0c-.167-.667-1-2-3-2M20 15H5.23c-1.784 0-2.73.781-2.73 2 0 1.219.946 2 2.73 2H19.5"
                                stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg> Añadir</button>
                    <div class="separator"></div>
                    <input type="number" class="btn btn-light ct" id="cantidad4" value="1">
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img src="https://realplaza.vtexassets.com/arquivos/ids/16116659-800-auto?v=637498864727300000&width=800&height=auto&aspect=true"
                    class="card-img-top img-p" alt="...">
                <div class="card-body">
                    <h5 class="card-title" id="producto5">Audífonos Bluetooth F9 5-C TWS Power Bank 2000 mAh</h5>
                    <p class="card-text" id="precio5">
                        S/49.90
                    </p>
                </div>
                <div class="card-footer cant">
                    <button type="button" class="btn btn-success"> <svg width="24px" height="24px" stroke-width="1.5"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
                            <path d="M19.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M5 4h17l-2 11H7L5 4zm0 0c-.167-.667-1-2-3-2M20 15H5.23c-1.784 0-2.73.781-2.73 2 0 1.219.946 2 2.73 2H19.5"
                                stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg> Añadir</button>
                    <div class="separator"></div>
                    <input type="number" class="btn btn-light ct" id="cantidad5" value="1">
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img src="https://realplaza.vtexassets.com/arquivos/ids/29670891-800-auto?v=637950860097530000&width=800&height=auto&aspect=true"
                    class="card-img-top img-p" alt="...">
                <div class="card-body">
                    <h5 class="card-title" id="producto6">Parlante Inalámbrico AMAZON Echo Dot 4 Azul</h5>
                    <p class="card-text" id="precio6">
                        S/259.00
                    </p>
                </div>
                <div class="card-footer cant">
                    <button type="button" class="btn btn-success"> <svg width="24px" height="24px" stroke-width="1.5"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
                            <path d="M19.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M5 4h17l-2 11H7L5 4zm0 0c-.167-.667-1-2-3-2M20 15H5.23c-1.784 0-2.73.781-2.73 2 0 1.219.946 2 2.73 2H19.5"
                                stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg> Añadir</button>
                    <div class="separator"></div>
                    <input type="number" class="btn btn-light ct" id="cantidad6" value="1">
                </div>
            </div>
        </div>
    </div>

</div>

<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script>
    swal("¡BIENVENID@!", "Si fallas en 22 movimientos, tendrás que empezar de nuevo", "success")
        .then((value) => {
            document.getElementById("ingreTexto2").value = localStorage.getItem("user");
            //////////
            let image = document.getElementById("imageAvatar");
            image.src = localStorage.getItem("imageUser");
        });
</script>

<body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.0/js/bootstrap.min.js"></script>
</body>

</html>---->
 */