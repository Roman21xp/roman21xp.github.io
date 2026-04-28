// ================================================================
//  GUÍA COMPLETA JAVASCRIPT — TODOS LOS EJERCICIOS DE CLASE
//  Comentado línea por línea para repasar antes del examen
//  Basado en: monedas, spock, temperatura, películas, tareas,
//             usuarios, pokémon y apuntes UD06.3
// ================================================================




// ════════════════════════════════════════════════════════════════
// 1. VARIABLES
// ════════════════════════════════════════════════════════════════
// Una variable es un nombre que apunta a un dato guardado en memoria.
// let   → el valor puede cambiar más adelante
// const → el valor nunca cambia (constante)

let moneda = "EUR"           // guarda el texto "EUR", puede cambiar
const apiKey = "abc123"      // clave que nunca debe cambiar

let password = ""            // empieza vacía, se irá rellenando
let fraseCifrada = ""        // igual, vacía de inicio

// Tipos de dato posibles:
let texto    = "hola"        // string: texto entre comillas
let numero   = 42            // number: número sin comillas
let decimal  = 3.14          // number: también los decimales
let booleano = true          // boolean: solo true o false
let vacio    = undefined     // sin valor asignado todavía

// Template literal → texto con variables dentro usando backtick (`)
let ciudad = "Valencia"
let url = `https://api.openweathermap.org/weather?q=${ciudad}`
//         ↑ backtick          ↑ variable metida con ${}




// ════════════════════════════════════════════════════════════════
// 2. ARRAYS (listas)
// ════════════════════════════════════════════════════════════════
// Un array es una lista de valores dentro de corchetes [ ]
// Cada posición tiene un índice que empieza en 0

const opciones = ["piedra", "papel", "tijera", "lagarto", "spock"]
//                   [0]      [1]      [2]        [3]        [4]

let numeros = []             // array vacío, lo rellenamos después
let tareas  = []             // otro array vacío — ejercicio tareas.html

// Acceder a un elemento por su posición:
opciones[0]                  // → "piedra"   (primer elemento)
opciones[4]                  // → "spock"    (último)
opciones.length              // → 5          (cuántos hay en total)

// Métodos para modificar el array:
numeros.push(7)              // añade 7 al final del array
numeros.push(15)             // ahora el array es [7, 15]
numeros.pop()                // elimina y devuelve el último → 15, array queda [7]

// Buscar si un valor ya existe (usado en el ejercicio de la lotería):
numeros.indexOf(7)           // → 0   (posición donde está el 7)
numeros.indexOf(99)          // → -1  (-1 significa "no existe")

// Recorrer array con forEach — ejecuta una función por cada elemento:
let frutas = ["manzana", "pera", "uva"]

frutas.forEach(function(fruta) {   // función normal dentro de forEach
    console.log(fruta)             // imprime cada fruta
})

frutas.forEach(fruta => {          // lo mismo pero con función flecha
    console.log(fruta)
})

frutas.forEach(fruta => console.log(fruta))   // versión de 1 línea

// forEach con índice:
frutas.forEach((fruta, i) => {
    console.log(i, fruta)          // i = 0,1,2 — fruta = el valor
})




// ════════════════════════════════════════════════════════════════
// 3. FUNCIONES — NORMAL Y FLECHA
// ════════════════════════════════════════════════════════════════
// Una función es un bloque de código con nombre que puedes reutilizar.
// Lo defines una vez y lo llamas cuando lo necesites.
// return → lo que la función "devuelve" a quien la llamó


// ── FUNCIÓN NORMAL ──────────────────────────────────────────────

// De clase — spock.html: genera un número aleatorio entre 0 y max
function randomInt(max) {
    return Math.floor(Math.random() * (max + 1))
    // Math.random()    → número decimal entre 0 y 1 (ej: 0.73)
    // * (max + 1)      → lo escala al rango que queremos
    // Math.floor(...)  → redondea hacia abajo (quita decimales)
}
randomInt(4)             // devuelve un número entre 0 y 4

