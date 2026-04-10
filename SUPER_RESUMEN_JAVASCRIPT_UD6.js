// ============================================================
//  SUPER RESUMEN JAVASCRIPT — UD06.1 / UD06.2A / UD06.2B / UD06.3
//  Asignatura: Lenguajes de Marcas — ASIR 2025/2026
//  Autor apuntes: Pascual Ligero 
// ============================================================

// ╔══════════════════════════════════════════════════════════╗
// ║               MÓDULO 1 — JAVASCRIPT 1 (UD06.1)          ║
// ╚══════════════════════════════════════════════════════════╝

// ─────────────────────────────────────────────────────────────
// 1. INTRODUCCIÓN Y ENTORNO
// ─────────────────────────────────────────────────────────────
/*
  JS = cerebro de la web. HTML = esqueleto, CSS = ropa, JS = músculos.
  Motor JS en Chrome/Edge = V8.

  VINCULAR JS AL HTML — tres formas:
    <script src="app.js">          → Bloquea la carga. MAL.
    <script src="app.js" async>    → Descarga paralela, ejecuta al terminar. Caótico.
    <script src="app.js" defer>    → ✅ CORRECTO. Descarga en paralelo, ejecuta tras HTML.

  Estructura de proyecto recomendada:
    mi-proyecto/
    ├── index.html
    ├── css/styles.css
    └── js/script.js
*/

// Abrir consola: F12 → pestaña Console
console.log("Mensaje normal");
console.warn("Advertencia (amarillo)");
console.error("Error crítico (rojo)");
console.table([{ nombre: "Ana", edad: 28 }]);  // muestra como tabla
console.time("test"); /* código */ console.timeEnd("test");


// ─────────────────────────────────────────────────────────────
// 2. VARIABLES Y TIPOS DE DATOS
// ─────────────────────────────────────────────────────────────
/*
  const  → caja blindada. No se puede reasignar. Úsala el 95% de las veces.
  let    → caja abierta. Sí se puede reasignar. Solo si el valor va a cambiar.
  var    → ❌ PROHIBIDO. Ignora bloques {}, causa bugs invisibles.
  
  TIPOS PRIMITIVOS:
    String    → "hola"
    Number    → 25, 3.14
    Boolean   → true / false
    Null      → vacío A PROPÓSITO
    Undefined → declarada pero sin valor (JS lo pone por defecto)
    Symbol    → identificador único (avanzado)
    BigInt    → números gigantescos: 9007199254740991n  (fíjate en la 'n')
*/

const username = "Jeff";          // String
let edad = 25;                    // Number
const isPremium = true;           // Boolean
let descuento = null;             // Null explícito
let sinValor;                     // Undefined (JS lo pone solo)

console.log(typeof username);     // "string"
console.log(typeof null);         // "object"  ← bug histórico de JS, acéptalo

// BigInt — no mezcles con Number normal
const visitas = 9007199254740991n;
console.log(visitas + 1n);        // correcto: 9007199254740992n
// console.log(visitas + 1);      // ❌ Error: no puedes mezclar BigInt y Number

// ⚠️ ERRORES TÍPICOS DE EXAMEN:
// - Usar var  → siempre const/let
// - typeof null → "object" (no es un bug que debes corregir, es JS)


// ─────────────────────────────────────────────────────────────
// 3. OPERADORES
// ─────────────────────────────────────────────────────────────
/*
  Aritméticos:  +  -  *  /  %
  Asignación:   +=  -=  *=  /=
  
  COMPARACIÓN — ⚠️ MUY IMPORTANTE EN EXAMEN:
    ==   → débil (compara SOLO valor, convierte tipos) → "5" == 5 → true   ← PELIGROSO
    ===  → estricto (compara valor Y tipo)             → "5" === 5 → false ← SIEMPRE USA ESTE
    !==  → distinto estricto
  
  LÓGICOS:
    &&   → AND: ambas deben ser true
    ||   → OR: al menos una debe ser true
    !    → NOT: invierte el booleano
*/

let vida = 100;
vida -= 20;                          // vida = 80

console.log(10 == "10");            // true  ← coerción de tipos, PELIGROSO
console.log(10 === "10");           // false ← correcto, distintos tipos

const bateria = 15;
const cargando = false;
const enPeligro = bateria < 20 && !cargando;  // true


