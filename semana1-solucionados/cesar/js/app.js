let abecedario="abcdefghijklmnñopqrstuvwxyzABCEDEFGHIJKLMNÑOPQRSTUVWXYZ012345789"
let paso=3
let frase="casa paco"
let fraseCifrada=""

for (let i=0;i<frase.length;i++){
    let letra=frase[i]
    //uso el truco de la resta de una divison para que si me salgo del array vuelva a empezar
    let posicion= (abecedario.indexOf(letra)%abecedario.length)
    let nuevaLetra=abecedario[posicion+paso]
    //si es un espacio no lo cifro
    if (letra!==" ")
        fraseCifrada+=nuevaLetra
    else 
        fraseCifrada+=" "
}
console.log(fraseCifrada)

