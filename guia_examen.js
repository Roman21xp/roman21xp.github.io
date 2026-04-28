// ============================================================
//  GUÍA COMPLETA DE JAVASCRIPT — EXAMEN LENGUAJES DE MARCAS
//  Basada en los ejercicios de clase: monedas, spock, temperatura
//  Cada sección tiene: QUÉ ES + PARA QUÉ SIRVE + EJEMPLO DE CLASE
// ============================================================




// ════════════════════════════════════════════════════════════
// 1. VARIABLES
// ════════════════════════════════════════════════════════════
/*
  QUÉ ES:   Un "cajón" donde guardas un dato para usarlo después.
  CUÁNDO:   Siempre que necesites recordar un valor (texto, número, etc.)

  let   → puede cambiar de valor más adelante
  const → no cambia nunca (constante)
  var   → antigua, NO usar

  EJEMPLOS SACADOS DE CLASE:
*/

let moneda = "EUR"                        // monedas.html  — puede cambiar
let tiempoPensar = 5                      // spock.html    — número
const apiKey = 'bd6edd266434449678...'    // temperatura.html — nunca cambia

// Declarar y asignar después
let password = ""           // empieza vacía, se llena luego
let fraseCifrada = ""       // igual

// Tipos de dato que puedes meter en una variable:
let texto    = "hola"       // string  (cadena de texto)
let numero   = 42           // number  (número)
let booleano = true         // boolean (true / false)
let nada     = undefined    // sin valor asignado aún




// ════════════════════════════════════════════════════════════
// 2. ARRAYS (listas)
// ════════════════════════════════════════════════════════════
/*
  QUÉ ES:   Una lista ordenada de valores dentro de [ ]
  PARA QUÉ: Guardar varios elementos del mismo tipo juntos.
  ACCESO:   array[0] es el primero, array[1] el segundo, etc.

  EJEMPLOS SACADOS DE CLASE:
*/

const opciones = ["piedra", "papel", "tijera", "lagarto", "spock"]
// spock.html — lista de opciones del juego

let numeros = []            // array vacío, se llena después
numeros.push(7)             // añade 7 al final  → [7]
numeros.push(15)            // añade 15          → [7, 15]

// Acceder a posiciones:
opciones[0]                 // → "piedra"
opciones[4]                 // → "spock"
opciones.length             // → 5 (cuántos elementos tiene)

// Comprobar si un valor ya existe (usado en clase — lotería):
numeros.indexOf(7)          // → 0  (posición donde está)
numeros.indexOf(99)         // → -1 (no existe)

// Métodos más usados:
let arr = [10, 20, 30, 40]

arr.push(50)                // añade al final      → [10,20,30,40,50]
arr.pop()                   // elimina el último   → [10,20,30,40]
arr.length                  // cuántos hay         → 4
arr[0]                      // acceder por índice  → 10

// Recorrer array con forEach (MUY usado en clase — monedas.html):
arr.forEach(function(elemento) {
    console.log(elemento)
})

// Lo mismo con función flecha (más corto):
arr.forEach(elemento => console.log(elemento))

// forEach con clave y valor a la vez (monedas.html — Object.entries):
//   cambios.forEach(([clave, valor]) => { ... })
//   Esto es desestructuración: saca los dos valores del par [clave,valor]




// ════════════════════════════════════════════════════════════
// 3. FUNCIONES — NORMAL Y FLECHA
// ════════════════════════════════════════════════════════════
/*
  QUÉ ES:   Un bloque de código con nombre que puedes reutilizar.
  PARA QUÉ: Evitar repetir código. Lo defines una vez, lo llamas muchas.
  RETURN:   Lo que "devuelve" la función al que la llamó.
*/

// ── FUNCIÓN NORMAL (con function) ──────────────────────────

// De clase — spock.html:
function randomInt(max) {
    return Math.floor(Math.random() * (max + 1))
}
// Llamarla:  randomInt(4)  → número entre 0 y 4

// De clase — lotería:
function aleatorio(max) {
    let num = Math.floor(Math.random() * max) + 1
    return num
}
// Llamarla:  aleatorio(49) → número entre 1 y 49

// De clase — lotería (con dos parámetros):
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
// Llamarla:  numeroAleatorio(8, 50)

