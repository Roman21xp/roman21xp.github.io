let btnCargar = document.getElementById("cargar");
let usuarios = document.getElementById("usuarios");
let estado = document.getElementById("estado");

btnCargar.addEventListener("click", cargarUsuarios);

// Función normal
function cargarUsuarios() {

    estado.textContent = "Cargando...";
    usuarios.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => respuesta.json())
    .then(datos => {

        for (let i = 0; i < datos.length; i++) {
            usuarios.innerHTML += `<li>${datos[i].name}</li>`;
        }

        setTimeout(() => {
            estado.textContent = "Datos cargados";
        }, 3000);

    })
    .catch(() => {
        estado.textContent = "Error al cargar";
    });

}