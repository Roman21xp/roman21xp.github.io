/*
    Función que sdevuelve un número entre 1 y max
*/
function aleatorio(max)  {
    let num=Math.floor(Math.random() * max) + 1
    return num
}

// son números aleatorios entre 1 y 49
let numeros=[]
for (let i=0;numeros.length<6;i++){
    let num=aleatorio(49)
    console.log()
    if (numeros.indexOf(num)> -1 ) {
        console.log(" No lo guardo por que existe el número: "+ num)        
    }
    else
        numeros.push(num)
}
console.log(numeros)

// son 6 números distintos

