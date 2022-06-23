let arr =[{nombre:"JONATHAN RAMIREZ LOPES RAIGOZA"}, {nombre:"ARMANDO MANUEL JARAMILLO"}, {nombre:"ROBERTO DANIEL CAMACHO LOPEZ"},
            {nombre:"JUAN CARLOS RAMIREZ PEREZ"},{nombre:"JUAN CARLOS RAMIREZ CAMACHO"},{nombre:"ARNULFO JARAMILLO RAIGOZA"},
            {nombre:"JAVIER RAMIREZ"}];

// entrada, ingrese el nombre del arreglo que desee buscar solo 2 palabras, no importal el orden.
let entrada = 'javier ramirez'.toUpperCase();
let arregloEntrada = entrada.split(' ');


    if (entrada === '') {
        return arr;
    } else {
        let resuts= arr.filter(dato=>{
                return (
                    dato.nombre.includes(arregloEntrada[0]) &&
                    dato.nombre.includes(arregloEntrada[1])
                    )
        });
        console.log(resuts);
    }

// Este es un metodo para escapar las palabras y asi poder filtrar una tabla con solo dos palabras, no mas no menos.
