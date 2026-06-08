// PRIMITIVA

function damenumero(max) {
    return Math.floor(Math.random() * max) + 1;
}

let veces = 1;
let numeros = []
while (veces <= 6) {
    veces++
    let variable = damenumero(49)
    numeros.push(variable)
};

console.log(numeros);