// De clase — lotería: número entre 1 y max
function aleatorio(max) {
    let num = Math.floor(Math.random() * max) + 1
    // + 1 al final → empieza en 1 en vez de 0
    return num
}
aleatorio(49)            // devuelve un número entre 1 y 49

// De clase — lotería: número entre min y max
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
    // (max - min + 1) → tamaño del rango
    // + min           → desplaza para que empiece en min
}
numeroAleatorio(8, 50)   // devuelve un número entre 8 y 50

// Función sin return — hace algo pero no devuelve nada:
function reiniciar() {
    // spock.html — resetea variables y el DOM al estado inicial
    // no devuelve nada, solo ejecuta acciones
}


// ── FUNCIÓN FLECHA (=>) ─────────────────────────────────────────
// Es una forma más corta de escribir funciones.
// Se usa mucho dentro de forEach, addEventListener, fetch, setTimeout...

// REGLA:
//   Sin llaves {}  → el return es automático (solo para 1 línea)
//   Con llaves {}  → necesitas escribir return tú mismo

// Función flecha de 1 línea (return automático):
const sumaFlecha = (a, b) => parseInt(a) + parseInt(b)
//                 ↑ parámetros  ↑ return automático del resultado

sumaFlecha(3, 4)         // → 7

// Función flecha con varias líneas (necesita return):
const saludar = (nombre) => {
    let msg = "Hola " + nombre    // prepara el mensaje
    return msg                    // lo devuelve explícitamente
}

// Función flecha sin parámetros:
const decirHola = () => console.log("Hola")
//                ↑ paréntesis vacíos si no hay parámetros

// De clase — películas.html (función flecha para mostrar lista):
const mostrarPeliculas = () => {
    lista.innerHTML = ""          // borra el contenido anterior
    for (let i = 0; i < peliculas.length; i++) {  // recorre el array
        let li = document.createElement("li")     // crea un <li>
        li.textContent = peliculas[i].Title        // le pone texto
        lista.appendChild(li)                     // lo añade al DOM
    }
}

// De clase — tareas.html (función flecha para mostrar tareas):
const mostrarTareas = () => {
    lista.innerHTML = ""          // limpia la lista visual
    for (let i = 0; i < tareas.length; i++) {     // recorre cada tarea
        lista.innerHTML += `<li>${tareas[i]}</li>` // la añade como HTML
    }
    if (tareas.length > 5) {                      // si hay más de 5
        mensaje.textContent = "Demasiadas tareas" // avisa
        mensaje.classList.add("rojo")             // y la pone roja
    } else {
        mensaje.classList.remove("rojo")          // si no, quita el color
    }
}




// ════════════════════════════════════════════════════════════════
// 4. CONDICIONALES
// ════════════════════════════════════════════════════════════════
// Ejecutan código solo si se cumple una condición.
// if → si, else if → si no pero, else → en cualquier otro caso


// ── IF / ELSE IF / ELSE ─────────────────────────────────────────

// De clase — spock.html (quién gana la partida):
let jugador   = "piedra"
let ordenador = "tijera"

if (jugador === ordenador) {
    // === comprueba valor Y tipo a la vez (más seguro que ==)
    console.log("Empate")
} else if (jugador === "piedra" && ordenador === "tijera") {
    // && significa "y" → las dos condiciones deben cumplirse
    console.log("Ganaste")
} else {
    // si ninguna condición anterior fue true, entra aquí
    console.log("Perdiste")
}

// De clase — tareas.html (no añadir tarea vacía):
let valor = ""
if (valor === "") {
    mensaje.textContent = "Escribe algo"    // campo vacío → avisa
} else {
    tareas.push(valor)                      // tiene texto → guarda
    mensaje.textContent = "Tarea añadida"
    texto.value = ""                        // limpia el input
}

// De clase — películas.html (comprobar si hay resultados):
let datos = { Search: ["película1"] }       // ejemplo de respuesta API
if (datos.Search) {
    // datos.Search existe y no es null/undefined
    peliculas = datos.Search                // guarda los resultados
    mostrarPeliculas()                      // los pinta
} else {
    mensaje.textContent = "No se encontraron películas"
}

