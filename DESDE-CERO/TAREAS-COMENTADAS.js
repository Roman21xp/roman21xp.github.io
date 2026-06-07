/* 01 - Crea y muestra tareas en consola usando listas */

// Creamos un array (lista) simple de strings (texto) con tareas iniciales.
let tareas=["Corregir flex!", "Corregir javascript 1","Corregir javascript 2"]

/* pide una tarea y la añade al final de las que tengo pendientes */
function agregarTarea(){
    // prompt() abre una ventana emergente en el navegador para que el usuario escriba.
    let tarea=prompt("dame una tarea:") 
    // Imprimimos lo que el usuario escribió para comprobarlo.
    console.log(tarea)
    // push() coge ese texto y lo mete al FINAL de nuestro array 'tareas'.
    tareas.push(tarea)
}

/* muestra las tareas pendientes */
function mostrarTareas(){
    console.log("Tareas pendientes: ")
    console.log("===================")
    // forEach es un bucle que recorre el array. Por cada 'element' (tarea) hace lo de dentro.
    tareas.forEach(element => {
        // Imprime el texto de la tarea con unos corchetes feos delante.
        console.log("[]" +element)
    });
    // Imprime el array completo de golpe para ver su estructura cruda.
    console.log(tareas)
}

// Llamamos a las funciones para que el código se ejecute al cargar el archivo.
agregarTarea()
mostrarTareas()

// -------------------------------------------------------------------------------------------------------------------

/* 02 - Crea y muestra tareas en consola usando array */

// Ahora el array no es de texto, es de OBJETOS. Cada objeto tiene múltiples propiedades (id, descripcion...).
let tareas=[
    {id:1, descripcion: "Estudiar arrays: forEach/map", fechaLimite: "2026-02-23", prioridad: "alta", completada: false},
    {id:2, descripcion: "5 ejercicios con objetos JS", fechaLimite: "2026-02-24", prioridad: "alta", completada: false},
    {id:3, descripcion: "DOM: Manipular elementos", fechaLimite: "2026-02-25", prioridad: "media", completada: false},
    {id:4, descripcion: "DOM: Eventos", fechaLimite: "2026-02-26", prioridad: "baja", completada: false}
]

/* Devuelve el id para nueva tarea buscando el número más alto y sumando 1 */
function devuelveNuevoId(){
    let id=1 // Empezamos asumiendo que el ID será 1
    // Recorremos todas las tareas...
    tareas.forEach(element => {
        // Si encontramos un ID mayor que el que tenemos guardado...
        if(element.id>id){
            id=element.id // ...actualizamos nuestro récord al nuevo número mayor.
        }
    });
    return id+1 // Al récord máximo le sumamos 1 para que sea un ID único nuevo.
}

/* pide una tarea y la añade al final */
function agregarTarea(){
    // Pedimos los 3 datos por separado al usuario.
    let descripcion=prompt("dame una tarea:") 
    let fechaLimite=prompt("dame una fecha(yyyy-mm-dd):") 
    let prioridad=prompt("dame una prioridad (alta | media | baja ):") 
    // Calculamos el ID que le toca a esta nueva tarea usando la función anterior.
    let id=devuelveNuevoId()
    
    // Metemos un OBJETO NUEVO entero al array con los datos recogidos.
    tareas.push({
        id: id,
        descripcion: descripcion,
        fechaLimite: fechaLimite,
        prioridad: prioridad,
        completada: false // Por defecto entra como no completada.
    });
}

/* muestra las tareas */
function mostrarTareas(){
    console.log("Tareas pendientes: ")
    console.log("===================")
    tareas.forEach(element => {
        // CUIDADO: Si imprimes un objeto con un string ("[]" + element), JS lo convierte a "[object Object]". Esto es un fallo de tu profesor.
        console.log("[]" +element)
    });
    console.log(tareas)
}

agregarTarea()
mostrarTareas()

// -------------------------------------------------------------------------------------------------------------------

/* 03 - Crea y muestra tareas en consola usando objetos (con métodos propios) */

let tareas=[];    

// Mismo cálculo de ID que antes.
function devuelveNuevoId(){
    let id=1
    tareas.forEach(element => {
        if(element.id>id){ id=element.id }
    });
    return id+1
}

