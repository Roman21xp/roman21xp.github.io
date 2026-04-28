let peliculas = [];

let input = document.getElementById("busqueda");
let boton = document.getElementById("buscar");
let lista = document.getElementById("lista");
let mensaje = document.getElementById("mensaje");

// Función normal
function buscarPeliculas() {

    let texto = input.value.trim();

    lista.innerHTML = "";

    if (texto === "") {
        mensaje.textContent = "Escribe una película";
        mensaje.classList.add("rojo");
        return;
    }

    mensaje.textContent = "Buscando...";
    mensaje.classList.remove("rojo");

    fetch(`https://www.omdbapi.com/?s=${texto}&apikey=564727fa`)
    .then(respuesta => respuesta.json())
    .then(datos => {

        if (datos.Search) {
            peliculas = datos.Search;
            mostrarPeliculas();
        } else {
            mensaje.textContent = "No se encontraron películas";
        }

        setTimeout(() => {
            mensaje.textContent = "Búsqueda terminada";
        }, 2000);

    })
    .catch(() => {
        mensaje.textContent = "Error al buscar";
    });
}

// Función flecha
const mostrarPeliculas = () => {

    lista.innerHTML = "";

    for (let i = 0; i < peliculas.length; i++) {

        let li = document.createElement("li");
        li.textContent = peliculas[i].Title;

        // BONUS: eliminar al hacer click
        li.addEventListener("click", () => {
            li.remove();
        });

        lista.appendChild(li);
    }
};

boton.addEventListener("click", buscarPeliculas);