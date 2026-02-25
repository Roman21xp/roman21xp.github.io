let caracteres = "abcdefghijklmnopqrstuvwxyz";
let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let caracteresNumeros = "0123456789";
let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";

function numeroAleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num=numeroAleatorio(1, 195)
console.log(num)
console.log(caracteresEspeciales[4])

password = password.split('').sort(() => Math.random() - 0.5).join('');