// ─────────────────────────────────────────────────────────────
// 4. CONTROL DE FLUJO
// ─────────────────────────────────────────────────────────────

// --- IF / ELSE ---
if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

// --- TERNARIO (if/else en 1 línea) ---
const saldo = 5;
const mensaje = saldo > 0 ? "Comprar" : "Ahorrar";

// --- SWITCH ---
let color = "rojo";
switch (color) {
  case "rojo":   console.log("Stop"); break;
  case "verde":  console.log("Go"); break;
  default:       console.log("Error");
}

// --- BUCLES ---

// for...of → recorrer ARRAYS (el más usado)
const playlist = ["Despacito", "Flowers", "Bizarrap"];
for (const cancion of playlist) {
  console.log("Reproduciendo:", cancion);
}

// for...in → recorrer propiedades de OBJETOS
const personaje = { nombre: "Mario", nivel: 10 };
for (const propiedad in personaje) {
  console.log(propiedad, "→", personaje[propiedad]);
}

// for clásico
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while
let contador = 0;
while (contador < 3) {
  console.log("Cargando...", contador);
  contador++;
}

// ⚠️ ERRORES TÍPICOS:
// - Bucle infinito en while si la condición nunca cambia
// - Usar for...in para arrays → usa for...of
// - if (vida = 0) → ASIGNA, no compara. Usa ===


// ─────────────────────────────────────────────────────────────
// 5. FUNCIONES
// ─────────────────────────────────────────────────────────────

// --- Declaración clásica (Hoisting: se puede usar ANTES de definirla) ---
function calcularPropina(total) {
  return total * 0.10;
}

// --- Expresión (NO tiene Hoisting) ---
const ganarXP = function(actuales, ganados) {
  return actuales + ganados;
};

// --- Arrow Function (Función Flecha) → sintaxis moderna, 90% del código profesional ---
const sumar = (a, b) => {
  return a + b;
};

// Return implícito: si solo hace una cosa en 1 línea, quita {} y return
const restar = (a, b) => a - b;
const doble = n => n * 2;          // un solo parámetro → no necesita ()
const saludar = () => "Hola";      // sin parámetros → paréntesis vacíos

// ⚠️ NO usar arrow en métodos de objeto que necesiten 'this'
const usuario = {
  nombre: "Ana",
  saludarMal: () => console.log("Hola " + this.nombre),   // ❌ this no apunta al objeto
  saludarBien: function() { console.log("Hola " + this.nombre) } // ✅
};

// --- Parámetros por defecto ---
const crearMensaje = (user = "Invitado", tag = "General") => {
  console.log(`[${tag}] Usuario: ${user}`);
};
crearMensaje();               // [General] Usuario: Invitado
crearMensaje("Carlos", "Admin");

// --- Rest Operator (...) → agrupa argumentos en array ---
const sumarTodo = (...numeros) => {
  let total = 0;
  for (const n of numeros) total += n;
  return total;
};
console.log(sumarTodo(10, 20, 30));  // 60
// ⚠️ El ...rest SIEMPRE va al final de los parámetros

// ─────────────────────────────────────────────────────────────
// 6. SCOPE Y HOISTING
// ─────────────────────────────────────────────────────────────
/*
  SCOPE (ámbito): zona donde vive una variable.
    - Global: fuera de todo, cualquiera puede tocarla. Peligroso.
    - Local/Bloque: dentro de { }. Muere al salir. const/let respetan esto.
  
  HOISTING (elevación): JS mueve declaraciones al inicio.
    - function se eleva COMPLETA → puedes usarla antes de escribirla.
    - let/const se "elevan" pero a una Zona Muerta Temporal (TDZ).
      Si las usas antes de declararlas → ReferenceError.
*/

console.log(saludarClasico());      // ✅ funciona (hoisting de function)
function saludarClasico() { return "Hola"; }

// console.log(saludarModerno());   // ❌ Error: no puedes acceder antes de inicializar
const saludarModerno = () => "Hola";

// Shadowing: variable local con mismo nombre que global → confuso, evitar


// ─────────────────────────────────────────────────────────────
// 7. CALLBACKS
// ─────────────────────────────────────────────────────────────
/*
  Callback: función que pasas como argumento a otra función para que la ejecute después.
  Las funciones son "ciudadanos de primera clase" en JS → se pueden pasar como valores.
*/

const procesarUsuarios = (lista, accion) => {
  for (const user of lista) {
    accion(user);
  }
};