// De clase — fetch temperatura.html (comprobar error HTTP):
// if (!response.ok) → si la respuesta NO fue correcta
//   throw new Error(...)  → lanza un error a propósito para que lo capture catch

// Operadores de comparación:
//   ===   igual en valor Y tipo  ← usa siempre este
//   !==   distinto
//   >     mayor que
//   <     menor que
//   >=    mayor o igual
//   <=    menor o igual

// Operadores lógicos:
//   &&    Y  → las dos condiciones deben ser true
//   ||    O  → con que una sea true basta
//   !     NO → niega la condición  (!true → false)

// Ternario — if/else en una sola línea:
let resultado2 = jugador === ordenador ? "Empate" : "Hay ganador"
//              ↑ condición             ↑ si true  ↑ si false




// ════════════════════════════════════════════════════════════════
// 5. BUCLES
// ════════════════════════════════════════════════════════════════
// Repiten un bloque de código varias veces sin escribirlo a mano.


// ── FOR CLÁSICO ─────────────────────────────────────────────────

// De clase — cifrado César (recorre cada letra de una frase):
let frase = "casa paco"
for (let i = 0; i < frase.length; i++) {
    // let i = 0        → empieza en la posición 0
    // i < frase.length → continúa mientras i sea menor que la longitud
    // i++              → suma 1 a i en cada vuelta
    let letra = frase[i]     // accede a la letra en la posición i
    console.log(letra)
}

// De clase — películas y usuarios (recorre array para pintar en DOM):
let peliculas = [{Title:"Matrix"}, {Title:"Interstellar"}]  // simulado
let lista = { innerHTML: "" }                               // simulado
for (let i = 0; i < peliculas.length; i++) {
    lista.innerHTML += `<li>${peliculas[i].Title}</li>`
    // peliculas[i]        → elemento i del array
    // peliculas[i].Title  → propiedad Title de ese elemento
}

// De clase — tareas.html (mismo patrón):
for (let i = 0; i < tareas.length; i++) {
    lista.innerHTML += `<li>${tareas[i]}</li>`
}

// De clase — lotería (for con condición no estándar):
let numLoteria = []
for (let i = 0; numLoteria.length < 6; i++) {
    // en vez de i < algo, la condición es numLoteria.length < 6
    // el bucle continúa hasta que el array tenga 6 números
    let n = aleatorio(49)
    if (numLoteria.indexOf(n) === -1) {   // si n no existe en el array
        numLoteria.push(n)                // lo añade
    }
    // si ya existe, no hace nada y vuelve a intentarlo
}


// ── FOR...OF ────────────────────────────────────────────────────
// Más limpio que el for clásico cuando solo necesitas el valor.

for (let fruta of frutas) {
    // fruta toma el valor de cada elemento del array en cada vuelta
    console.log(fruta)
}


// ── WHILE ───────────────────────────────────────────────────────
// Repite mientras la condición sea true.
// Úsalo cuando no sabes cuántas veces vas a repetir de antemano.

// De clase — generador de contraseña:
let i2 = 0
let veces = 3
while (i2 < veces) {
    // ejecuta el bloque mientras i2 < veces
    password += "x"   // añade una "x" a la contraseña
    i2++              // incrementa i2 para no repetir infinitamente
}


// ── FOREACH ─────────────────────────────────────────────────────
// De clase — monedas.html (recorre los tipos de cambio):
// cambios.forEach(([clave, valor]) => {
//     creaElemento(valor, clave)
// })
// [clave, valor] → desestructuración: saca los dos valores del par
// clave  → ej: "USD"
// valor  → ej: 1.08




// ════════════════════════════════════════════════════════════════
// 6. ACCESO Y MODIFICACIÓN DEL DOM
// ════════════════════════════════════════════════════════════════
// El DOM es el HTML de la página convertido en objetos JavaScript.
// Desde JS puedes leer y cambiar todo lo que se ve en pantalla.

// ⚠ REGLA CRÍTICA: el script debe ir DESPUÉS del HTML que usa,
//   o usar defer. Si va antes, los elementos no existen → null


// ── SELECCIONAR ELEMENTOS ───────────────────────────────────────

