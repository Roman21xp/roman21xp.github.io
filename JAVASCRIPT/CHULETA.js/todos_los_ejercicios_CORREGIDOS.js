// ============================================================
//  JAVASCRIPT - TAREAS 1 | LM - ASIR
//  Jeff — Repaso examen
//  Todos los ejercicios corregidos + conceptos clave comentados
// ============================================================


// ============================================================
//  CONCEPTOS CLAVE QUE DEBES DOMINAR (CAJA NEGRA)
// ============================================================

// ► FUNCIÓN = caja negra: recibe parámetros → procesa → devuelve resultado
//   function nombre(parametro) { return resultado; }

// ► ARRAY = lista de elementos
//   let arr = [1, 2, 3];
//   arr.push(valor)       → añade al final
//   arr.indexOf(valor)    → devuelve posición (-1 si no existe)
//   arr.length            → número de elementos

// ► BUCLE FOR:   for (let i = 0; i < 10; i++) { }
// ► BUCLE WHILE: while (condicion) { }

// ► Math.random()           → número decimal entre 0 y 1
// ► Math.floor(x)           → redondea hacia abajo
// ► Math.floor(Math.random() * max) + 1  → número entre 1 y max (INCLUIDO)

// ► String:
//   "hola".indexOf("o")   → 1
//   "hola".length         → 4
//   "hola"[0]             → "h"

// ► DOM (manipulación del HTML desde JS):
//   document.getElementById("id")   → captura elemento del HTML
//   elemento.value                   → valor de un input
//   elemento.innerHTML               → contenido HTML del elemento
//   elemento.addEventListener("click", funcion)  → escucha evento


// ============================================================
//  EJERCICIO 1 — EL DADO DE N CARAS ✅ (estaba correcto)
// ============================================================
// CONCEPTO: función con parámetro, Math.random, return

function tirarDado(numeroCaras) {
  // Math.random() da un decimal entre 0 y 1
  // Al multiplicar por numeroCaras obtenemos un decimal entre 0 y (numeroCaras-1)
  // Math.floor redondea hacia abajo → entero entre 0 y (numeroCaras-1)
  // +1 → resultado final entre 1 y numeroCaras (INCLUIDO)
  return Math.floor(Math.random() * numeroCaras) + 1;
}

// Llamada: dado de 6 caras
const resultado = tirarDado(6);
console.log("Resultado del dado:", resultado);

// Llamada: dado de 20 caras (D&D style)
const resultado20 = tirarDado(20);
console.log("Dado de 20 caras:", resultado20);


// ============================================================
//  EJERCICIO 2 — LA PRIMITIVA ❌→✅ (2 bugs corregidos)
// ============================================================
// BUGS DEL ORIGINAL:
//   1. Math.random() * max → da entre 0 y 48, nunca el 49 (faltaba +1)
//   2. No comprobaba duplicados → podía repetir números
// CONCEPTO: while, array, indexOf para comprobar duplicados

function dameNumero(max) {
  // +1 para que el 49 también sea posible (entre 1 y 49 inclusive)
  return Math.floor(Math.random() * max) + 1;
}

let veces = 1;
let numeros = [];

while (veces <= 6) {
  let variable = dameNumero(49);

  // indexOf devuelve -1 si el elemento NO existe en el array
  // Si posicion === -1, el número es nuevo → lo añadimos
  let posicion = numeros.indexOf(variable);
  if (posicion === -1) {
    numeros.push(variable);  // añadir al array solo si no existe
    veces++;                 // solo incrementamos si añadimos un número válido
  }
  // Si ya existía, el bucle repite sin incrementar veces
}

console.log("Números de la primitiva:", numeros);


// ============================================================
//  EJERCICIO 3 — CIFRADO CÉSAR ❌→✅ (bug: no construía fraseCifrada)
// ============================================================
// BUG DEL ORIGINAL:
//   - Calculaba nuevaLetra pero nunca la concatenaba a ninguna variable
//   - Si el desplazamiento supera la longitud del array → undefined (no hay "vuelta")
// CONCEPTO: for, indexOf, string como array de caracteres, módulo %

let abece = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let frase = "Lol";
let paso = 3;

let nuevaFrase = ""; // ← el original tenía esto pero nunca asignaba nada