const amigos = ["Ana", "Beto", "Carla"];
const gritar = (nombre) => console.log("¡" + nombre.toUpperCase() + "!");

procesarUsuarios(amigos, gritar);                              // referencia, sin ()
procesarUsuarios(amigos, (n) => console.log("Hola " + n));    // callback anónimo inline

// ⚠️ ERROR CLÁSICO: pasar callback con paréntesis
// procesarUsuarios(amigos, gritar())  ← ejecuta gritar() inmediatamente y pasa undefined
// procesarUsuarios(amigos, gritar)    ← CORRECTO: pasa la REFERENCIA a la función


// ╔══════════════════════════════════════════════════════════╗
// ║           MÓDULO 2A — ARRAYS Y OBJETOS (UD06.2A)        ║
// ╚══════════════════════════════════════════════════════════╝

// ─────────────────────────────────────────────────────────────
// 8. ARRAYS (LISTAS)
// ─────────────────────────────────────────────────────────────
/*
  Array = lista ordenada. Índice empieza en 0.
*/

const cola = ["Usuario1", "Usuario2"];

// MÉTODOS QUE MUTAN EL ARRAY ORIGINAL:
cola.push("Usuario3");         // Añade al final
cola.pop();                    // Saca del final y lo devuelve
cola.unshift("VIP");           // Añade al principio
cola.shift();                  // Saca del principio y lo devuelve

// MÉTODOS FUNCIONALES (los más usados en código moderno):
const playlist2 = [
  { id: 1, titulo: "Bohemian Rhapsody", artista: "Queen",   duracion: 354, genero: "Rock" },
  { id: 2, titulo: "Billie Jean",       artista: "MJ",      duracion: 294, genero: "Pop"  },
  { id: 3, titulo: "Hotel California",  artista: "Eagles",  duracion: 390, genero: "Rock" },
  { id: 4, titulo: "Despacito",         artista: "L.Fonsi",  duracion: 228, genero: "Pop"  },
];

// .map() → transforma. Entrada N elementos → salida N elementos
const titulos = playlist2.map(c => c.titulo);
// ["Bohemian Rhapsody", "Billie Jean", ...]

// .filter() → filtra. Entrada N → salida X (los que cumplan condición)
const rock = playlist2.filter(c => c.genero === "Rock");

// .find() → busca EL PRIMERO que coincide (devuelve el objeto, no un array)
const corta = playlist2.find(c => c.duracion < 230);

// .reduce() → acumula. Entrada N → salida 1 valor
const duracionTotal = playlist2.reduce((total, c) => total + c.duracion, 0);
// El segundo argumento (0) es el valor inicial del acumulador

// .some() → ¿HAY alguno que cumple? → true/false
const hayReggaeton = playlist2.some(c => c.genero === "Reggaeton");  // false

// .every() → ¿TODOS cumplen? → true/false
const sonLargas = playlist2.every(c => c.duracion > 200);            // true

// .forEach() → recorre, sin devolver nada (para efectos: console, DOM)
playlist2.forEach(c => {
  console.log(`${c.titulo} - ${c.artista}`);
});

// NOVEDADES ES2023/24 — INMUTABLES (no tocan el original):
const precios2 = [100, 50, 200];
const ordenados = precios2.toSorted((a, b) => a - b);  // [50, 100, 200]
console.log(precios2);  // [100, 50, 200] ← original intacto
// sort() muta · toSorted() NO muta ← usa siempre toSorted en proyectos modernos

const nuevos = precios2.with(1, 999);   // [100, 999, 200] — copia con índice 1 cambiado
console.log(precios2.at(-1));           // 200 — at(-1) = último elemento

// ⚠️ ERRORES TÍPICOS:
// - .map cuando necesitas .filter → map siempre devuelve misma cantidad
// - Olvidar return en arrow con {}: (c) => { c.titulo }  ← undefined
// - Confundir .find (objeto) con .filter (array)


// ─────────────────────────────────────────────────────────────
// 9. OBJETOS
// ─────────────────────────────────────────────────────────────
/*
  Objeto = ficha descriptiva con pares clave: valor.
  También puede tener métodos (funciones dentro del objeto).
*/

const streamer = {
  nick: "Ibai",
  plataforma: "Twitch",
  "juego-favorito": "LoL",       // clave con guión → requiere comillas
  estadisticas: {
    followers: 15000000,
    subs: 50000
  }
};

