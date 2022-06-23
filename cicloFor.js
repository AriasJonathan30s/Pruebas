let totalConsulta = 50;
let limit = 50;
let sumador =0;
let evaluador=0;
let contLimit =1;

if(totalConsulta>=limit){
    for(sumador;sumador<=totalConsulta;sumador++){
        if(sumador == evaluador){
            evaluador=evaluador+limit;
            contLimit=contLimit+1;
        }
    }
    console.log(contLimit);    
}else{
    console.log('Resultado menor a 50');
}

//fragmento para hacer uso de algun paginador en html.