/* Esta es una "Factory Function". Construye y devuelve un objeto tarea con MÉTODOS incrustados. */
function crearTarea(id, descripcion, fechaLimite, prioridad) {
    // Creamos la base del objeto con la sintaxis corta (id es igual a id: id)
    const tarea = {
        id,
        descripcion,
        completada: false,
        fechaLimite,
        prioridad
    };

    // Le inyectamos una función (método) AL PROPIO OBJETO para que se sepa cambiar a sí mismo.
    tarea.toggleCompletada = () => {
        // Si era true pasa a false, si era false pasa a true.
        tarea.completada = !tarea.completada;
        return tarea;
    };

    // Le inyectamos otra función para que sepa imprimirse bonito.
    tarea.mostrarEnConsola = () => {
        // Operador ternario: ¿está completada? Entonces usa '[X]', si no usa '[ ]'
        const estado = tarea.completada ? '[X]' : '[ ]';
        console.log(`- (${tarea.id}) ${estado} :  ${tarea.descripcion} : ${tarea.fechaLimite}  (${tarea.prioridad}) `);
    };
    
    // Devolvemos el objeto ya armado con sus datos y sus funciones.
    return tarea;
}

function agregarTarea(){
    let descripcion=prompt("dame una tarea:") 
    let fechaLimite=prompt("dame una fecha(yyyy-mm-dd):") 
    let prioridad=prompt("dame una prioridad (alta | media | baja ):") 
    let id=devuelveNuevoId()
    // Llamamos a la fábrica 'crearTarea' y metemos el resultado directamente en el array.
    tareas.push(crearTarea(id, descripcion, fechaLimite, prioridad));
}

function mostrarTareas(){
    console.log("Tareas pendientes: ")
    console.log("===================")
    tareas.forEach(element => {
        // Como el objeto ahora sabe imprimirse a sí mismo, solo llamamos a su método.
        element.mostrarEnConsola()
    });
}

/* cambia el estado de una tarea buscando por ID */
function cambiaEstadoTarea(id){ 
    // find() busca el PRIMER elemento que cumpla la condición (que su id coincida).
    let tarea=tareas.find(element => element.id==id )   
    // Ejecuta el método que creamos en la Factory Function.
    tarea.toggleCompletada()
    console.log(tarea);
}

// Llenamos el array usando nuestra fábrica.
tareas=[
    crearTarea(1, "Estudiar arrays: forEach/map", "2026-02-23","alta"),
    crearTarea(2, "5 ejercicios con objetos JS", "2026-02-24", "alta"),
    crearTarea(3, "DOM: Manipular elementos", "2026-02-25", "media"),
    crearTarea(4, "DOM: Eventos", "2026-02-26", "baja")
]

mostrarTareas()    
cambiaEstadoTarea(1) // Marcamos la 1 como completada
mostrarTareas()
cambiaEstadoTarea(1) // La desmarcamos
mostrarTareas()

// -------------------------------------------------------------------------------------------------------------------

/* 04 - Crea y muestra tareas en pantalla usando objetos (y strings HTML) */

let tareas=[];    
function devuelveNuevoId(){ /* ... igual que antes ... */ }

function crearTarea(id, descripcion, fechaLimite, prioridad) {
    const tarea = { id, descripcion, completada: false, fechaLimite, prioridad };
    tarea.toggleCompletada = () => { tarea.completada = !tarea.completada; return tarea; };
    tarea.mostrarEnConsola = () => { /* ... */ };

    // NUEVO MÉTODO: Devuelve un simple String que simula ser HTML.
    tarea.mostrarEnHTML = () => {
        const estado = tarea.completada ? '[X]' : '[ ]';
        // Genera la cadena de texto con los datos interpolados.
        let tareaHTML=`- (${tarea.id}) ${estado} :  ${tarea.descripcion} : ${tarea.fechaLimite}  (${tarea.prioridad}) `
        return tareaHTML
    };
    return tarea;
}

function agregarTarea(){ /* ... igual que antes ... */ }
function mostrarTareas(){ /* ... igual que antes ... */ }
function cambiaEstadoTarea(id){ /* ... igual que antes ... */ }

/* devuelve una cadena con todas las tareas fusionadas para el HTML */
function mostrarTareasHTML(){
    let todasLasTareas="" // String vacío para ir acumulando
    tareas.forEach(element => {
        // Concatenamos cada tarea y le sumamos un salto de línea HTML (<br/>)
        todasLasTareas=todasLasTareas+element.mostrarEnHTML()+"<br/>"
    });
    // Devolvemos el mazacote de texto HTML.
    return todasLasTareas 
}

tareas=[ /* ... creación de las 4 tareas ... */ ]

// DOM: Seleccionamos el div del HTML que tiene el id="Tareas"
let divTareas=document.getElementById("Tareas")

// Escribimos texto plano reemplazando lo que hubiera.
divTareas.innerHTML="Lo cambio desde javascript"