// Acceso por punto (cuando sabes la clave)
console.log(streamer.nick);

// Acceso por corchetes (OBLIGATORIO en 2 casos):
// 1. Claves con caracteres especiales
console.log(streamer["juego-favorito"]);
// 2. Acceso dinámico (la clave está en una variable)
const queQuiero = "plataforma";
console.log(streamer[queQuiero]);  // "Twitch"

// Recorrer objeto:
Object.keys(streamer);       // ["nick", "plataforma", "juego-favorito", "estadisticas"]
Object.values(streamer);     // valores
Object.entries(streamer);    // [[clave, valor], ...]

// Object.groupBy (ES2024) — agrupar array por criterio
const juegos = [
  { titulo: "Elden Ring", genero: "RPG" },
  { titulo: "FIFA",       genero: "Deportes" },
  { titulo: "Zelda",      genero: "RPG" },
];
const porGenero = Object.groupBy(juegos, j => j.genero);
// { RPG: [...], Deportes: [...] }

// Objeto con métodos (factory function pattern):
function crearTarea(id, descripcion, fechaLimite, prioridad) {
  const tarea = { id, descripcion, completada: false, fechaLimite, prioridad };
  
  tarea.toggleCompletada = () => {
    tarea.completada = !tarea.completada;
    return tarea;
  };
  
  tarea.mostrarEnConsola = () => {
    const estado = tarea.completada ? '[X]' : '[ ]';
    console.log(`- (${tarea.id}) ${estado} : ${tarea.descripcion}`);
  };
  
  return tarea;
}

const t1 = crearTarea(1, "Estudiar arrays", "2026-02-23", "alta");
t1.toggleCompletada();
t1.mostrarEnConsola();


// ─────────────────────────────────────────────────────────────
// 10. ESTRUCTURAS AVANZADAS: SET y MAP
// ─────────────────────────────────────────────────────────────

// --- SET — lista SIN duplicados ---
const amigosDiscord = new Set();
amigosDiscord.add("Alex");
amigosDiscord.add("Sara");
amigosDiscord.add("Alex");       // Ignorado: ya existe
console.log(amigosDiscord.size); // 2
amigosDiscord.delete("Alex");
amigosDiscord.has("Sara");       // true

// Truco: eliminar duplicados de array en 1 línea
const etiquetas = ["js", "css", "js", "html", "css"];
const unicas = [...new Set(etiquetas)];  // ["js", "css", "html"]

// --- MAP — diccionario con claves de cualquier tipo ---
const inventario = new Map();
inventario.set("tornillos", { precio: 0.12, cantidad: 100 });
inventario.set("tuercas",   { precio: 0.08, cantidad: 200 });
console.log(inventario.get("tornillos"));  // { precio: 0.12, cantidad: 100 }
inventario.has("tuercas");  // true
inventario.delete("tuercas");
inventario.size;            // número de pares
inventario.clear();         // vacía todo

// ⚠️ ERRORES TÍPICOS:
// - mapa["clave"]  → undefined. SIEMPRE usa mapa.get("clave")
// - miSet[0]       → no funciona, Set no tiene índices

// --- SPREAD OPERATOR (...) — "desempaqueta" ---
const likes = [100, 200, 150];
const nuevosFeed = [...likes, 500];     // [100, 200, 150, 500] (copia + añade)
// Copiar y fusionar objetos:
const base = { nombre: "Jeff", edad: 25 };
const extra = { ciudad: "Valencia", premium: true };
const fusionado = { ...base, ...extra };


// ╔══════════════════════════════════════════════════════════╗
// ║              MÓDULO 2B — DOM (UD06.2B)                  ║
// ╚══════════════════════════════════════════════════════════╝

// ─────────────────────────────────────────────────────────────
// 11. SELECCIÓN DE ELEMENTOS (EL GANCHO)
// ─────────────────────────────────────────────────────────────
/*
  DOM = árbol genealógico de tu web. Para modificar algo, primero lo "agarras".
*/

// getElementById → francotirador (solo ID, sin #)
const titulo = document.getElementById("titulo-principal");

// querySelector → explorador (primer elemento que coincida, usa selectores CSS)
const primerBoton = document.querySelector(".btn-action");  // clase con .
const porId2     = document.querySelector("#miDiv");         // id con #

