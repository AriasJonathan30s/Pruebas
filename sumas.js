let min=0;
let max=50;
let skip;
let limit;
let pausa;
let boton;

inicializador();

function inicializador() {
    console.log('Comienzo');
    foward1 = setTimeout(funcionInicio, 500);
    foward2 = setTimeout(accionAdelante, 1000);
    foward3 = setTimeout(funcionAdelante, 1000);
    foward4 = setTimeout(accionAdelante, 1500);
    foward5 = setTimeout(funcionAdelante, 1500);
    backward1 = setTimeout(accionAtras, 2000);
    backward2 = setTimeout(funcionAtras, 2000);
    backward3 = setTimeout(accionAtras, 2500);
    backward4 = setTimeout(funcionAtras, 2500);
}

function funcionInicio() {
    skip=0;
    limit=max;
    console.log('skip '+skip+' limit '+limit)
    console.log('Presiona boton adelante');
}

function accionAdelante(){
        console.log('Presiona hacia adelante');
}
function funcionAdelante(){
    skip=skip+max;
    limit=limit+max;
    console.log('skip '+skip+' limit '+limit)
}

function accionAtras(){
    console.log('Presiona hacia atras');
}
function funcionAtras() {
    skip=skip-max;
    limit=limit-max;
    console.log('skip '+skip+' limit '+limit)
}

/*
*
Evitando todas las funciones para mostrar la consola,
la parte importante esta en el contenido de

funcionInicio, funcionAdelante y funcionAtras

Prueba para hacer uso de un paginador skip-limit de una tabla de resultados
*
*/