for (let i = 0; i < frase.length; i++) {
  let letraOriginal = frase[i];
  let posicion = abece.indexOf(letraOriginal);

  if (posicion === -1) {
    // Si el carácter no está en el abecedario (espacio, coma...) → lo dejamos igual
    nuevaFrase += letraOriginal;
  } else {
    // Calculamos la nueva posición
    // El % (módulo) hace que "dé la vuelta" si supera el final del abecedario
    // Ejemplo: posición 50 en un abece de 52 letras → 50 % 52 = 50 ✅
    // Ejemplo: posición 55 → 55 % 52 = 3 → vuelve al principio ✅
    let nuevaPosicion = (posicion + paso) % abece.length;
    let nuevaLetra = abece[nuevaPosicion];

    nuevaFrase += nuevaLetra; // ← ESTO FALTABA EN EL ORIGINAL → concatenamos
  }
}

console.log("Frase original: " + frase);
console.log("Frase cifrada:  " + nuevaFrase);


// ============================================================
//  EJERCICIO 4 — GENERADOR DE CONTRASEÑAS SEGURAS ❌→✅
// ============================================================
// BUGS DEL ORIGINAL:
//   1. "carateresEspeciales" → typo (faltaba una 'c') → ReferenceError
//   2. Contraseña incompleta: solo generaba 1 número + 1 especial
//   3. No cumplía los requisitos: mín 1 mayúscula, mín 1 número, mín 1 especial, 8-50 chars
// CONCEPTO: función como caja negra, string[índice], módulo, concatenación, split/sort/join

// Definimos los caracteres disponibles
let caracteres         = "abcdefghijklmnopqrstuvwxyz";
let caracteresMayus    = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let caracteresNumeros  = "0123456789";
let caracteresEspecial = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";

// Función auxiliar: número aleatorio entre min y max (ambos incluidos)
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función auxiliar: devuelve 'cantidad' caracteres aleatorios de 'grupo'
function getChars(grupo, cantidad) {
  let resultado = "";
  for (let i = 0; i < cantidad; i++) {
    let pos = numeroAleatorio(0, grupo.length - 1);
    resultado += grupo[pos];
  }
  return resultado;
}

// Función principal: genera contraseña de longitud entre 8 y 50
function generarPassword(longitud) {

  // Validar rango
  if (longitud < 8)  longitud = 8;
  if (longitud > 50) longitud = 50;

  // REQUISITOS OBLIGATORIOS (mínimos garantizados):
  let password = "";
  password += getChars(caracteresNumeros,  numeroAleatorio(1, 2)); // mín 1, máx 2 números
  password += getChars(caracteresEspecial, numeroAleatorio(1, 2)); // mín 1, máx 2 especiales
  password += getChars(caracteresMayus,    1);                      // mín 1 mayúscula

  // Rellenar el resto con minúsculas hasta llegar a la longitud pedida
  let restante = longitud - password.length;
  password += getChars(caracteres, restante);

  // Desordenar → para que los obligatorios no estén siempre al principio
  // split('')  → convierte el string en array de caracteres
  // sort(...)  → ordena aleatoriamente
  // join('')   → vuelve a unir en string
  password = password.split('').sort(() => Math.random() - 0.5).join('');

  return password;
}

console.log("Contraseña (12 chars):", generarPassword(12));
console.log("Contraseña (20 chars):", generarPassword(20));
console.log("Contraseña (8 chars):",  generarPassword(8));


// ============================================================
//  EJERCICIOS SIMPLES — TODOS RESUELTOS Y COMENTADOS
// ============================================================

// --- NIVEL 1: BUCLES BÁSICOS ---

// 1. Números del 1 al 10 con for
console.log("--- for del 1 al 10 ---");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 1b. Números del 1 al 10 con while
console.log("--- while del 1 al 10 ---");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 2. Pares del 1 al 20
console.log("--- pares del 1 al 20 ---");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {  // % es el operador MÓDULO → resto de la división
    console.log(i);   // si el resto al dividir entre 2 es 0 → es par
  }
}

// 3. Suma del 1 al 100
let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma += i; // suma = suma + i (acumulador)
}
console.log("Suma del 1 al 100:", suma); // 5050

// 4. Cuenta atrás desde n
let n = 10; // puedes cambiarlo
console.log("--- cuenta atrás desde " + n + " ---");
while (n >= 0) {
  console.log(n);
  n--;
}


// --- NIVEL 2: ARRAYS Y STRINGS ---