// querySelectorAll → red de pesca (TODOS los que coincidan → NodeList)
const todosItems = document.querySelectorAll(".item");
todosItems.forEach(item => console.log(item.textContent));

// ⚠️ ERRORES TÍPICOS:
// - querySelector("boton")   → busca etiqueta <boton>, NO clase. Usa ".boton"
// - getElementById("#id")    → NO lleva #
// - todosItems.style = ...   → es una lista, debes hacer forEach primero


// ─────────────────────────────────────────────────────────────
// 12. MANIPULACIÓN DEL DOM (CONSTRUCTOR DE LEGOS)
// ─────────────────────────────────────────────────────────────

// Leer y escribir contenido:
titulo.textContent = "Nuevo título";       // solo texto (seguro)
titulo.innerHTML = "<strong>Negrita</strong>"; // HTML (cuidado con XSS)

// Crear elementos:
const nuevoLi = document.createElement("li");
nuevoLi.textContent = "Aprender DOM";
nuevoLi.classList.add("tarea-urgente");

// Insertar en el DOM:
const lista2 = document.getElementById("lista");
lista2.append(nuevoLi);    // al final
lista2.prepend(nuevoLi);   // al principio

// Eliminar:
nuevoLi.remove();

// Atributos data-* (datos personalizados):
// HTML: <button data-id="5" data-action="borrar">Borrar</button>
// JS:   elemento.dataset.id     → "5"  (siempre string)
//       elemento.dataset.action → "borrar"
//       Number(elemento.dataset.id) → 5 (convertir a número)

// ⚠️ ERRORES TÍPICOS:
// - Crear elemento y no hacer append → existe en memoria pero NO aparece en pantalla
// - append vs appendChild: usa append (más moderno, acepta texto directo y múltiples)


// ─────────────────────────────────────────────────────────────
// 13. EVENTOS
// ─────────────────────────────────────────────────────────────

// addEventListener → "Cuando pase X, ejecuta Y"
const boton = document.getElementById("btn");
boton.addEventListener("click", (e) => {
  console.log("Clickado");
});

// Eventos comunes:
//   "click"       → clic del ratón
//   "input"       → cada vez que el usuario escribe (tiempo real)
//   "keyup"       → cuando suelta una tecla
//   "submit"      → envío de formulario
//   "mouseenter"  → mouse entra en elemento
//   "mouseleave"  → mouse sale del elemento

// e.preventDefault() → ESENCIAL en formularios: evita que la página recargue
const form = document.querySelector("#miForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = form.elements.descripcion.value.trim();
  if (texto === "") return;
  // ... procesar datos
});

// Leer valor de un input:
const input = document.getElementById("miInput");
const valor = input.value;      // lo que el usuario escribió
input.value = "";               // limpiar el input

// DELEGACIÓN DE EVENTOS (técnica pro):
// En vez de 100 listeners en 100 botones → 1 listener en el contenedor padre
const feed = document.getElementById("feed");
feed.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-borrar")) {
    e.target.parentElement.remove();
  }
  // e.target → exactamente lo que clickaste
  // e.target.closest("li") → más seguro para subir al padre correcto
});

// ⚠️ ERRORES TÍPICOS:
// - btn.addEventListener("click", saludar())  → ejecuta al instante. Quita ()
// - input.textContent en lugar de input.value → .textContent no funciona en inputs


// ─────────────────────────────────────────────────────────────
// 14. CLASES Y ESTILOS CSS DESDE JS
// ─────────────────────────────────────────────────────────────
/*
  Regla de oro: NUNCA escribas CSS directo desde JS.
  Lo profesional = tener clases en CSS y usar JS para activarlas/desactivarlas.
*/

const caja = document.getElementById("caja");

// classList — el estilista:
caja.classList.add("activa");           // añade clase
caja.classList.remove("activa");        // quita clase
caja.classList.toggle("dark-mode");     // si tiene la clase la quita, si no la pone
caja.classList.contains("activa");      // true/false

// style — para cambios puntuales o dinámicos:
caja.style.backgroundColor = "red";    // camelCase (no background-color)
caja.style.width = "200px";

// ⚠️ ERRORES TÍPICOS:
// - elemento.class = "rojo"       → borra TODAS las clases anteriores. Usa classList.add
// - style.background-color        → el guión es resta. Usa camelCase: backgroundColor


