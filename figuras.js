//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

function perimetroCuadrado(lado){
    return lado * 4
}

function areaCuadrado(lado){
    return lado * lado
}



console.groupEnd();

//Código del triángulo
// console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

/*console.log(`
Los lados del triangulo miden: 
${ladoTriangulo1}cm, 
${ladoTriangulo2}cm,
${baseTriangulo}cm.
La altura del triangulo rs:
${alturaTriangulo}cm
`
); */

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

//console.log(`El perímetro del Triángulo es: ${perimetroTriangulo} cm`);

function areaTriangulo(base,altura){
    return (base * altura)  / 2
}

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

//console.log(`El área del Triángulo es: ${areaTriangulo}cm2`);

console.groupEnd();

//Código del círculo
console.group("Círculos");

// Radio

//const radioCirculo = 4;
//console.log(`El radio del círculo es: ${radioCirculo}cm`);

// Diametro

function diametroCirculo(radio){
    return radio * 2;
}

/* const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del círculo es: ${diametroCirculo}cm`); */

// PI

const PI = Math.PI;

/* console.log(`El valor de PI es: ${PI}`); */

// Circunferencia

/* const perimetroCirculo = diametroCirculo * PI;

console.log(`El perimetro del círculo es: ${perimetroCirculo}cm`); */

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área

    function areaCirculo(radio){
        return (radio * radio) * PI;
    }

/* const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log(`El áreadel círculo es: ${areaCirculo}cm2`); */

//Interacción con el HTML

console.groupEnd();



function calcularPerimetroCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const perimetro=perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const area=areaCuadrado(value);
    alert(area);
}