// Por ID — devuelve exactamente 1 elemento:
// (usado en TODOS los ejercicios de clase)
let cantidad  = document.getElementById("cantidad")       // monedas.html
let playerChoice = document.getElementById("playerChoice") // spock.html
let boton2    = document.getElementById("boton")          // temperatura.html
let btnCargar = document.getElementById("cargar")         // usuarios.html
let btnAgregar = document.getElementById("agregar")       // tareas.html

// Por selector CSS — más flexible:
let primero  = document.querySelector("#miId")     // # = por ID
let porClase = document.querySelector(".miClase")  // . = por clase CSS
let porTag   = document.querySelector("p")         // sin símbolo = por tag HTML

// Todos los que coincidan → devuelve una lista (NodeList):
let todos = document.querySelectorAll("li")        // todos los <li> de la página


// ── LEER Y MODIFICAR CONTENIDO ──────────────────────────────────

// textContent e innerText → texto plano, sin HTML
// (usado en temperatura.html y tareas.html):
let weather2 = document.getElementById("weather")
weather2.innerText = "Temperatura: 22°C"      // reemplaza todo el texto
weather2.innerText += ", Humedad: 60%"        // añade texto al final

// textContent — mismo resultado, más estándar:
let estado2 = document.getElementById("estado")
estado2.textContent = "Cargando..."           // usuarios.html

// innerHTML → texto con HTML incluido, el navegador lo interpreta:
let resultado3 = document.getElementById("resultado")
resultado3.innerHTML = "<b>Ganaste</b>"       // escribe HTML
resultado3.innerHTML += "<ul><li>item</li></ul>"  // añade HTML al final

// innerHTML = "" → borra todo el contenido visual:
lista.innerHTML = ""                          // películas.html — limpia antes de redibujar

// .value → leer lo que el usuario escribió en un input:
let inputCiudad2 = document.getElementById("city")
let ciudad2 = inputCiudad2.value              // temperatura.html — lee el texto del campo

let texto2 = document.getElementById("texto")
let valorInput = texto2.value                 // tareas.html — lee la tarea escrita

// .trim() → elimina espacios al principio y al final:
let textoLimpio = texto2.value.trim()         // películas.html — evita buscar "  "

// Limpiar un input después de usarlo:
texto2.value = ""                             // tareas.html — vacía el campo tras añadir


// ── CREAR E INSERTAR ELEMENTOS ──────────────────────────────────

// De clase — películas.html y usuarios.html (patrón createElement):

let li = document.createElement("li")        // crea un elemento <li> en memoria
li.textContent = "Matrix"                     // le pone texto
li.addEventListener("click", () => {          // le añade evento (películas.html)
    li.remove()                               // al hacer click, el elemento se borra
})
lista.appendChild(li)                         // lo mete dentro de la lista del DOM
// appendChild → inserta el elemento como último hijo del contenedor

// De clase — monedas.html (createElement con innerHTML):
let liMoneda = document.createElement("li")
liMoneda.innerHTML = "EUR (USD 1.08) ==> 1 EUR = 1.08 USD"
resultado3.innerHTML += "<ul>"                // crea la lista
resultado3.innerHTML += liMoneda.innerHTML    // añade el contenido
resultado3.innerHTML += "</ul>"

// Alternativa rápida con innerHTML += (tareas.html, usuarios.html):
lista.innerHTML += `<li>${tareas[0]}</li>`    // añade HTML directamente


// ── ESTILOS Y CLASES ────────────────────────────────────────────

// De clase — spock.html (cambiar clases para cambiar color de texto):
let resultadoEl2 = document.getElementById("resultado")
resultadoEl2.className = "resultado-veredicto"   // reemplaza TODAS las clases
resultadoEl2.classList.add("veredicto-ganaste")  // añade una clase extra
resultadoEl2.classList.remove("veredicto-ganaste") // quita una clase
resultadoEl2.classList.toggle("activo")          // si está → quita, si no → añade

