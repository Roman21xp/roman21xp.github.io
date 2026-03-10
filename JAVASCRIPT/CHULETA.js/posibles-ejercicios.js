// ============================================================
//  EJERCICIOS TIPO EXAMEN — LM JavaScript
//  Jeff | Repaso pre-examen
// ============================================================


// ============================================================
//  TIPO 1 — FUNCIÓN + Math.random
//  "Crea una función que reciba el número de caras de un dado
//   y devuelva un número aleatorio entre 1 y ese número"
// ============================================================

// CAJA NEGRA:
// entrada: numeroCaras (ej: 6)
// proceso: genera número aleatorio entre 1 y numeroCaras
// salida:  número entero entre 1 y numeroCaras (INCLUIDO)

function tirarDado(numeroCaras) {
  // Math.random()          → decimal entre 0.0 y 0.999...
  // * numeroCaras          → decimal entre 0.0 y 5.999... (si caras=6)
  // Math.floor(...)        → entero entre 0 y 5
  // + 1                    → entero entre 1 y 6 ← SIN ESTO NUNCA LLEGAS AL MÁXIMO
  return Math.floor(Math.random() * numeroCaras) + 1;
}

console.log("--- TIPO 1: Dado ---");
console.log("Dado 6 caras:", tirarDado(6));
console.log("Dado 20 caras:", tirarDado(20));
console.log("Dado 100 caras:", tirarDado(100));

// VARIANTE que puede caer: rango personalizado (entre min y max)
function numeroAleatorio(min, max) {
  // (max - min + 1) → tamaño del rango
  // + min           → desplazamos al inicio correcto
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Número entre 10 y 20:", numeroAleatorio(10, 20));


// ============================================================
//  TIPO 2 — BUCLE + ARRAY + DUPLICADOS
//  "Genera 6 números únicos entre 1 y 49 (La Primitiva)"
// ============================================================

// CAJA NEGRA:
// entrada: nada (o max y cantidad como parámetros)
// proceso: genera números, comprueba duplicados, acumula en array
// salida:  array con 6 números únicos

function dameNumero(max) {
  return Math.floor(Math.random() * max) + 1; // entre 1 y max inclusive
}

let numeros = [];  // array vacío donde acumulamos los resultados

// El while controla que tengamos EXACTAMENTE 6 números válidos
while (numeros.length < 6) {
  let candidato = dameNumero(49);

  // indexOf devuelve -1 si el elemento NO está en el array
  // Solo añadimos si es un número nuevo (no duplicado)
  if (numeros.indexOf(candidato) === -1) {
    numeros.push(candidato); // push → añade al final del array
  }
  // Si ya existe → el bucle repite y genera otro candidato
}

console.log("\n--- TIPO 2: La Primitiva ---");
console.log("Números:", numeros);

// TRAMPA TÍPICA DE EXAMEN:
// ❌ Mal: while (veces <= 6) con veces++ fuera del if → puede añadir duplicados
// ✅ Bien: controlar con numeros.length < 6 → solo cuenta los válidos


// ============================================================
//  TIPO 3 — RECORRER STRING CARÁCTER A CARÁCTER
//  "Cifra una frase usando el cifrado César con desplazamiento X"
// ============================================================

// CAJA NEGRA:
// entrada: frase (string), paso (número de posiciones a desplazar)
// proceso: para cada letra, busca su posición en el abecedario,
//          la desplaza 'paso' posiciones, construye la frase nueva
// salida:  frase cifrada (string)

function cifrarCesar(frase, paso) {
  // Abecedario completo: minúsculas + mayúsculas
  let abece = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let fraseCifrada = ""; // ← acumulador: AQUÍ SE CONSTRUYE EL RESULTADO

  for (let i = 0; i < frase.length; i++) {
    let letra = frase[i];
    let posicion = abece.indexOf(letra); // busca la letra en el abecedario

    if (posicion === -1) {
      // El carácter no es una letra (espacio, coma, número...)
      // Lo dejamos tal cual
      fraseCifrada += letra;
    } else {
      // Calculamos la nueva posición con % para "dar la vuelta"
      // % (módulo) → si te pasas del final, empiezas desde el principio
      let nuevaPosicion = (posicion + paso) % abece.length;
      let nuevaLetra = abece[nuevaPosicion];

      fraseCifrada += nuevaLetra; // ← ESTO ES LO QUE EL ORIGINAL NO HACÍA
    }
  }

  return fraseCifrada;
}

console.log("\n--- TIPO 3: Cifrado César ---");
console.log("Original: HOLA");
console.log("Cifrado (paso 3):", cifrarCesar("HOLA", 3)); // KROD
console.log("Original: julio cesar");
console.log("Cifrado (paso 3):", cifrarCesar("julio cesar", 3));

// VARIANTE: contar vocales (mismo patrón de recorrer string)
function contarVocales(texto) {
  let vocales = "aeiouAEIOU";
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (vocales.indexOf(texto[i]) !== -1) { // si la letra ES una vocal
      contador++;
    }
  }

  return contador;
}