// Función sin return (hace algo pero no devuelve nada):
function reiniciar() {
    // spock.html — resetea el juego, no devuelve nada
    // ...
}


// ── FUNCIÓN FLECHA (=>) ────────────────────────────────────
/*
  Es la misma idea pero con sintaxis más corta.
  Se usa mucho dentro de forEach, addEventListener, setTimeout, fetch...

  REGLA:
    - 1 línea sin {} → el return es automático
    - Varias líneas con {} → necesitas escribir return
*/

// Equivalente al randomInt de arriba, pero flecha:
const randomIntFlecha = (max) => Math.floor(Math.random() * (max + 1))

// Con varias líneas:
const saludar = (nombre) => {
    let msg = "Hola " + nombre
    return msg
}

// Sin parámetros:
const decirHola = () => console.log("Hola")

// Flecha dentro de forEach (de clase — monedas.html):
//   cambios.forEach(([clave, valor]) => {
//       creaElemento(valor, clave)
//   })




// ════════════════════════════════════════════════════════════
// 4. CONDICIONALES
// ════════════════════════════════════════════════════════════
/*
  QUÉ ES:   Ejecutar código solo si se cumple una condición.
  PARA QUÉ: Tomar decisiones (si pasa X, haz Y; si no, haz Z).
*/

// ── IF / ELSE IF / ELSE ────────────────────────────────────

// De clase — spock.html (quién gana):
let jugador = "piedra"
let ordenador = "tijera"

if (jugador === ordenador) {
    console.log("Empate")
} else if (jugador === "piedra" && ordenador === "tijera") {
    console.log("Ganaste")
} else {
    console.log("Perdiste")
}

// De clase — lotería (comprobar si el número ya existe):
let num = aleatorio(49)
if (numeros.indexOf(num) > -1) {
    console.log("Ya existe, no lo guardo")
} else {
    numeros.push(num)
}

// Operadores de comparación:
//   ===  igual en valor Y tipo   (usa siempre este, no ==)
//   !==  distinto
//   >    mayor que
//   <    menor que
//   >=   mayor o igual
//   <=   menor o igual

// Operadores lógicos:
//   &&   Y (las dos condiciones deben ser true)
//   ||   O (con que una sea true basta)
//   !    NO (niega la condición)

// ── TERNARIO (if/else en 1 línea) ─────────────────────────
let resultado = jugador === ordenador ? "Empate" : "Hay ganador"
//              condición              ? si true  : si false




// ════════════════════════════════════════════════════════════
// 5. BUCLES
// ════════════════════════════════════════════════════════════
/*
  QUÉ ES:   Repetir un bloque de código varias veces.
  PARA QUÉ: No escribir lo mismo 100 veces.
*/

// ── FOR CLÁSICO ─────────────────────────────────────────────
// De clase — cifrado César:
let frase = "casa paco"
for (let i = 0; i < frase.length; i++) {
    let letra = frase[i]          // acceder a cada letra por posición
    console.log(letra)
}

// ── FOR CON CONDICIÓN EN EL TEST (de clase — lotería) ───────
// El bucle continúa mientras numeros.length < 6
for (let i = 0; numeros.length < 6; i++) {
    let n = aleatorio(49)
    if (numeros.indexOf(n) === -1) {
        numeros.push(n)
    }
}
// Aquí el "i++" no controla cuántas veces itera — lo controla numeros.length

// ── WHILE ───────────────────────────────────────────────────
// De clase — generador de contraseña:
let veces = 3
let i = 0
let resultado2 = ""
while (i < veces) {
    resultado2 += "x"
    i++
}
// Cuando usar while: cuando no sabes cuántas veces repetirás de antemano.

// ── FOR...OF (recorrer arrays) ───────────────────────────────
const frutas = ["manzana", "pera", "uva"]
for (let fruta of frutas) {
    console.log(fruta)
}
// Más limpio que el for clásico cuando solo necesitas los valores.

// ── FOREACH (recorrer arrays con función) ────────────────────
// De clase — monedas.html:
//   cambios.forEach(([clave, valor]) => {
//       creaElemento(valor, clave)
//   })
frutas.forEach(fruta => console.log(fruta))  // equivalente al for...of de arriba




