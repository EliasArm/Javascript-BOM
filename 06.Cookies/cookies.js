const crearCookie = () => {
    // Crear una Cookie
    // document.cookie = 'nombre=Armando';   

    // Crear una Cookie con fecha de expiracion
    document.cookie = 'nombre=Armando; expires=22 Apr 2024 01:00:00 UTC';   
};

const iniciarSesion = () => {
    console.log('btnInicarSesion');
    const usuario = prompt('Escribe tu usuario: ');
    if(usuario){
        if(usuario !== ''){
            console.log(usuario)    
            document.cookie = `usuario=${usuario}; expires=22 Apr 2024 01:00:00 UTC`;
            alert('Sesión Iniciada');
        }
    }else{
        console.log('Sin usuario');
    }
};

console.log(document.cookie);

let usuario;

const cookies = document.cookie.split(';');
console.log(cookies);

cookies.forEach((cookie) => {
    const propiedad = cookie.split('=')[0].trim();
    // console.log(propiedad);
    if(propiedad === 'usuario'){
        console.log(cookie);
        usuario = cookie.split('=')[1];
        console.log(usuario);
    }
});

if(usuario){
    console.log(`Bienvenido ${usuario}`);
    alert(`Bienvenido ${usuario}`);
}else{
    console.log(`Por favor inicia sesión`);
    alert(`Por favor inicia sesión`);
}


const cerrarSesion = () => {
    document.cookie = 'usuario=; expires=01 Jan 2020 00:00:00 UTC';
    console.log('Adios!');
}
