//variables
// Definimos los caracteres que vamos a usar
let caracteres = "abcdefghijklmnopqrstuvwxyz";
let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let caracteresNumeros = "0123456789";
let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";
let password=""

//funciones
// devuelve un valor aleatorio entre min y max
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
    devolver un carácter en cualquiera aleatorio de array 
*/
function getCaracteresEspeciales(min,max,array){
    let veces=numeroAleatorio(min,max)
    let i=0
    let posicion=0
    let caracter=""
    while (i<veces){
        posicion=numeroAleatorio(0, array.length-1)
        caracter+=array[posicion]
        i++
    }
    return caracter
}

//main
let cantidad=numeroAleatorio(8, 50)
let meFaltan=0

password +=getCaracteresEspeciales(1,2,caracteresNumeros)
password +=getCaracteresEspeciales(1,2,caracteresEspeciales)
password +=getCaracteresEspeciales(1,1,caracteresMayusculas)

meFaltan=cantidad-password.length
password +=getCaracteresEspeciales(meFaltan,meFaltan,caracteres)

console.log(password)

//desordenar array
password = password.split('').sort(() => Math.random() - 0.5).join('');
console.log(password)