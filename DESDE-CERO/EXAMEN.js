// Apuntamos al botón y le añadimos el oyente de eventos
document.getElementById("btnGenerar").addEventListener("click", () => {
    
    // 1. Capturamos el valor del input y lo convertimos a número entero
    let numero = parseInt(document.getElementById("inputPiramide").value);
    
    // 2. Variable acumuladora donde guardaremos el texto HTML
    let piramideHTML = "";

    // 3. Filtro de seguridad (Portero VIP): Si no es un número o es menor que 1, cortamos la ejecución
    if (isNaN(numero) || numero < 1) {
        document.getElementById("resultadoPiramide").innerHTML = "Pon un número válido, genio.";
        return; 
    }

    // 4. EL BUCLE INVERSO: Empezamos en 'numero' y restamos (i--) hasta llegar a 1
    for (let i = numero; i >= 1; i--) {
        // String(numero) convierte el número a texto.
        // .repeat(i) repite ese texto 'i' veces.
        // "<br>" es el salto de línea HTML.
        piramideHTML += String(numero).repeat(i) + "<br>";
        
        /* NOTA DE NATE: Si tu profesor quiere que los números vayan bajando
        (ej: 55555, luego 4444, luego 333...), simplemente cambia 
        String(numero) por String(i). 
        */
    }

    // 5. Inyectamos la pirámide completa de un solo golpe en el DOM
    document.getElementById("resultadoPiramide").innerHTML = piramideHTML;
});