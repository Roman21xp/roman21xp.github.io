//Definimos los caracteres que vamos a usar
let caracteres = "abcdefghijklmnopqrstuvwxyz";
let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let caracteresNumeros = "0123456789";
let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";
let password=""
// devuelve un valor aleatorio entre min y max
function numeroAleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}


function dameunNuemro(){
    let cuantoscaracteres=numeroAleatorio(1,2)
}

//generar contraseña
//numeroaleatorio
let num=numeroAleatorio(1, 195)
//letra especial aleatoria
console.log(caracteresEspeciales[4])

let letraEspecial=carateresEspeciales[numeroAleatorio(0,30)]

dameLetras

let resto=50-password.length
dameLetras(1,resto,cartacteres)

//let password=num+letraEspecial
//console.log(password)

//desordenar el array
password = password.split('').sort(() => Math.random() - 0.5).join('')
console.log(password)