// 5. Recorrer array de nombres
let nombres = ["Jeff", "Ana", "Luis", "Marta", "Pedro"];

// Con for normal:
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// Con for...of (más limpio, igual de válido):
for (let nombre of nombres) {
  console.log(nombre);
}

// 6. Contar elementos mayores que X
let numerosArr = [3, 7, 1, 15, 8, 22, 4];
let x = 7;
let contador = 0;
for (let i = 0; i < numerosArr.length; i++) {
  if (numerosArr[i] > x) {
    contador++;
  }
}
console.log("Elementos mayores que " + x + ":", contador);

// 7. Longitud total de palabras
let palabras = ["hola", "mundo", "javascript"];
let totalChars = 0;
for (let i = 0; i < palabras.length; i++) {
  totalChars += palabras[i].length; // .length de un string = número de caracteres
}
console.log("Total de caracteres:", totalChars);

// 8. Contar vocales en un texto
let texto = "Javascript es genial";
let vocales = "aeiouAEIOU";
let contadorVocales = 0;
for (let i = 0; i < texto.length; i++) {
  if (vocales.indexOf(texto[i]) !== -1) { // si la letra está en vocales
    contadorVocales++;
  }
}
console.log("Vocales en el texto:", contadorVocales);


// --- NIVEL 3: FUNCIONES SIMPLES ---

// 9. saludar(nombre)
function saludar(nombre) {
  return "Hola, " + nombre; // return → la función DEVUELVE un valor
}
console.log(saludar("Jeff"));
console.log(saludar("Ana"));

// 10. esPar(numero)
function esPar(numero) {
  return numero % 2 === 0; // devuelve true o false directamente
}
for (let i = 1; i <= 20; i++) {
  if (esPar(i)) console.log(i + " es par");
}

// 11. sumar(a, b)
function sumar(a, b) {
  return a + b;
}
console.log(sumar(3, 5));   // 8
console.log(sumar(10, 20)); // 30

// 12. maximoDeTres(a, b, c)
function maximoDeTres(a, b, c) {
  let max = a;          // asumimos que a es el mayor
  if (b > max) max = b; // si b es mayor, actualizamos
  if (c > max) max = c; // si c es mayor, actualizamos
  return max;
}
console.log(maximoDeTres(3, 9, 5)); // 9


// --- NIVEL 4: BUCLES + FUNCIONES ---

// 13. sumaHasta(n)
function sumaHasta(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(sumaHasta(10)); // 55

// 14. contarMayoresQue(arr, x)
function contarMayoresQue(arr, x) {
  let cuenta = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > x) cuenta++;
  }
  return cuenta;
}
console.log(contarMayoresQue([1, 5, 8, 3, 12], 5)); // 2

// 15. invertirTexto(texto)
function invertirTexto(texto) {
  let invertido = "";
  for (let i = texto.length - 1; i >= 0; i--) { // empezamos desde el FINAL
    invertido += texto[i];
  }
  return invertido;
}
console.log(invertirTexto("hola")); // "aloh"

// 16. filtrarPares(arr) — sin usar .filter
function filtrarPares(arr) {
  let pares = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      pares.push(arr[i]); // push añade al nuevo array
    }
  }
  return pares;
}
console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]


// --- NIVEL 5: EJERCICIOS MÁS LARGOS ---

// 17. tablaMultiplicar(n)
function tablaMultiplicar(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
  }
}
tablaMultiplicar(4);

// 18. contarOcurrencias(arr, valor)
function contarOcurrencias(arr, valor) {
  let cuenta = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valor) cuenta++; // === compara valor Y tipo (estricto)
  }
  return cuenta;
}
console.log(contarOcurrencias([1, 2, 3, 2, 2, 4], 2)); // 3

// 19. minMax(arr)
function minMax(arr) {
  let min = arr[0]; // asumimos que el primero es mín y máx
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return { min: min, max: max }; // devuelve un OBJETO con dos propiedades
}
let resultado2 = minMax([3, 1, 9, 2, 7]);
console.log("Mínimo:", resultado2.min); // 1
console.log("Máximo:", resultado2.max); // 9

// 20. esPalindromo(texto)
function esPalindromo(texto) {
  let invertido = invertirTexto(texto); // reutilizamos la función del ej15
  return texto === invertido;           // true si son iguales
}
console.log(esPalindromo("oso")); // true
console.log(esPalindromo("ana")); // true
console.log(esPalindromo("hola")); // false
