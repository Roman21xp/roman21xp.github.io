// Seleccionamos el div donde vamos a inyectar las cosas
const contenedorTienda = document.getElementById('tienda');

// 1. La Función Asíncrona (El Camarero)
async function obtenerProductos() {
    try {
        console.log("Llamando a la API...");
        
        // RETO 1: Llama a la URL 'https://fakestoreapi.com/products?limit=5' usando fetch
        // No te olvides de la palabra clave que hace que la función ESPERE
        const respuesta = /* TU CÓDIGO AQUÍ */;

        // RETO 2: Convierte esa 'respuesta' a formato JSON
        // Recuerda que esto también tarda un poco, así que también se ESPERA
        const productos = /* TU CÓDIGO AQUÍ */;

        console.log("¡Datos recibidos!", productos);
        
        // Pasamos los datos listos a la función que dibuja la pantalla
        renderizarTienda(productos);

    } catch (error) {
        // Si no hay internet o la URL está mal, el código salta aquí directamente
        console.error("Houston, tenemos un problema al traer los datos:", error);
        contenedorTienda.innerHTML = "<p>Error al cargar la tienda.</p>";
    }
}

// 2. La Función del DOM (Poniendo la mesa)
function renderizarTienda(arrayProductos) {
    let htmlAcumulado = "";
    
    // RETO 3: Recorre el arrayProductos. 
    // Por cada producto, crea un bloque de texto HTML usando template literals (``).
    arrayProductos.forEach(producto => {
        htmlAcumulado += `
            <div class="tarjeta">
                <img src="${/* TU CÓDIGO AQUÍ */}" alt="Imagen del producto">
                
                <h3>${/* TU CÓDIGO AQUÍ */}</h3>
                
                <p>${/* TU CÓDIGO AQUÍ */} €</p>
            </div>
        `;
    });

    // RETO 4: Inyecta todo el 'htmlAcumulado' dentro del 'contenedorTienda'
    // Pista: Usa una propiedad del DOM que empieza por inner...
    /* TU CÓDIGO AQUÍ */ = htmlAcumulado;
}

// 3. Ejecutamos la función maestra al cargar el archivo
obtenerProductos();