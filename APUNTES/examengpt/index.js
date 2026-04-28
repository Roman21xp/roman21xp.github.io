let tareas = [];

let texto = document.getElementById("texto");
let btnAgregar = document.getElementById("agregar");
let btnMostrar = document.getElementById("mostrar");
let lista = document.getElementById("lista");
let mensaje = document.getElementById("mensaje");

// Función normal
function agregarTarea() {
    let valor = texto.value;

    if (valor === "") {
        mensaje.textContent = "Escribe algo";
    } else {
        tareas.push(valor);
        mensaje.textContent = "Tarea añadida";
        texto.value = "";
    }
}

// Función flecha
const mostrarTareas = () => {
    lista.innerHTML = "";

    for (let i = 0; i < tareas.length; i++) {
        lista.innerHTML += `<li>${tareas[i]}</li>`;
    }

    if (tareas.length > 5) {
        mensaje.textContent = "Demasiadas tareas";
        mensaje.classList.add("rojo");
    } else {
        mensaje.classList.remove("rojo");
    }
};

btnAgregar.addEventListener("click", agregarTarea);
btnMostrar.addEventListener("click", mostrarTareas);