// De clase — spock.html (mostrar/ocultar el botón reiniciar):
let btnReiniciar2 = document.getElementById("btnReiniciar")
btnReiniciar2.style.display = "none"   // oculta el elemento
btnReiniciar2.style.display = "block"  // lo muestra de nuevo

// De clase — películas.html (añadir clase rojo):
let mensaje2 = document.getElementById("mensaje")
mensaje2.classList.add("rojo")         // le aplica el estilo .rojo del CSS
mensaje2.classList.remove("rojo")      // lo quita


// ── EVENTOS ─────────────────────────────────────────────────────
// addEventListener(evento, función) → ejecuta la función cuando ocurre el evento.

// Click en botón — todos los ejercicios lo usan:
let convertirBtn = document.getElementById("convertir")
convertirBtn.addEventListener("click", function() {
    resultado3.innerHTML = ""     // monedas.html — limpia antes de buscar
    // convertir()               // llama a la función principal
})

// Click con función flecha (equivalente, más corto):
boton2.addEventListener("click", () => {
    // obtenerClima()            // temperatura.html
})

// Click con función nombrada — tareas.html y películas.html:
btnAgregar.addEventListener("click", agregarTarea)  // pasa la función por referencia
// btnCargar.addEventListener("click", cargarUsuarios)

// Cambio en <select> — spock.html (cuando el jugador elige opción):
playerChoice.addEventListener("change", function() {
    let jugadorEscoge = playerChoice.value  // .value del select = opción elegida
    console.log(jugadorEscoge)
})

// Tecla pulsada — temperatura.html (detectar Enter en el input):
inputCiudad2.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {            // si la tecla pulsada es Enter
        event.preventDefault()             // evita que el formulario se envíe
        // obtenerClima()                  // ejecuta la búsqueda
    }
})

// Eventos más comunes:
//   "click"    → click de ratón
//   "change"   → cambia el valor de un input o select
//   "keydown"  → se pulsa una tecla
//   "input"    → cada vez que se escribe algo en un campo




// ════════════════════════════════════════════════════════════════
// 7. FETCH — OBTENER DATOS DE INTERNET
// ════════════════════════════════════════════════════════════════
// fetch hace una petición HTTP a una URL y trae datos (normalmente JSON).
// Es asíncrono → no bloquea la página mientras espera la respuesta.

// Tu profesor usó DOS formas. Ambas hacen lo mismo:
//   A) .then() / .catch()   → películas, usuarios, monedas, temperatura
//   B) async / await        → pokémon, apuntes UD06.3


// ── FORMA A: .then() / .catch() ─────────────────────────────────

// De clase — usuarios.html (patrón más limpio con .then):
function cargarUsuarios() {

    estado2.textContent = "Cargando..."      // avisa al usuario
    lista.innerHTML = ""                     // limpia la lista anterior

    fetch("https://jsonplaceholder.typicode.com/users")  // hace la petición GET
    .then(respuesta => respuesta.json())     // cuando llega: convierte texto → objeto JS
    .then(datos => {                         // cuando está convertido: trabaja con los datos

        for (let i = 0; i < datos.length; i++) {          // recorre el array de usuarios
            lista.innerHTML += `<li>${datos[i].name}</li>` // pinta cada nombre
        }

        setTimeout(() => {                   // espera 3 segundos y luego...
            estado2.textContent = "Datos cargados"         // muestra mensaje final
        }, 3000)

    })
    .catch(() => {                           // si algo falla (sin red, etc.)
        estado2.textContent = "Error al cargar"
    })
}

// De clase — películas.html (con comprobación de texto vacío antes):
function buscarPeliculas() {

    let texto3 = input.value.trim()          // lee y limpia el input
    lista.innerHTML = ""                     // limpia resultados anteriores

    if (texto3 === "") {                     // si está vacío no busca
        mensaje2.textContent = "Escribe una película"
        mensaje2.classList.add("rojo")
        return                               // return → sale de la función ya
    }

    mensaje2.textContent = "Buscando..."     // feedback al usuario
    mensaje2.classList.remove("rojo")

    fetch(`https://www.omdbapi.com/?s=${texto3}&apikey=564727fa`)
    // ↑ URL dinámica con el texto del input metido dentro
    .then(respuesta => respuesta.json())     // convierte la respuesta a objeto JS
    .then(datos => {

        if (datos.Search) {                  // si la API encontró resultados
            peliculas = datos.Search         // guarda el array de películas
            mostrarPeliculas()               // los pinta llamando a la función flecha
        } else {
            mensaje2.textContent = "No se encontraron películas"
        }

        setTimeout(() => {                   // 2 segundos después...
            mensaje2.textContent = "Búsqueda terminada"
        }, 2000)

    })
    .catch(() => {
        mensaje2.textContent = "Error al buscar"
    })
}

