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
    const descripcion = await generarDescripcion(clase, estadisticas);
    console.log("Descripción:", descripcion);
    
    // muestra en la pantalla mientras carga

    resultado.innerHTML = `<p>Generando personaje ${clase}...></p>`;

    console.log("Clase:", clase);
    console.log("Estadisticas:", estadisticas);
});

// --- LLAMADA A LA API DE TEXTO ---
const generarDescripcion = async (clase, estadisticas) => {

    const prompt = `En un párrafo dame el nombre y descripción física de un 
    personaje ${clase} para Dungeons and Dragons con estas estadísticas: 
    ${estadisticas}`;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "z-ai/glm-4.5-air:free",
                messages: [
                    { role: "user", content: prompt }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;

    } catch (error) {
        console.error("Error generando descripción:", error);
        return null;
    }
};