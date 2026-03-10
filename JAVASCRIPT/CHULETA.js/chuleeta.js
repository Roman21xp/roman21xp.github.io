/* ============================================
EJERCICIOS JAVASCRIPT - Lenguaje de Marcas
ASIR - Jeff
   ============================================ */


/* ==========================================
EJERCICIO 1 - "LA PRIMITIVA"
Genera 6 números aleatorios únicos del 1 al 49
   ========================================== */

let veces2 = 1;
let numeros2 = [];

function dameNumero(max) {
  let numero = Math.floor(Math.random() * max) + 1;
return numero;
}

while (veces2 <= 6) {
veces2++;
let variable = dameNumero(49);
let posicion = numeros2.indexOf(variable);

if (posicion > -1) {
    // Si el número ya existe en el array, no hacemos nada
} else {
    numeros2.push(variable); // Si no existe, lo añadimos
}
}

console.log(numeros2);


/* ==========================================
EJERCICIO 2 - "CIFRADO CÉSAR"
Desplaza cada letra de una frase X posiciones
en el abecedario
   ========================================== */

// Array) Método cesar
let abece = ["a","b","c","d","e","f","g","h","i",
            "j","k","l","m","n","o","p","q","r","s",
            "t","u","v","w","x","y","z"];

let frase = "julio cesar";
let v1 = 3; // número de posiciones a desplazar

let fraseCifrada = "";

for (let i = 0; i < frase.length; i++) {
  let p = abece.indexOf(frase[i]); // posición de la letra en el abecedario
  let nuevaLetra = abece[p + v1];  // letra desplazada V1 posiciones (+1 en apuntes, aquí v1)
fraseCifrada = fraseCifrada + nuevaLetra;
}

console.log(frase + " es: " + fraseCifrada);


/* ==========================================
EJERCICIO 3 - MULTIPLICAR Y SUMAR
Multiplica dos números de la interfaz y suma
los dos números por terminal
(Requiere HTML con inputs id="numero1", id="numero2"
    un botón id="num" y div id="solucion")
   ========================================== */

let numero  = document.getElementById("numero1");  // id del div en el HTML
let numero2 = document.getElementById("numero2");  // Botón que hay en el HTML
let num     = document.getElementById("num");

// --- Operación MULTIPLICAR ---
num.addEventListener("click", (e) => {  // ← obtiene el valor dentro de la caja

  let solucionm = numero.value * numero2.value;
  // Toma el resultado de la multiplicación y lo escribe dentro del elemento (solucion) del HTML
solucion.innerHTML = solucionm;

  // Muestra el mensaje por la consola
console.log("El resultado de la multiplicación es: " + solucionm);

  // Transforma el texto en número para que se pueda hacer la operación matemática
let sol1 = parseInt(numero.value) + parseInt(numero2.value);
console.log("El resultado de la suma es: " + sol1);

solucion.innerHTML = sol1;
});

// --- Operación SUMAR (segundo listener) ---
num.addEventListener("click", (e) => {

  // Creamos una variable vacía donde metemos al final el resultado
let cadenaTotal = "";

  // Contamos i desde 0 al número de la caja de (numero2.value). Si ejecuta el bucle for,
  // al final se le suma 1 al contador
for (let i = 0; i < numero2.value; i++) {
    cadenaTotal = cadenaTotal + numero.value + " <BR>" // Separador HTML
    console.log("i vale: " + i + " : " + numero.value);
}

solucion.innerHTML = cadenaTotal;
  // Cuando termina el bucle esta línea toma toda la acumulación
  // de texto que guardamos en (cadenaTotal) y lo muestra en el elemento
  // (solucion) del HTML
});


/* ==========================================
EJERCICIO 4 - GENERAR CONTRASEÑA
Genera una contraseña aleatoria con mayúsculas,
minúsculas, números y caracteres especiales
   ========================================== */

// Arrays / cadenas de texto
let abecedario       = "abcdefghijklmnopqrstuvwxyz";
let abecedarioMayus  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeros          = "0123456789";
let caractEspecial   = "*!#$%^&*()_+|~-=`[]{}:;<>?,./";

// Variable donde se guardará la contraseña
let password = "";

// Función para obtener un número aleatorio entre min y max
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Decide cuántos caracteres va a generar (entre min y max).
// En un bucle:
//   - Saca una posición aleatoria dentro del texto recibido (array)
//   - Añade el carácter aleatorio a la variable caracter.
// Devuelve esos caracteres generados.
function getCaracteresEspeciales(min, max, array) {
let veces    = numeroAleatorio(min, max);
let i        = 0;
let posicion = 0;
let caracter = "";

while (i < veces) {
    posicion  = numeroAleatorio(0, array.length - 1);
    caracter += array[posicion];
    i++;
}

return caracter;
}

// --- Uso de la función (ejemplo de llamada) ---
// password += getCaracteresEspeciales(1, 3, abecedario);
// password += getCaracteresEspeciales(1, 2, abecedarioMayus);
// password += getCaracteresEspeciales(1, 2, numeros);
// password += getCaracteresEspeciales(1, 2, caractEspecial);
// console.log(password);