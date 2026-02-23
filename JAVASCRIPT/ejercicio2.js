function dameNumero(max){
let numero=Math.floor(Math.random() * max)
console.log(numero)
}

let veces=1
let numeros=[]
while (veces<=6) {
    veces++
    let variable=dameNumero(49)
    numeros.push(variable)
}