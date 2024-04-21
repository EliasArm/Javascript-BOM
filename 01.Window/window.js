// Conocer el tamaño del ancho del navegador
console.log(`La ventana de tu navegador mide ${window.innerWidth}px de ancho`);

// Conocer el tamaño del largo del navegador
console.log(`La ventana de tu navegador mide ${window.innerHeight}px de largo`);

/*
    window.open
    Nos permite abrir ventanas del navegador
    Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana.

    - 1er parametro: Dirección de la nueva ventana
    - 2do parametro: Nombre de la ventana
    - 3er parametro: Cadena de texto de opciones

    Nos devuelve un objeto para acceder a esa ventana
*/

const abrirGoogle = () => {
    window.open('http://google.com', 'Mi nueva ventana', 'width=500, height=500');
};

let ventana;
const abrirVentana = () => {
    ventana = window.open('','Mi ventana', 'width=300, height=300');
    ventana.document.write('<h1>Hola desde la nueva ventana!</h1>')
}

const cerrarVentana = () => {
    ventana.close();
}


/*
    Screen Object
    Representa la pantalla del usuario.
*/
console.log(' --- Screen --- ');
console.log(`Ancho de la pantalla: ${window.screen.width}`);
console.log(`Alto de la pantalla: ${window.screen.height}`);

console.log(`Ancho de pantalla sin barra de Windows: ${window.screen.availWidth}`);
console.log(`Alto de pantalla sin barra de Windows: ${window.screen.availHeight}`);