let pruebas=["Corregir flex!", "Corregir javascript 1","Corregir javascript 2"]
// Si inyectas un array directamente en innerHTML, JS pondrá comas entre ellos.
divTareas.innerHTML=pruebas

// -------------------------------------------------------------------------------------------------------------------

/* 04b - Crea y muestra tareas en pantalla usando objetos y createElement */

let tareas=[];    
// ... (mismas funciones de soporte que antes) ...

/* devuelve un NODO HTML (no un string) con la lista de tareas */
function mostrarTareasHTML(){
    console.log("Tareas pendientes HTML: ")
    // Creamos un elemento <ul> (lista desordenada) real en memoria.
    let miLista= document.createElement("ul");
    
    tareas.forEach(element => {
        // Por cada tarea, creamos un elemento <li> en memoria.
        let miItem= document.createElement("li");        
        // Le metemos el texto generado por nuestro objeto al interior del <li>
        miItem.innerHTML=element.mostrarEnHTML()
        // Enganchamos el <li> como hijo dentro del <ul>
        miLista.appendChild(miItem)
    });
    console.log(miLista)
    // Devolvemos el nodo DOM completo y armado.
    return miLista
}

tareas=[ /* ... creación de las 4 tareas ... */ ]

let divTareas=document.getElementById("Tareas")

mostrarTareas()    
cambiaEstadoTarea(1)
mostrarTareas()
cambiaEstadoTarea(1)
mostrarTareas()

// append() agarra el nodo DOM (el <ul> que devuelve la función) y lo pega en el HTML visual.
divTareas.append(mostrarTareasHTML())

// -------------------------------------------------------------------------------------------------------------------

/* 05 - Estilos y manipulación de tareas conectadas a un Formulario */

let tareas=[];    
function devuelveNuevoId(){ /* ... */ }
function crearTarea(descripcion, fechaLimite, prioridad) { /* ... misma fábrica ...*/ }

// DOM: Variables globales apuntando al HTML
let divTareas=document.getElementById("Tareas")
// Seleccionamos el formulario completo por su ID.
const form = document.querySelector("#formTarea");

// Escuchamos el evento 'submit' (cuando le dan a Enviar o pulsan Enter en el form).
form.addEventListener("submit", (e) => {
    // CRÍTICO: Previene que la página se recargue (comportamiento por defecto del form).
    e.preventDefault(); 

    // Extraemos los valores de los inputs buscando por su atributo 'name' o 'id' dentro de form.elements
    // trim() limpia los espacios en blanco accidentales al principio o final.
    const descripcion = form.elements.descripcion.value.trim();
    const fechaLimite = form.elements.fechaLimite.value; 
    const prioridad = form.elements.prioridad.value;
    
    // Llamamos a nuestra fábrica con los datos limpios.
    const tarea = crearTarea(descripcion, fechaLimite, prioridad);
    // Añadimos al array
    tareas.push(tarea)
    
    // Limpiamos el contenedor viejo vaciando su HTML
    divTareas.innerHTML = ""; 
    // Repintamos todo el array usando la función que construye los <ul> y <li>
    divTareas.append(mostrarTareasHTML())

    // Resetea los campos del formulario para dejarlos en blanco.
    form.reset();
});

// Precargamos datos falsos
tareas.push(crearTarea("Estudiar arrays: forEach/map", "2026-02-23","alta"));
// ... (las otras 3 tareas) ...

// Limpiamos y pintamos la carga inicial
divTareas.innerHTML = ""; 
divTareas.append(mostrarTareasHTML())

// -------------------------------------------------------------------------------------------------------------------

/* 06 - Estilos, manipulación, borrado y cambios de estado (El paquete completo) */

let tareas=[];    
function devuelveNuevoId(){ /* ... */ }

function crearTarea(descripcion, fechaLimite, prioridad) {
    let id=devuelveNuevoId()  
    const tarea = { id, descripcion, completada: false, fechaLimite, prioridad };
    tarea.toggleCompletada = () => { tarea.completada = !tarea.completada; return tarea; };
    
    // NUEVO: Ahora el string que genera incluye dos BOTONES de HTML con data-attributes.
    tarea.mostrarEnHTML = () => {
        const estado = tarea.completada ? '[X]' : '[ ]';
        // Fíjate en los data-id="${tarea.id}" y data-action="...". Esto guarda info invisible en el botón.
        let tareaHTML=`- (${tarea.id}) ${estado} :  ${tarea.descripcion} : ${tarea.fechaLimite}  (${tarea.prioridad}) 
        <input type="button" data-id="${tarea.id}" class="btn-borrar" data-action="borrar" value="Borrar"> 
        <input type="button" data-id="${tarea.id}" class="btn-toggle" data-action="mark" value="Cambia Estado">`
        return tareaHTML
    };
    return tarea;
}

