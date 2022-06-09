const lista1 = [
    500,
    200,
    100,
    4000000,
];
//oragnizar listas
lista1.sort((a,b) => a -b);

console.log(lista1)

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

function calcularMedianaPar(lista){
    let mitad = lista.length / 2;
    let valor1 = lista[mitad - 1];
    let valor2 = lista[mitad];

    return (valor1 + valor2) / 2;

}

let mediana;
if(esPar(lista1.length)){
    console.log(`mediana par ${calcularMedianaPar(lista1)}`);
}else{
    console.log(`mediana impar ${lista1[mitadLista1]}`);
}
