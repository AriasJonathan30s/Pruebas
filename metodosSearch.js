const entrada='JONATHAN';
const nombreCompleto='JONATHAN RICARDO ARIAS CRUZ'
var stringDelMedio;

// este manda a llamar al metodo 
pruebainput(entrada ,nombreCompleto);


//este es el metodo
function pruebainput(entra , nombreDeTabla) {
    if (nombreDeTabla.search(entra) != -1) {
      stringDelMedio = ' contiene ';
    } else {
      stringDelMedio = ' no contiene ';
    }
    console.log(nombreDeTabla + stringDelMedio + entra);
  }

  // console.log('Para mas informacion ingrese a la pagina:');
  // console.log('https://www.freecodecamp.org/espanol/news/cuatro-maneras-diferentes-de-buscar/');
  // console.log('y tambien en');
  // console.log('https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/search');