function mostrarTareasHTML(){ /* ... crea <ul> y <li> ... */ }

/* Borra la tarea del array y repinta */
function borrarTareaPorId(id) {
  // filter() devuelve un NUEVO array con todo lo que cumpla la condición. 
  // Nos quedamos con todas las que NO tengan el id que queremos borrar.
    tareas = tareas.filter(t => t.id !== id);
    renderTareas();
}

/* Cambia el estado del array y repinta */
function toggleTareaPorId(id) {
    const tarea = tareas.find(t => t.id === id);
  if (!tarea) return; // Salida de seguridad por si no existe
    tarea.toggleCompletada();
    renderTareas();
}

/* Función centralizada para repintar la pantalla */
function renderTareas() {
    console.log("Repinto")
    divTareas.innerHTML = ""; 
    divTareas.append(mostrarTareasHTML())
}

let divTareas=document.getElementById("Tareas")
const form = document.querySelector("#formTarea");
form.addEventListener("submit", (e) => { /* ... lógica de añadir tarea del archivo anterior ... */ });

// DELEGACIÓN DE EVENTOS: Le ponemos el oyente al PADRE (divTareas), no a cada botón.
divTareas.addEventListener('click', (e) => {
    // e.target es EXACTAMENTE el píxel/botón/texto donde hiciste clic.
    let element = e.target;   

    // Leemos los atributos 'data-' que inyectamos en la Factory Function.
    // Lo pasamos a Number() porque el HTML siempre devuelve strings.
    const id = Number(element.dataset.id);
    const action = element.dataset.action;

    // Enrutador básico: decidimos qué función llamar según el action del botón.
    if (action === 'borrar') {
        borrarTareaPorId(id);
    } else if (action === 'mark') {
        toggleTareaPorId(id);
    }
});

// Carga inicial
tareas.push(crearTarea("Estudiar arrays", "2026-02-23","alta"));
// ...
renderTareas()

// -------------------------------------------------------------------------------------------------------------------

/* 07- cambios de estilos manipulando el DOM */

const btnTema = document.getElementById("btn-tema");
const btnLike = document.getElementById("btn-like");
const post = document.getElementById("post-1");

// 1. toggle() es el interruptor perfecto para CSS.
btnTema.addEventListener("click", () => {
    // Si el body NO tiene la clase "dark-mode", se la pone. Si la tiene, se la quita.
    document.body.classList.toggle("dark-mode");
});

// 2. Manipulación manual de clases con add y remove
btnLike.addEventListener("click", () => {
    // contains() devuelve true si la clase existe en el elemento.
    const yaTeniaLike = btnLike.classList.contains("corazon-rojo");
    
    if (yaTeniaLike) {
        // Se la quitamos para des-hacer el like
        btnLike.classList.remove("corazon-rojo");
        console.log("Like quitado 💔");
    } else {
        // Se la ponemos para pintar de rojo
        btnLike.classList.add("corazon-rojo");
        
        // 3. dataset: Leer datos ocultos del HTML
        // Si el HTML era <div id="post-1" data-id="123" data-autor="Nate">...
        console.log(`Diste like al post ${post.dataset.id} de ${post.dataset.autor}`);
    }
});

// -------------------------------------------------------------------------------------------------------------------

// Apuntamos a los elementos del DOM
const formulario = document.getElementById("form-comentario");
const input = document.getElementById("input-texto");
const listaComentarios = document.getElementById("lista-comentarios");
const boton = document.getElementById("botonAdd")

// Escuchamos el CLICK en el botón (aunque al estar en un form, escuchar 'submit' en el form es mejor práctica)
boton.addEventListener("click", (e) => {
    // Evitamos el envío del form que recargaría la página
    e.preventDefault(); 
    
    // Leemos el texto del input
    const texto = input.value;
    
    // Si está vacío (no han escrito nada), el 'return' corta la función y no sigue leyendo hacia abajo.
    if (texto === "") return; 

    // Crea un <li> vacío en la memoria
    const nuevoLi = document.createElement("li");
    // Le mete el texto que sacamos del input de forma segura
    nuevoLi.textContent = texto;
    // Lo engancha al final de la lista <ul> que ya existe en el HTML
    listaComentarios.append(nuevoLi);
    
    // Vacía el input para el próximo comentario
    input.value = "";
    console.log("Comentario enviado sin recargar ");
})

// ------------------------------------------------------------------------------------------------------------------------

// Seleccionamos el contenedor padre (ej: un <ul>)
const feed = document.getElementById("feed");

