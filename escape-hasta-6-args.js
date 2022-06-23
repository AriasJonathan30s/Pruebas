let arr =[{nombre:"JONATHAN RAMIREZ LOPES RAIGOZA"}, {nombre:"ARMANDO MANUEL JARAMILLO"}, {nombre:"ROBERTO DANIEL CAMACHO LOPEZ"},
            {nombre:"JUAN CARLOS RAMIREZ PEREZ"},{nombre:"JUAN CARLOS RAMIREZ CAMACHO"},{nombre:"ARNULFO JARAMILLO RAIGOZA"},
            {nombre:"JAVIER RAMIREZ"},{nombre:"ARMANDO JAVIER DE LA ROSA JIMENEZ"},{nombre:"NORMA MARIELA DE LA CRUZ ESPARZA"}];

// Ingrese el nombre que se encuentra en el arreglo, de 1 hasta 6 palabras, no importa el orden, de ser mas, no encuentra nada.
let entrada = 'de la cruz mariela esparza norma'.toUpperCase();
let arregloEntrada = entrada.split(' ');
let words = arregloEntrada.length;

let result = arr.filter(dato=>{
    if(entrada===''){
        return arr;
    } else{
        switch(words){
            case 1: 
                    return (
                        dato.nombre.includes(arregloEntrada[0])
                    )
            case 2: 
                    return (
                        dato.nombre.includes(arregloEntrada[0]) &&
                        dato.nombre.includes(arregloEntrada[1])
                    )
            case 3: 
                    return (
                        dato.nombre.includes(arregloEntrada[0]) &&
                        dato.nombre.includes(arregloEntrada[1]) &&
                        dato.nombre.includes(arregloEntrada[2])
                    )
            case 4: 
                    return (
                        dato.nombre.includes(arregloEntrada[0]) &&
                        dato.nombre.includes(arregloEntrada[1]) &&
                        dato.nombre.includes(arregloEntrada[2]) &&
                        dato.nombre.includes(arregloEntrada[3])
                    )
            case 5: 
                    return (
                        dato.nombre.includes(arregloEntrada[0]) &&
                        dato.nombre.includes(arregloEntrada[1]) &&
                        dato.nombre.includes(arregloEntrada[2]) &&
                        dato.nombre.includes(arregloEntrada[3]) &&
                        dato.nombre.includes(arregloEntrada[4])
                    )
            case 6: 
                    return (
                        dato.nombre.includes(arregloEntrada[0]) &&
                        dato.nombre.includes(arregloEntrada[1]) &&
                        dato.nombre.includes(arregloEntrada[2]) &&
                        dato.nombre.includes(arregloEntrada[3]) &&
                        dato.nombre.includes(arregloEntrada[4]) &&
                        dato.nombre.includes(arregloEntrada[5])
                    )
            default: return null;
        }
    }
});
console.log(result);

//Busqueda escapada con 1 palabra, hasta 6 palabras, si es mas de 6 palabras, retorna vacio.