// ╔══════════════════════════════════════════════════════════╗
// ║           MÓDULO 3 — ASINCRONÍA Y APIS (UD06.3)         ║
// ╚══════════════════════════════════════════════════════════╝

// ─────────────────────────────────────────────────────────────
// 15. SINCRONÍA VS ASINCRONÍA
// ─────────────────────────────────────────────────────────────
/*
  SÍNCRONO (bloqueante): fila con un cajero. Si uno tarda, todos esperan.
  ASÍNCRONO (no bloqueante): restaurante. Pides, sigues hablando, te avisan cuando está.
  
  JavaScript tiene UN SOLO hilo. Usa:
    - Pila (Call Stack) → ejecuta código síncrono
    - Cola (Queue)      → guarda callbacks/timers para después
  
  Lo síncrono SIEMPRE va antes que lo asíncrono, aunque setTimeout sea 0ms.
*/

console.log("A. Inicio");
setTimeout(() => {
  console.log("B. Dentro del timeout");
}, 0);
console.log("C. Fin");
// Salida: A → C → B   (¡OJO en examen!)


// ─────────────────────────────────────────────────────────────
// 16. PROMESAS
// ─────────────────────────────────────────────────────────────
/*
  Promesa = ticket de pedido. Objeto que representa un valor futuro.
  
  ESTADOS:
    Pending   → esperando (la hamburguesa se está cocinando)
    Fulfilled → éxito     (te entregan la hamburguesa)
    Rejected  → error     (se quemó la cocina)
  
  Un estado RESUELTO o RECHAZADO no puede cambiar. No puedes pasar de Rejected a Resolved.
*/

// CREAR una promesa:
const chequearWifi = new Promise((resolve, reject) => {
  const hayInternet = true;
  setTimeout(() => {
    if (hayInternet) {
      resolve("Conectado");    // éxito → .then recibe "Conectado"
    } else {
      reject("Sin señal");     // fallo → .catch recibe "Sin señal"
    }
  }, 2000);
});

// CONSUMIR con .then / .catch:
chequearWifi
  .then(msg => {
    console.log(msg);           // "Conectado"
    return "Abriendo Google"; // se puede encadenar otro .then
  })
  .then(msg2 => console.log(msg2))
  .catch(err => console.error(err))
  .finally(() => console.log("Proceso terminado (siempre se ejecuta)"));

// Promesas múltiples:
// Promise.all([p1, p2])        → espera TODAS. Si una falla, falla todo.
// Promise.any([p1, p2])        → la primera que tenga ÉXITO gana.
// Promise.allSettled([p1, p2]) → espera TODAS, devuelve estado de cada una (no lanza error)


// ─────────────────────────────────────────────────────────────
// 17. ASYNC / AWAIT
// ─────────────────────────────────────────────────────────────
/*
  async/await = forma más limpia de escribir promesas. El código parece síncrono.
  
  async → convierte la función en una que devuelve siempre una promesa.
  await → "pausa" la ejecución de ESA función hasta que la promesa se resuelva.
          ⚠️ Solo pausa ESA función, no bloquea el navegador completo.
          ⚠️ Solo se puede usar DENTRO de una función async.
*/

const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const iniciarSistema = async () => {
  console.log("Iniciando...");
  await esperar(1000);         // pausa 1 segundo (pero el navegador sigue vivo)
  console.log("Sistema cargado");
};

iniciarSistema();
console.log("Esto sale ANTES que 'Sistema cargado'");

// Manejo de errores con try/catch:
const obtenerDatos = async () => {
  try {
    const datos = await funcionQuePuedeFallar();
    console.log(datos);
  } catch (error) {
    console.error("Ups, falló:", error.message);
  }
};


// ─────────────────────────────────────────────────────────────
// 18. FETCH API + HTTP + JSON
// ─────────────────────────────────────────────────────────────
/*
  HTTP = protocolo de la web. Cliente → Request → Servidor → Response.
  
  MÉTODOS HTTP (verbos):
    GET    → traer datos (Leer)
    POST   → enviar datos nuevos (Crear)
    PUT/PATCH → actualizar (Editar)
    DELETE → borrar (Eliminar)
  
  JSON = formato de texto para intercambiar datos.
    JSON.stringify(objeto) → objeto JS → string JSON
    JSON.parse(string)     → string JSON → objeto JS
  
  API de pruebas gratuita: https://jsonplaceholder.typicode.com
*/