// ════════════════════════════════════════════════════════════
// 6. ACCESO Y MODIFICACIÓN DEL DOM
// ════════════════════════════════════════════════════════════
/*
  QUÉ ES:   El DOM es el HTML de la página convertido en objetos JS.
  PARA QUÉ: Leer y cambiar lo que se ve en pantalla desde JavaScript.

  REGLA CRÍTICA: El script debe ir DESPUÉS del HTML que usa,
                 o usar el atributo defer en el <script>.
                 Si va antes, los elementos no existen aún → null.
*/

// ── SELECCIONAR ELEMENTOS ───────────────────────────────────

// Por ID — devuelve 1 solo elemento (de clase, los 3 ejercicios):
let cantidad    = document.getElementById("cantidad")       // monedas.html
let playerChoice = document.getElementById("playerChoice")  // spock.html
let boton       = document.getElementById("boton")          // temperatura.html

// Por selector CSS — más flexible:
let primero  = document.querySelector("#miId")     // por ID
let porClase = document.querySelector(".miClase")  // por clase
let porTag   = document.querySelector("p")         // primera <p>

// Todos los que coincidan (devuelve lista):
let todos = document.querySelectorAll("li")        // todos los <li>


// ── LEER Y MODIFICAR CONTENIDO ──────────────────────────────

// De clase — temperatura.html:
let weather = document.getElementById("weather")
weather.innerText = "Temperatura: 22°C"      // escribe texto plano
weather.innerText += ", Humedad: 60%"        // añade texto

// innerHTML permite HTML dentro:
let resultado3 = document.getElementById("resultado")
resultado3.innerHTML = "<b>Ganaste</b>"      // acepta etiquetas HTML
resultado3.innerHTML += "<ul><li>item</li></ul>"  // monedas.html — añade HTML

// value — para leer lo que escribió el usuario en un input:
let inputCiudad = document.getElementById("city")
let ciudad = inputCiudad.value               // temperatura.html


// ── CREAR E INSERTAR ELEMENTOS ──────────────────────────────
// De clase — monedas.html (creaElemento):

let liElement = document.createElement("li")     // crea un <li> vacío
liElement.innerHTML = "EUR (USD 1.08) ==> 1 EUR = 1.08 USD"

let contenedor = document.getElementById("resultado")
contenedor.appendChild(liElement)                 // lo mete dentro del div

// Forma rápida (sin createElement) — también en monedas.html:
contenedor.innerHTML += "<ul>" + liElement.innerHTML + "</ul>"


// ── CAMBIAR ESTILOS Y CLASES ─────────────────────────────────
// De clase — spock.html:

let resultadoEl = document.getElementById("resultado")
resultadoEl.className = "resultado-veredicto"           // reemplaza todas las clases
resultadoEl.classList.add("veredicto-ganaste")          // añade una clase
resultadoEl.classList.remove("veredicto-ganaste")       // quita una clase
resultadoEl.classList.toggle("activo")                  // on/off

// Estilo directo:
let btnReiniciar = document.getElementById("btnReiniciar")
btnReiniciar.style.display = "none"    // ocultar  — spock.html
btnReiniciar.style.display = "block"   // mostrar  — spock.html


// ── EVENTOS — ESCUCHAR ACCIONES DEL USUARIO ─────────────────
/*
  addEventListener(evento, función)
  Ejecuta la función cuando ocurre el evento en ese elemento.
*/

// Click en botón — monedas.html y temperatura.html:
let convertirBtn = document.getElementById("convertir")
convertirBtn.addEventListener("click", function() {
    resultado3.innerHTML = ""    // limpiar
    // ...hacer algo
})

// Click con función flecha (equivalente):
boton.addEventListener("click", () => {
    obtenerClima()
})

// Cambio en un <select> — spock.html:
playerChoice.addEventListener("change", function() {
    let jugadorEscoge = playerChoice.value
    console.log(jugadorEscoge)
})

// Tecla pulsada — temperatura.html:
inputCiudad.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()   // evita que el form se envíe
        obtenerClima()
    }
})

// Eventos más comunes:
//   "click"    → cuando haces click
//   "change"   → cuando cambia el valor de un input/select
//   "keydown"  → cuando pulsas una tecla
//   "input"    → cada vez que escribes en un campo
//   "submit"   → cuando envías un formulario




