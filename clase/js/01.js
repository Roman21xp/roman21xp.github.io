//variables
let id=document.getElementById("usuario")
let boton=document.getElementById("go")


//eventos
boton.addEventListener("click", (e) =>{
    console.log("Me han dado")
    if (id.value>0)
        obtenerUsuario(id.value);
})

const obtenerUsuario = async (id) => {
    try {
        // 1. Lanzar la petición (fetch devuelve una promesa)
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        // 2. Verificar si HTTP fue exitoso (status 200-299)
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // 3. Convertir el cuerpo de texto JSON a Objeto JS
        // .json() TAMBIÉN es una promesa (asíncrono)
        const data = await response.json();

        console.log(`Usuario: ${data.name} - Email: ${data.email}`);
        
    } catch (error) {
        console.error("Fallo de red o servidor:", error.message);
    }
};

//obtenerUsuario(9999); // Error 404
//obtenerUsuario(1); // Usuario 1
