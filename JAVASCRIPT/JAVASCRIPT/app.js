let nombre= "Anakleto"
let curso="ASIR"
let edad= 18


//if (edad > 17) {
//    console.log("puede beber")
//    console.log("puede ir a la discoteca")
//    console.log("puede tomar cafe")
//}
//else {
//    if (edad > 12) {
//        console.log("puede beber")
//    }
//        console.log("No puede beber")
//}

//cadena=""

//cadena= edad>17 ? "puede beber." : "No puede beber.";
//console.log(cadena)

// let num=0
// for(num=1;num<10;num++){
//     console.log(num)
// }

// while (num<11) {
//     num++
//      console.log(num)
// }

/* Imprime un numero aleatorio */

// function dameNumero(max){
// let numero=Math.floor(Math.
//     random() * max)
// console.log(numero)
// }

// let veces=0
// while (veces<=10) {
//     dameNumero(10000001)
//     veces++
// }

/* Suma dos numero y devuelve el total */
function suma(a,b){
    let total= a+b
    return total
}

let misuma=suma(234, 456)
console.log ("la suma es: " + misuma)


function dameNumero(max){
let numero=Math.floor(Math.
    random() * max)
console.log(numero)
}

let veces=1
let numeros=[]
while (veces<=6) {
    veces++
    let variable=dameNumero(49)
    numeros.push(variable)
}

console.log(numeros)