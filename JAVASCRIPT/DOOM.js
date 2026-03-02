//variable
let numero=document.getElementById("numero1")

let solucion=document.getElementById("solucion")

let run=document.getElementById("Run")

run.addEventListener("click", (e) => {
    solucion.innerHTML=numero.value *2
    
})

solucion.innerHTML="Hola"

console.log("Estoy en javascript:"+numero.value)