console.log("Vocales en 'Javascript es genial':", contarVocales("Javascript es genial"));


// ============================================================
//  TIPO 4 — FUNCIÓN CON REQUISITOS COMBINADOS
//  "Genera una contraseña de longitud N con:
//   mín 1 número, mín 1 especial, mín 1 mayúscula, resto minúsculas"
// ============================================================

// CAJA NEGRA PRINCIPAL: generarPassword(longitud)
//   llama a cajas negras auxiliares:
//     → numeroAleatorio(min, max)
//     → getChars(grupo, cantidad)

// Grupos de caracteres disponibles
let caracteres        = "abcdefghijklmnopqrstuvwxyz";
let caracteresMayus   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let caracteresNumeros = "0123456789";
let caracteresEspecia = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";

// Caja negra auxiliar 1: número aleatorio entre min y max (incluidos)
function numeroAleatorioPass(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Caja negra auxiliar 2: devuelve N caracteres aleatorios de un grupo
function getChars(grupo, cantidad) {
  let resultado = "";
  for (let i = 0; i < cantidad; i++) {
    let pos = numeroAleatorioPass(0, grupo.length - 1);
    resultado += grupo[pos]; // coge el carácter de esa posición aleatoria
  }
  return resultado;
}

// Caja negra principal: genera la contraseña completa
function generarPassword(longitud) {
  // Validar rango permitido
  if (longitud < 8)  longitud = 8;
  if (longitud > 50) longitud = 50;

  let password = "";

  // PASO 1: Añadir los caracteres OBLIGATORIOS (requisitos mínimos)
  password += getChars(caracteresNumeros, numeroAleatorioPass(1, 2)); // 1 o 2 números
  password += getChars(caracteresEspecia, numeroAleatorioPass(1, 2)); // 1 o 2 especiales
  password += getChars(caracteresMayus,   1);                          // mín 1 mayúscula

  // PASO 2: Rellenar el resto con minúsculas hasta llegar a longitud
  let restante = longitud - password.length;
  password += getChars(caracteres, restante);

  // PASO 3: Desordenar para que los obligatorios no estén siempre al principio
  // split('')  → "abc" se convierte en ["a","b","c"]
  // sort(...)  → ordena aleatoriamente (Math.random()-0.5 da positivo o negativo)
  // join('')   → ["a","b","c"] vuelve a ser "abc"
  password = password.split('').sort(() => Math.random() - 0.5).join('');

  return password;
}

console.log("\n--- TIPO 4: Generador de contraseñas ---");
console.log("Password (12):", generarPassword(12));
console.log("Password (20):", generarPassword(20));
console.log("Password (8):",  generarPassword(8));


// ============================================================
//  RESUMEN: PATRONES QUE DEBES RECONOCER EN EL EXAMEN
// ============================================================

// PATRÓN 1 — Número aleatorio:
//   Math.floor(Math.random() * max) + 1   → entre 1 y max
//   Math.floor(Math.random() * (max-min+1)) + min  → entre min y max

// PATRÓN 2 — Array sin duplicados:
//   if (array.indexOf(candidato) === -1) { array.push(candidato); }

// PATRÓN 3 — Recorrer string:
//   for (let i = 0; i < texto.length; i++) {
//     let letra = texto[i];
//     let pos   = abece.indexOf(letra);
//     resultado += abece[pos + desplazamiento]; // ← NO OLVIDES ESTO
//   }

// PATRÓN 4 — Función que llama a funciones:
//   function principal(param) {
//     let parte1 = auxiliar1(param);
//     let parte2 = auxiliar2(param);
//     return parte1 + parte2;
//   }