// --- GET BÁSICO ---
const obtenerUsuario = async (id) => {
  try {
    // 1. fetch devuelve una promesa → await la espera
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    // 2. response.ok verifica status 200-299. fetch NO lanza error en 404.
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    // 3. .json() TAMBIÉN es asíncrono → necesita segundo await
    const data = await response.json();
    
    console.log(`Usuario: ${data.name} — Email: ${data.email}`);
  } catch (error) {
    console.error("Fallo:", error.message);
  }
};

// obtenerUsuario(1);     // Usuario 1 correcto
// obtenerUsuario(9999);  // → lanza error manual (404)

// --- POST (CREAR) ---
const crearPost = async () => {
  const nuevoPost = { title: "Mi post", body: "Contenido", userId: 1 };
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",                              // cambiamos el verbo
      headers: {
        "Content-Type": "application/json",        // avisamos que enviamos JSON
      },
      body: JSON.stringify(nuevoPost),             // objeto JS → texto JSON
    });
    const data = await response.json();
    console.log("Post creado con ID:", data.id);
  } catch (error) {
    console.error(error);
  }
};

// ⚠️ ERRORES TÍPICOS — MUY IMPORTANTES EN EXAMEN:
// - Olvidar el segundo await response.json()  → verás el objeto Response crudo, no los datos
// - Creer que catch captura 404 → fetch solo rechaza si NO hay red. 404 es "éxito de red".
//   Siempre verifica response.ok manualmente.
// - Por qué DOS await: el primero espera que el servidor responda (cabeceras).
//   El segundo espera que descargue y parsee el cuerpo de la respuesta.


// ─────────────────────────────────────────────────────────────
// 19. LOCALSTORAGE Y SESSIONSTORAGE
// ─────────────────────────────────────────────────────────────
/*
  Web Storage: guardar datos en el navegador en formato clave-valor.
  
  localStorage    → persiste aunque cierres el navegador (hasta que se borre)
  sessionStorage  → solo dura mientras la pestaña esté abierta
  
  ⚠️ Solo guarda STRINGS. Para objetos usa JSON.stringify/parse.
*/

// localStorage:
localStorage.setItem("nombreUsuario", "Jeff");                 // guardar
const nombre2 = localStorage.getItem("nombreUsuario");         // recuperar → "Jeff"
localStorage.removeItem("nombreUsuario");                      // eliminar uno
localStorage.clear();                                          // eliminar TODO

// sessionStorage (misma API, solo cambia la persistencia):
sessionStorage.setItem("clave", "valor");
const dato = sessionStorage.getItem("clave");
sessionStorage.removeItem("clave");
sessionStorage.clear();

// Guardar OBJETOS (hay que serializar):
const usuario2 = { nombre: "Jeff", edad: 25 };
localStorage.setItem("usuario", JSON.stringify(usuario2));
const recuperado = JSON.parse(localStorage.getItem("usuario"));
console.log(recuperado.nombre); // "Jeff"


// ╔══════════════════════════════════════════════════════════╗
// ║              CHEAT SHEET GLOBAL — EXAMEN                ║
// ╚══════════════════════════════════════════════════════════╝
/*
  VARIABLES:     const (siempre) · let (si cambia) · NUNCA var
  COMPARAR:      === (siempre estricto) · !== (distinto estricto)
  DEBUG:         console.log/warn/error · debugger;
  TIPOS:         typeof variable
  
  FUNCIONES:     const fn = (a, b) => a + b;
  RETURN IMP.:   const fn = (a, b) => a + b;   (sin {} ni return)
  PARAMS DEF.:   (user = "Invitado")
  REST:          (...args) → al final siempre
  CALLBACK:      pasar referencia SIN ():  fn(datos, callback)
  
  ARRAYS:
    .map(x => ...)     → transforma (misma cantidad)
    .filter(x => ...)  → filtra (menos cantidad)
    .find(x => ...)    → primer objeto que coincide
    .reduce((a,x) => a + x, 0)  → acumula a 1 valor
    .forEach(x => ...) → solo recorre, no devuelve nada
    .some() .every()   → true/false
    .toSorted()        → copia ordenada (no muta)
    ...spread          → copia/fusiona
    new Set(arr)       → elimina duplicados
  
  OBJETOS:
    obj.clave          → acceso por punto
    obj["clave"]       → acceso dinámico o clave especial
    Object.keys/values/entries(obj)
    Object.groupBy(arr, criterio)
  
  DOM:
    document.getElementById("id")
    document.querySelector(".clase / #id")
    document.querySelectorAll(".clase")  → NodeList
    elem.textContent = "texto"
    elem.innerHTML   = "<b>html</b>"
    elem.value                           → para inputs
    document.createElement("li")
    padre.append(hijo) / padre.prepend(hijo)
    elem.remove()
    elem.classList.add/remove/toggle/contains
    elem.dataset.nombreAtributo
    elem.addEventListener("evento", fn)
    e.preventDefault()
    e.target
  
  ASYNC:
    async function fn() { ... }
    const data = await fetch(url)
    const json = await response.json()   ← 2 await necesarios
    response.ok → verifica HTTP 200-299
    try { ... } catch (err) { ... }
    JSON.stringify(obj) / JSON.parse(str)
  
  LOCALSTORAGE:
    localStorage.setItem(k, v)
    localStorage.getItem(k)
    localStorage.removeItem(k)
    localStorage.clear()
*/


