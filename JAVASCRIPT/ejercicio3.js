let abece="abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUWVXYZ"
let frase="Lol"
let paso=3

let nuevaFrase=""
for (let i=0; i<frase.length; i++){
    console.log("voy a buscar la letra: " + frase[i])
    let posicion= abece.indexOf(frase[i])
    console.log("Esta en la posicion: " + posicion)
    //devuelve la nueva letra
    let nuevaPosicion= posicion + paso
    let nuevaLetra= abece[nuevaPosicion]
    console.log("Su nueva letra es: " + nuevaLetra)
}
