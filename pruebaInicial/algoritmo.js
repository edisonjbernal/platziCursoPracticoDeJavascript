/* --- Ejercicio: Variables y operadores --*/
let nombre = "Johan";
let apellido = "Bernal";
let nombreUsuarioPlatzi = "edisonbernal";
let edad = 33;
let correoElectronico= "edison@mejorvirtual.com";
let mayorDeEdad = true;
let dineroAhorrado = 1100
let deudas = 150;

// (4) Escribe nombre completo y calcula dinero real

console.log(`Nombre completo: ${nombre} ${apellido}`);
console.log(`Dinero real: = ${dineroAhorrado - deudas}`);

/* --- Ejercicio: Variables y operadores --*/

const miNombreYAlias = (name, lastName, nickname) => {
	let completeName = `${name} ${lastName}`;
	return `Mi nombre es: ${completeName}, pero prefiero que me digas ${nickname}.`;
}
console.log(miNombreYAlias('Juan David', 'Castro Gallego', 'juandc'));

/* --- Ejercicio: Condicionales --*/

const tipoDeSuscripcion = "Expert+";
if(tipoDeSuscripcion == 'Free'){
	console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == 'Basic') {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un mes.");
} else if (tipoDeSuscripcion == 'Expert') {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un año.");
} else if (tipoDeSuscripcion == 'Expert+') {
	console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año.");
}
/* --- Ejercicio BONUS: Condicionales --*/
let suscripciones = [
    {
        tipo:'Free', descripcion:"Solo puedes tomar los cursos gratis"
    },
    {
        tipo:'Basic', descripcion:"Puedes tomar casi todos los cursos de Platzi durante un mes."
    },
    {
        tipo:'Expert', descripcion:"Puedes tomar casi todos los cursos de Platzi durante un año."
    },
    {
        tipo:'Expert+', descripcion:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año."
    }
];

let suscripcionUsuario='Expert+';
suscripcionActual = suscripciones.find(
    function(suscripcion){
        return suscripcion.tipo === suscripcionUsuario;
    }
)
console.log(suscripcionActual);

/* Ejercicio de ciclos */

let i = 0;
while (i < 5) {
	console.log("El valor de i es: " + i);
	i++;
}

i = 10;
while (i >= 2) {
	console.log("El valor de i es: " + i);
	i--;
}

// punto 3
/*let respuesta = 0;
do {
  respuesta = prompt('Sí sumo 2 + 2, ¿cuál es el resultado?');
  respuesta = parseInt(respuesta);
} while (!(respuesta == 4))
*/
//

function verSoloPrimerElementoArray(arrayMuestra) {
    return console.log(arrayMuestra[0]);
  }


let miAuto={
    marca:"Chevrolet",
    modelo:"Aveo GTI",
    motor:1400
}

  function imprimirElementosObjeto(objetoMuestra) {
      for (const elemento of objetoMuestra) {
        console.log(elemento)
      }
  }

  imprimirElementosObjeto(miAuto);


  