// De clase — temperatura.html (con comprobación response.ok):
function obtenerClima() {

    const ciudadActual = inputCiudad2.value  // lee la ciudad del input
    const urlClima = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadActual}`

    fetch(urlClima)
    .then(response => {
        if (!response.ok) {                  // si el código HTTP no es 200-299
            throw new Error("Error: " + response.statusText)
            // throw lanza un error → salta directamente al .catch
        }
        return response.json()               // si todo bien → convierte a JSON
    })
    .then((data) => {
        const temperature = data.main.temp           // extrae la temperatura
        const description = data.weather[0].description  // extrae la descripción
        const humidity    = data.main.humidity       // extrae la humedad

        // .innerText y += para construir el texto en pantalla:
        weather2.innerText  = "Temperatura: " + temperature + ","
        weather2.innerText += " Descripción: " + description + ","
        weather2.innerText += " Humedad: " + humidity + "%"
    })
    .catch(error => {
        console.error("Hubo un problema:", error)
        weather2.textContent = "No se pudo obtener el clima."
    })
}


// ── FORMA B: async / await ───────────────────────────────────────
// async  → marca la función como asíncrona (puede usar await dentro)
// await  → "espera aquí hasta que esto termine antes de seguir"
// Solo puede usarse DENTRO de una función async

// Por qué hay SIEMPRE 2 await con fetch:
//   1er await → espera a que el servidor responda (llegan las cabeceras HTTP)
//   2do await → espera a que se lea el cuerpo de la respuesta y se convierta a JS
//   Son dos operaciones asíncronas distintas. Sin el 2do await tienes una Promise, no datos.

// De clase — pokémon.html (la forma más limpia):
async function fetchData() {

    try {                                    // try → intenta ejecutar esto
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase()
        // .toLowerCase() → convierte a minúsculas ("Pikachu" → "pikachu")

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        // ↑ 1er await: espera hasta que el servidor responda

        if (!response.ok) {
            throw new Error("Could not fetch resource")
            // si la respuesta es 404 u otro error, lanza error manualmente
        }

        const data = await response.json()
        // ↑ 2do await: espera hasta que el body se lea y se convierta a objeto JS
        // Ahora data es un objeto JavaScript con todos los datos del pokémon

        const pokemonSprite = data.sprites.front_default
        // accede a la propiedad sprites, dentro a front_default (URL de la imagen)

        const imgElement = document.getElementById("pokemonSprite")
        imgElement.src = pokemonSprite       // cambia el src de la imagen
        imgElement.style.display = "block"   // la hace visible (estaba en display:none)

    } catch(error) {                         // si algo falló en el try...
        console.error(error)                 // imprime el error en consola
    }
}

// De clase — apuntes UD06.3 (patrón async/await completo con DOM):
async function obtenerUsuario(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        // URL dinámica: /users/1, /users/2, etc.

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`)
            // response.status → código numérico: 200, 404, 500...
        }

        const data = await response.json()
        // data es ahora el objeto usuario con name, email, etc.

        console.log(`Usuario: ${data.name} - Email: ${data.email}`)
        // template literal con los datos del objeto

    } catch (error) {
        console.error("Fallo de red o servidor:", error.message)
    }
}
obtenerUsuario(1)        // llama la función con id=1 — ⚠ no olvides llamarla

