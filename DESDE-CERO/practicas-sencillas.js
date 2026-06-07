/* //EL ACUMULADOR ---------------------------------------------------------------------------------------------------------------------------------------------------------------

function crearSorteoBasico(numero){
    return Math.floor(Math.random() * numero) + 1;
};

let veces = 1;
let num = []
while (veces <= 5) {
    let variable = crearSorteoBasico(49)
    num.push(variable) 
    veces++
};
console.log(num);

// VERIFICACION DE EDAD -------------------------------------------------------------------------------------------------------------------------------------------------------------

let edad = 18;

function soloMayores(edad) {
    if (edad >= 18) {
        console.log( "Puedes pasar")
    }
    else {
        console.log( "no puedes pasar")
    }
}; 

// EL PORTERO VIP ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

let vip = [7, 14, 21, 28, 35, 42];
let numero = 74;

if (vip.includes(numero)) {
    console.log( "El numero ya esta, fuera")
}
else {
    vip.push(numero);
    console.log( "El numero no esta, bienvenido")
}; 

// CIFRADO CESAR -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // 1. Creamos una variable con el alfabeto (repetido dos veces para facilitar el cálculo de la nueva posición)

function cifrarCesar(mensaje, clave) {
    let texto = mensaje.toUpperCase(); // 1. Convertimos el mensaje a mayúsculas para no tener problemas al buscar en el alfabeto
    let resultado = ""; // 2. Aquí guardaremos el resultado final
    for (let i = 0; i < texto.length; i++) { // 3. Recorremos el texto letra por letra
        let letraActual = texto[i];
        if (!alfabeto.includes(letraActual)) { // OJO: Si el carácter es un espacio u otro símbolo, lo dejamos tal cual
            resultado += letraActual;
            continue; // Salta a la siguiente vuelta del bucle
        }
        let posicionOriginal = alfabeto.indexOf(letraActual); // 4. Busca en qué número de posición está 'letraActual' dentro de 'alfabeto'
        let nuevaPosicion = (posicionOriginal + clave) % 52; // 5. Calcula la nueva posición sumando la clave
        if (nuevaPosicion >= 52) { // 6. Condicional para dar la vuelta si nos pasamos de la z (índice 51)
                nuevaPosicion -= 52; // ... ¡TU TURNO! (Réstale 52 a la nueva posición) ...
        }

        // 7. Busca qué letra hay en la 'nuevaPosicion' y súmala a 'resultado'
        resultado += alfabeto[nuevaPosicion];
    }

    return resultado;
}

// PRUEBA DE FUEGO:
console.log(cifrarCesar("JeReMy", 43209767677367673)); // Debería imprimir "lo que salga" 

// CONTRASEÑA SEGURA -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let caracteres = "abcdefghijklmnñopqrstuvwxyz" //Defino el abecesdario en minusculas
let caracteresMayuscula = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" //Defino el abecedario en mayusculas
let caraacteresNumericos = "0123456789" // Defino la serie de numeros
let caracteresEspeciales = "!@#$%^&*()_+{}[]|:;'<>,.?/~`" // Defino los caracteres especiales para que la contraseña los tenga y sea mas segura

// Creo la funcion numero aleatorio para que minimo y uno maximo de caracteres

function numAleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Defino los valores de la variabole password

let password = ""

// Mediante la funcion damePassword se recorrera todas las variables que he definido anteriormente

function damePassword(min, max, array){
    let cuantosCaracteres = numAleatorio(min, max)
    for (let i = 0; i < cuantosCaracteres; i++){
        let posicion = numAleatorio(0, array.length - 1)
        password += array[posicion]
    }
}

//Defino nuevas variables donde tengan las primeras variables definidas con todos los caracteres, letras y numeros

damePassword(1,2, caracteresNumericos)
damePassword(1,2, caracteresEspeciales)
damePassword(1,2, caracteresMayuscula)

// Por ultimo se define la ultima variable en donde se le diga que la contraseña sera de una cierta cantidad de digitos.

let resto = 50 - password.length
damePassword(1,resto,caracteres)

password = password.split("").sort(() => Math.random() - 0.5).join("")
console.log(password)*/