// ════════════════════════════════════════════════════════════
// 7. FETCH — OBTENER DATOS DE INTERNET
// ════════════════════════════════════════════════════════════
/*
  QUÉ ES:   Función que hace una petición HTTP a una URL.
  PARA QUÉ: Traer datos de una API (JSON) para usarlos en la página.

  HAY DOS FORMAS (tu profesor usó las dos):
    A) .then()/.catch()   → monedas.html y temperatura.html
    B) async/await        → monedas.html (función convertir)

  Ambas hacen lo mismo. En examen puedes usar cualquiera.
*/


// ── FORMA A: .then() / .catch() ─────────────────────────────
// De clase — temperatura.html (la más completa):

function obtenerClima() {
    const ciudad2 = "Valencia"
    const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad2}`

    fetch(url2)
        .then(response => {
            if (!response.ok) {                          // comprobar si hubo error HTTP
                throw new Error("Error: " + response.statusText)
            }
            return response.json()                       // 1er then: convertir a JSON
        })
        .then((data) => {
            // 2do then: ya tienes los datos como objeto JS
            const temperature = data.main.temp
            const description = data.weather[0].description
            weather.innerText = "Temperatura: " + temperature
        })
        .catch(error => {
            console.error("Problema:", error)            // si algo falla
            weather.textContent = "No se pudo obtener el clima."
        })
}

// De clase — monedas.html (con forEach sobre los datos):
function convertir() {
    let url3 = "https://api.frankfurter.dev/v1/latest?base=EUR"

    fetch(url3)
        .then(response => response.json())               // convertir a JSON
        .then(datos => {
            console.log(datos)
            let cambios = Object.entries(datos.rates)    // convierte objeto en array de pares
            cambios.forEach(([clave, valor]) => {
                console.log(clave, valor)
                // clave → "USD", valor → 1.08
                // aquí pintarías en el DOM
            })
        })
        .catch(error => console.log(error))
}


// ── FORMA B: async / await ───────────────────────────────────
/*
  async   → marca la función como asíncrona (puede usar await)
  await   → "espera aquí hasta que esto termine"

  Por qué hay SIEMPRE 2 await con fetch:
    1er await → espera a que llegue la respuesta HTTP (cabeceras)
    2do await → espera a que se lea el cuerpo y se convierta a JSON
  Son dos operaciones distintas. Sin el 2do await tienes una Promise, no datos.
*/

async function obtenerDatos() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        // respuesta = objeto Response (todavía no tienes los datos)

        const datos = await respuesta.json()
        // datos = objeto JavaScript ya usable

        console.log(datos.title)
        document.getElementById("resultado").textContent = datos.title

    } catch (error) {
        console.error("Error:", error)
    }
}
obtenerDatos()   // ← no olvides llamar la función


// Fetch con lista + forEach (patrón más probable en examen):
async function cargarLista() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await res.json()           // array de objetos

        const ul = document.getElementById("lista")
        posts.forEach(post => {
            const li = document.createElement("li")
            li.textContent = post.title
            ul.appendChild(li)
        })
    } catch (error) {
        console.error(error)
    }
}


// Template literals — para construir URLs con variables (usado en clase):
let base = "EUR"
let urlDinamica = `https://api.frankfurter.dev/v1/latest?base=${base}`
//                 ^ backtick (`)  y  ${variable} para meter variables dentro




// ════════════════════════════════════════════════════════════
// 8. SETTIMEOUT
// ════════════════════════════════════════════════════════════
/*
  QUÉ ES:   Ejecuta una función UNA VEZ después de N milisegundos.
  PARA QUÉ: Retrasar una acción (ej: el ordenador "piensa" unos segundos).

  1000 ms = 1 segundo

  De clase — spock.html (descuenta):
    El ordenador espera 5 segundos antes de elegir su opción.
*/

// De clase — spock.html:
let tiempoPensar2 = 5
const opciones2 = ["piedra", "papel", "tijera", "lagarto", "spock"]