// Patrón fetch + forEach en DOM — el más probable en el examen:
async function cargarLista() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await res.json()       // posts es un array de objetos

        const ul = document.getElementById("lista")
        posts.forEach(post => {              // recorre cada post del array
            const li = document.createElement("li")   // crea un <li>
            li.textContent = post.title               // le pone el título
            ul.appendChild(li)                        // lo añade al <ul>
        })
    } catch (error) {
        console.error(error)
    }
}
cargarLista()            // ⚠ no olvides llamar la función

// Fetch POST — enviar datos al servidor:
async function crearPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",                          // cambia el verbo HTTP a POST
            headers: {
                "Content-Type": "application/json"  // avisa que enviamos JSON
            },
            body: JSON.stringify({                   // convierte objeto JS → texto JSON
                title: "Mi nuevo post",
                body: "Contenido del post",
                userId: 1
            })
        })

        const data = await response.json()           // convierte la respuesta
        console.log("Post creado con ID:", data.id)  // el servidor devuelve el objeto creado

    } catch (error) {
        console.error(error)
    }
}




// ════════════════════════════════════════════════════════════════
// 8. SETTIMEOUT
// ════════════════════════════════════════════════════════════════
// Ejecuta una función UNA VEZ después de N milisegundos.
// No bloquea el código — el resto sigue ejecutándose mientras espera.
// 1000ms = 1 segundo

// De clase — spock.html (el ordenador "piensa" 5 segundos):
const opciones3 = ["piedra", "papel", "tijera", "lagarto", "spock"]
let tiempoPensar3 = 5

function descuenta() {
    setTimeout(() => {                           // función flecha que se ejecuta tras el tiempo
        let rn = randomInt(opciones3.length - 1) // número aleatorio entre 0 y 4
        let ordenadorEscoge = opciones3[rn]      // elige la opción en esa posición
        console.log("Ordenador eligió:", ordenadorEscoge)
        // quienGana(jugadorEscoge, ordenadorEscoge)  // comprueba el resultado
    }, tiempoPensar3 * 1000)                     // 5 * 1000 = 5000ms = 5 segundos
}

// De clase — usuarios.html (muestra mensaje tras 3 segundos):
setTimeout(() => {
    estado2.textContent = "Datos cargados"       // cambia el texto después de esperar
}, 3000)                                         // 3000ms = 3 segundos

// De clase — películas.html (mensaje "Búsqueda terminada" tras 2 segundos):
setTimeout(() => {
    mensaje2.textContent = "Búsqueda terminada"
}, 2000)                                         // 2000ms = 2 segundos

// De clase — apuntes clase (setTimeout con función nombrada):
function ejecutar() {
    console.log("Se ejecuta después de 3 segundos")
}
setTimeout(ejecutar, 3000)                       // pasa la función por referencia (sin ())

// IMPORTANTE: el código después del setTimeout NO espera:
console.log("A")
setTimeout(() => console.log("B"), 1000)
console.log("C")
// Orden de salida: A → C → B
// Aunque el timeout sea 0ms, JS termina todo lo síncrono antes de mirar la cola




// ════════════════════════════════════════════════════════════════
// 9. LOCALSTORAGE
// ════════════════════════════════════════════════════════════════
// Guarda datos en el navegador que persisten aunque cierres el navegador.
// Los datos se guardan como clave → valor (siempre texto).

// De clase — apuntes UD06.3 (guardar nombre de usuario):

// GUARDAR un valor:
localStorage.setItem("nombre", "Jeff")
//           ↑ clave     ↑ valor (siempre strings)

// RECUPERAR un valor:
let nombreGuardado = localStorage.getItem("nombre")
//                                         ↑ clave
// → devuelve "Jeff" si existe, null si no existe

// ELIMINAR un valor:
localStorage.removeItem("nombre")

// COMPROBAR si existe antes de usarlo:
let nombreRecuperado = localStorage.getItem("nombre")
if (nombreRecuperado) {
    saludo.textContent = "Hola " + nombreRecuperado   // existe → saluda
} else {
    saludo.textContent = "Hola querid@ anónim@"       // no existe → saludo genérico
}

