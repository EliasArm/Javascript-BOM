/**
 *  window.setTimeout()
 *  Nos permite ejecutar una fnción despues de cierto tiempo.
*/

const saludoTiempo = () => {
    window.setTimeout( () => {
        console.log('Hola');
    },5000);
};
// saludoTiempo();

const saludo = () => {
    console.log('Hola');
};
// setTimeout(saludo, 5000);

let id;
const iniciar = () => {
    console.log('Iniciando timer');
    setTimeout(()=>{console.log(5)},1000);
    setTimeout(()=>{console.log(4)},2000);
    setTimeout(()=>{console.log(3)},3000);
    setTimeout(()=>{console.log(2)},4000);
    setTimeout(()=>{console.log(1)},5000);
    id = setTimeout(saludo, 5000);
};

const parar = () => {
    console.log('Parando timer de saludo');
    clearTimeout(id);
};

/**
 *  window.setInterval()
 *  Nos permite ejecutar una función cada cierto tiempo.
*/

let i = 0;
let intervaloId;
const iniciarIntervalo = () => {
    intervaloId = setInterval(() => {
        console.log(i);
        i++;
    }, 1000);
}

const detenerIntervalo = () => {
    console.log('Parando intervalo de números');
    clearInterval(intervaloId);
}