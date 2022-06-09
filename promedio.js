function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }
  
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
  }


  /* let listaTemporal = [1,2,3,4,5,6,7,8,9,10];

  let arregloTemporal = listaTemporal.reduce(function(previo = 0,actual,index,ara){
    console.log(`Previo ${previo} : Actual ${actual} : MAS${previo+actual} index:${index} ARA:${ara}`);
    return previo + actual;
    
  });

  let arregloTemporal2 = listaTemporal.reduce( (previo, actual) =>
    previo + actual , 0 );

  console.log(`Arraglo ::: ${arregloTemporal2}`); */