// Evento guardar — de clase:
boton2.addEventListener("click", function() {
    const nombreUsuario = nombre.value                // lee el input
    localStorage.setItem("nombre", nombreUsuario)     // lo guarda
    saludo.textContent = "Hola " + nombreUsuario      // actualiza el DOM
})

// Evento borrar — de clase:
botonBorrar.addEventListener("click", function() {
    localStorage.removeItem("nombre")                 // borra del storage
    saludo.textContent = "Hola querid@ anónim@"       // resetea el DOM
})




// ════════════════════════════════════════════════════════════════
// ERRORES MÁS FRECUENTES — los que más caen en examen
// ════════════════════════════════════════════════════════════════

//  ERROR 1: script antes del elemento HTML → null
//    <script>document.getElementById("btn")</script>   ← null, no existe aún
//    <button id="btn">Click</button>
//    ✅ SOLUCIÓN: pon el <script> justo antes de </body>

//  ERROR 2: olvidar el 2do await en fetch
//    const datos = respuesta.json()       ← Promise, no datos
//    ✅ SOLUCIÓN: const datos = await respuesta.json()

//  ERROR 3: función NO es async pero usa await
//    function cargar() { await fetch(...) }  ← SyntaxError
//    ✅ SOLUCIÓN: async function cargar() { ... }

//  ERROR 4: olvidar llamar la función después de definirla
//    async function obtenerDatos() { ... }
//    // ← falta: obtenerDatos()
//    ✅ SOLUCIÓN: añade la llamada después de la definición

//  ERROR 5: usar == en vez de ===
//    "" == false  → true  (comportamiento inesperado)
//    "" === false → false (correcto)
//    ✅ SOLUCIÓN: usa siempre ===

//  ERROR 6: forEach no devuelve nada
//    let nuevo = arr.forEach(x => x * 2)  → undefined
//    ✅ SOLUCIÓN: usa .map() si necesitas un array nuevo

//  ERROR 7: innerHTML += borra los event listeners añadidos con addEventListener
//    ✅ SOLUCIÓN: usa appendChild() si los elementos necesitan mantener sus eventos




// ════════════════════════════════════════════════════════════════
// MINI REFERENCIA RÁPIDA — para consultar en el examen
// ════════════════════════════════════════════════════════════════

// VARIABLES          let x = valor  /  const x = valor
// ARRAY              let a = [1,2,3]  /  a[0]  /  a.length  /  a.push(x)  /  a.indexOf(x)
// FUNCIÓN NORMAL     function f(p) { return p }
// FUNCIÓN FLECHA     const f = (p) => p                         ← 1 línea, return auto
//                    const f = (p) => { return p }              ← varias líneas
// IF                 if (x===y) {} else if (x>0) {} else {}
// TERNARIO           let r = condicion ? siTrue : siFalse
// FOR                for (let i=0; i<arr.length; i++) {}
// FOR...OF           for (let x of arr) {}
// WHILE              while (condicion) {}
// FOREACH            arr.forEach(x => {})
// SELECT DOM         document.getElementById("id")  /  document.querySelector(".clase")
// LEER INPUT         input.value
// ESCRIBIR DOM       el.textContent = "texto"  /  el.innerHTML = "<b>html</b>"
// CLASES             el.classList.add("c")  /  .remove("c")  /  .toggle("c")
// MOSTRAR/OCULTAR    el.style.display = "none"  /  "block"
// CREAR ELEMENTO     let li = document.createElement("li")  →  padre.appendChild(li)
// EVENTO             el.addEventListener("click", () => {})
// SETTIMEOUT         setTimeout(() => { codigo }, ms)            ← 1000ms = 1 segundo
// LOCALSTORAGE       localStorage.setItem("k","v")  /  .getItem("k")  /  .removeItem("k")

// FETCH .then:
//   fetch(url)
//     .then(res => res.json())
//     .then(data => { /* usar data */ })
//     .catch(err => console.error(err))

// FETCH async/await:
//   async function f() {
//     try {
//       const res  = await fetch(url)          ← 1er await
//       const data = await res.json()          ← 2do await (siempre los 2)
//       /* usar data */
//     } catch(e) { console.error(e) }
//   }
//   f()                                        ← no olvidar llamarla
