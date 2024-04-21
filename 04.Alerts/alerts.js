/* 
    alert()
    Alerta
    Para informarle al usuario algo.
*/
// window.alert('Hola!');
// alert('Hola!');

/*
    confirm()
    Ventana de confirmación
    Una ventana donde el usuario puede aceptar o cancelar.
    Retorna verdadero o falso dependiendo de la respuesta del usuario.
*/
// const ingresar = () => {
//     const accesoPermitido = confirm('¿Eres mayor de edad?');
//     if(accesoPermitido){
//         alert('Bienvenido');
//         console.log('Bienvenido');
//     }else {
//         alert('No puede acceder al sitio');
//         console.log('No puede acceder al sitio');

//     }
// };

/*
    promp()
    Ventana con input
    Una ventana donde el usuario puede introducir un valor 
    Retorna una cadena de texto con la respuesta del usuario.
*/
 const saludar = () => {
    const nombre = prompt('Escribe tu nombre: ');
    if(nombre){
        if(nombre !== ''){
            console.log(`Hola ${nombre}`);
            alert(`Hola ${nombre}`);
        }
    }else{
        alert('Adios');
    }
    
 };