function descuenta() {
    setTimeout(() => {
        let rn = randomInt(opciones2.length - 1)     // número aleatorio
        let ordenadorEscoge = opciones2[rn]           // elige opción
        console.log("Ordenador eligió:", ordenadorEscoge)
        // aquí llamarías a quienGana(jugador, ordenadorEscoge)
    }, tiempoPensar2 * 1000)                          // 5 * 1000 = 5000ms = 5s
}

// Forma básica:
setTimeout(() => {
    console.log("Esto aparece 2 segundos después")
}, 2000)

// Con función nombrada:
function ejecutar() {
    console.log("Ejecutado tras 3 segundos")
}
setTimeout(ejecutar, 3000)

// IMPORTANTE: el código después del setTimeout NO espera — sigue ejecutándose.
console.log("Esto sale ANTES aunque setTimeout sea de 0ms")




// ════════════════════════════════════════════════════════════
// ERRORES TÍPICOS DE EXAMEN (los más frecuentes)
// ════════════════════════════════════════════════════════════

/*
  ❌ 1. Script antes del elemento HTML → el elemento no existe aún → null
         Solución: pon el <script> justo antes de </body>

  ❌ 2. Olvidar el 2do await en fetch:
         const datos = respuesta.json()   // ← esto es una Promise, no datos
         const datos = await respuesta.json()  // ← así sí

  ❌ 3. Olvidar async en la función que usa await:
         function cargar() { await fetch(...) }  // SyntaxError
         async function cargar() { await fetch(...) }  // correcto

  ❌ 4. Olvidar llamar la función después de definirla:
         async function obtenerDatos() { ... }
         // falta → obtenerDatos()

  ❌ 5. Usar == en vez de === (puede dar comparaciones raras)
         "" == false   → true  (¡peligroso!)
         "" === false  → false (correcto)

  ❌ 6. forEach no devuelve nada — no puedes hacer:
         let resultado = arr.forEach(...)  // undefined
         Usa map() si necesitas un nuevo array con resultados.

  ❌ 7. innerHTML += borra los listeners de eventos anteriores.
         Para añadir elementos manteniendo listeners, usa appendChild().
*/




// ════════════════════════════════════════════════════════════
// MINI REFERENCIA RÁPIDA — para el examen
// ════════════════════════════════════════════════════════════

/*
  ── VARIABLES ──────────────────────────────────────────
  let x = valor           puede cambiar
  const x = valor         no puede cambiar

  ── ARRAY ──────────────────────────────────────────────
  let a = [1, 2, 3]
  a[0]                    primer elemento
  a.length                cuántos hay
  a.push(x)               añadir al final
  a.pop()                 eliminar último
  a.indexOf(x)            posición (-1 si no existe)
  a.forEach(el => ...)    recorrer

  ── FUNCIONES ──────────────────────────────────────────
  function nombre(p) { return p }
  const nombre = (p) => p          1 línea
  const nombre = (p) => { return p }  varias líneas

  ── CONDICIONAL ────────────────────────────────────────
  if (cond) { } else if (cond) { } else { }
  let x = cond ? valorSiTrue : valorSiFalse

  ── BUCLES ─────────────────────────────────────────────
  for (let i=0; i<n; i++) { }
  for (let x of array) { }
  while (cond) { }
  array.forEach(x => { })

  ── DOM ────────────────────────────────────────────────
  document.getElementById("id")
  document.querySelector(".clase")
  el.textContent = "texto"
  el.innerHTML = "<b>html</b>"
  el.innerHTML += "añadir"
  el.style.display = "none" / "block"
  el.classList.add("clase")
  el.classList.remove("clase")
  let val = input.value
  document.createElement("li")
  padre.appendChild(hijo)
  el.addEventListener("click", () => { })

  ── FETCH (async/await) ────────────────────────────────
  async function f() {
    try {
      const res  = await fetch(url)         // 1er await
      const data = await res.json()         // 2do await
      // usar data aquí
    } catch(e) { console.error(e) }
  }
  f()

  ── FETCH (.then) ──────────────────────────────────────
  fetch(url)
    .then(res => res.json())
    .then(data => { // usar data })
    .catch(err => console.error(err))

  ── SETTIMEOUT ─────────────────────────────────────────
  setTimeout(() => { // código }, milisegundos)
  setTimeout(() => { codigo }, 2000)   // 2 segundos
*/
