
console.log(window.location);
// Retorna la URL de la página actual
console.log(' --- URL de la página actual ---');
console.log(window.location.href);
// ó
console.log(location.href);


// hostname - Retorna el host de página actual
console.log(' --- Host de la página actual --- ');
console.log(location.hostname);

// pathname - Retorna la ruta y archivo de la página actual
console.log(' --- Ruta y archivo de la página actual --- ');
console.log(location.pathname);

// protocol - Retorna el protocolo utilizado
console.log(' --- Protocolo utilizado --- ');
console.log(location.protocol);

// carga un nuevo documento
console.log(' ---  --- ');
const cargarDocumento = () => {
    location.assign('https://google.com.mx');
};

// Ir a la pagina anterior
const regresar = () => {
    history.back();
};

// Ir a la página siguiente
const adelante = () => {
    history.forward();
}