// ╔══════════════════════════════════════════════════════════╗
// ║            PREGUNTAS TÍPICAS DE EXAMEN (V/F)            ║
// ╚══════════════════════════════════════════════════════════╝
/*
  1.  defer ejecuta el script ANTES de que cargue el HTML.          → F (después)
  2.  const permite modificar el valor de la variable.              → F
  3.  undefined = declarada pero sin valor asignado.                → V
  4.  === compara valor Y tipo.                                      → V
  5.  for...in es el bucle recomendado para arrays.                 → F (usa for...of)
  6.  10 == "10" → true.                                            → V (coerción débil)
  7.  BigInt se usa para decimales pequeños.                        → F (números gigantes)
  8.  let tiene scope de bloque.                                    → V
  9.  El motor JS en Chrome se llama V8.                            → V
  10. Arrow Functions tienen su propio 'this'.                      → F
  11. .map() modifica el array original.                            → F
  12. Set permite guardar valores duplicados.                       → F
  13. El Spread Operator sirve para copiar objetos.                 → V
  14. querySelector devuelve TODOS los elementos que coincidan.     → F (solo el primero)
  15. e.preventDefault() evita que un form recargue la página.     → V
  16. innerHTML es más seguro que textContent.                      → F (riesgo XSS)
  17. classList.toggle añade la clase si no existe, la quita si sí.→ V
  18. fetch lanza error en .catch si recibe 404.                    → F (solo si no hay red)
  19. .json() también es asíncrono → necesita await.               → V
  20. async hace que la función devuelva siempre una promesa.       → V
  21. setTimeout con 0ms se ejecuta antes que la siguiente línea.  → F (va a la cola)
  22. Una promesa puede pasar de Rejected a Resolved.              → F
*/


// ╔══════════════════════════════════════════════════════════╗
// ║                  EJEMPLO COMPLETO INTEGRADOR            ║
// ║         Fetch + DOM + localStorage + async/await        ║
// ╚══════════════════════════════════════════════════════════╝

// Simula una app completa: busca usuario por ID en API, lo muestra en DOM y lo guarda en localStorage
const buscarYMostrarUsuario = async (id) => {
  const contenedor = document.getElementById("resultado");
  if (!contenedor) return; // protección: solo funciona si existe el elemento en el HTML

  contenedor.textContent = "Cargando...";

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) throw new Error(`Usuario ${id} no encontrado (HTTP ${response.status})`);
    
    const user = await response.json();

    // Guardar en localStorage
    localStorage.setItem("ultimoUsuario", JSON.stringify(user));

    // Mostrar en DOM
    contenedor.innerHTML = `
      <h2>${user.name}</h2>
      <p>Email: ${user.email}</p>
      <p>Ciudad: ${user.address.city}</p>
    `;
  } catch (err) {
    contenedor.textContent = err.message;
    contenedor.style.color = "red";
  }
};

// Llamada de ejemplo (descomenta para probar en navegador):
// buscarYMostrarUsuario(1);
// buscarYMostrarUsuario(9999); // provoca el error 404

// Recuperar último usuario guardado:
const recuperarUltimoUsuario = () => {
  const raw = localStorage.getItem("ultimoUsuario");
  if (!raw) return null;
  return JSON.parse(raw);
};

// ============================================================
//  FIN DEL RESUMEN — Jeff, ¡a por ello!
// ============================================================
