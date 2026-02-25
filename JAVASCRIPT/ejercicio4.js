//Definimos los caracteres que vamos a usar
let caracteres = "abcdefghijklmnopqrstuvwxyz";
let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let caracteresNumeros = "0123456789";
let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";

// devuelve un valor aleatorio entre min y max
function numeroAleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
//generar contraseña
//numeroaleatorio
let num=numeroAleatorio(1, 195)
//letra especial aleatoria
console.log(caracteresEspeciales[4])

let letraEspecial=carateresEspeciales[numeroAleatorio(0,30)]

let password=num+letraEspecial
console.log(password)