// Delegación de eventos: El padre escucha por todos los hijos presentes y futuros.
feed.addEventListener("click", (e) => {
    
    // Si justo el elemento clickado (el target) tiene la clase 'btn-borrar'...
    if (e.target.classList.contains("btn-borrar")) {
        
        // e.target.parentElement sube UN nivel en el árbol del DOM (va al padre directo).
        // Si el botón está metido dentro de un <li>, el padre es ese <li>.
        const tweet = e.target.parentElement; 
        
        // remove() autodestruye el elemento HTML (y todos sus hijos) borrándolo de la pantalla al instante.
        tweet.remove();
        console.log("Tweet eliminado mediante delegación 🗑️");
    }
});

// ----------------------------------------------------------------------------------------------------------------------

/* 08 - Estilos y manipulación de tareas (Versión Definitiva) */

let tareas=[];    

function devuelveNuevoId(){ /* ... Ya te la sabes de memoria ... */ }

function crearTarea(descripcion, fechaLimite, prioridad) {
    let id=devuelveNuevoId()  
    const tarea = { id, descripcion, completada: false, fechaLimite, prioridad };

    tarea.toggleCompletada = () => {
        tarea.completada = !tarea.completada;
        return tarea;
    };
    
    tarea.mostrarEnConsola = () => { /* ... */ };

    // LA MAGIA ESTÁ AQUÍ ADENTRO
    tarea.mostrarEnHTML = () => {
        // 1. EL CHECKBOX: Si la tarea es true, la variable 'estado' guarda la palabra "checked" (atributo HTML para marcar casillas). Si es false, no guarda nada.
        const estado = tarea.completada ? 'checked' : '';
        
        // 2. LA CLASE CSS: Si está completada, inyecta la clase CSS 'completed' (que en tu CSS seguramente tenga un text-decoration: line-through). Si no, inyecta nada.
        const estiloCompelatada = tarea.completada ? 'completed' : '';
        
        // 3. ESTRUCTURA PARA FLEXBOX: Fíjate cómo el profesor ha metido todo dentro de un <span class="info">. 
        // Esto se hace para que, al aplicarle Flexbox al <li> padre, este span actúe como un solo bloque a la izquierda, y el botón "Borrar" quede a la derecha.
        let tareaHTML = `
        <span class="info">
            <input type="checkbox" class="chk-completada" data-id="${tarea.id}" data-action="mark" ${estado}> 
            <span class="descripcion ${estiloCompelatada}">${tarea.descripcion}</span> | 
            <span class="fecha ${estiloCompelatada}">${tarea.fechaLimite}</span>  | 
            <span class="prioridad ${estiloCompelatada}">${tarea.prioridad}</span>
        </span>` +
        `<input type="button" data-id="${tarea.id}" class="btn-borrar" data-action="borrar" value="Borrar">`;
        
        return tareaHTML;
    };
        
    return tarea;
}

// ... Funciones de soporte (agregarTarea, mostrarTareas, cambiaEstadoTarea) iguales ...

function mostrarTareasHTML(){ /* ... Genera el <ul> y los <li> iterando ... */ }

function borrarTareaPorId(id) {
    tareas = tareas.filter(t => t.id !== id);
    renderTareas();
}

function toggleTareaPorId(id) {
    const tarea = tareas.find(t => t.id === id);
    if (!tarea) return;
    tarea.toggleCompletada();
    // Repinta TODO el DOM cada vez que haces clic en un checkbox.
    renderTareas();
}

function renderTareas() {
    console.log("Repinto")
    divTareas.innerHTML = ""; 
    divTareas.append(mostrarTareasHTML())
}

let divTareas=document.getElementById("Tareas")
const form = document.querySelector("#formTarea");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const descripcion = form.elements.descripcion.value.trim();
    const fechaLimite = form.elements.fechaLimite.value; 
    const prioridad = form.elements.prioridad.value;
    const tarea = crearTarea(descripcion, fechaLimite, prioridad);

    tareas.push(tarea)
    renderTareas(); // Simplificado llamando a la función centralizada en lugar de duplicar código
    form.reset();
});

// DELEGACIÓN DE EVENTOS 
divTareas.addEventListener('click', (e) => {
    let element = e.target;   

    // Como ahora clickas checkboxes o botones, lees los dataset que inyectaste en mostrarEnHTML
    const id = Number(element.dataset.id);
    const action = element.dataset.action;

    if (action === 'borrar') {
        borrarTareaPorId(id);
    } else if (action === 'mark') {
        toggleTareaPorId(id);
    }
});

// Precarga de datos
tareas.push(crearTarea("Estudiar arrays", "2026-02-23","alta"));
// ...
renderTareas()