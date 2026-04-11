// ------- CONFIGURACION --------- 

const API_KEY = "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";

// ------- DATOS ----------------

const caracteristicas = ["Fuerza", "Destreza", "Constitución", "Inteligencia", "Sabiduría", "Carisma"];

const clases = ["Guerrero", "Mago", "Bardo", "Brujo", "Enano", "Elfo"];


// ------- ELEMEENTOS DEL DOM ---------

const btnGenerar = document.getElementById("btnGenerar");
const selectClase = document.getElementById("clase");
const resultado = document.getElementById("resultado");

// ------- FUNCINES BASE --------------

const aleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// ------- generar una linea de caracteristicas con su valor ------

const getAtributo = (nombre, min, max) => {
    const valor = aleatorio(min, max);
    return `${nombre}: ${valor}`;
};

// construye el string con todas las características del personaje
const generarEstadisticas = () => {
    let estadisticas = "";

    caracteristicas.forEach(caracteristica => {
        estadisticas += getAtributo(caracteristica, 10, 20);
        estadisticas += "\n";
    });

    return estadisticas;
};

// ------- EVENTO PRINCIPAL ----------------------------------

btnGenerar.addEventListener("click", async () => {
    // recorre la clase elegida o una aleatoria
    let clase = selectClase.value;
    if (clase === "") {
        clase = clases[aleatorio(0, clases.length - 1)];
    }

    // genera las estadisticas

    const estadisticas = generarEstadisticas();
    
    // muestra en la pantalla mientras carga

    resultado.innerHTML = `<p>Generando personaje ${clase}...></p>`;

    console.log("Clase:", clase);
    console.log("Estadisticas:", estadisticas);
});