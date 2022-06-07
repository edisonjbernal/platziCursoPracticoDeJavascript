//Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${areaCuadrado} cm2`);

console.groupEnd();

//Código del triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`
Los lados del triangulo miden: 
${ladoTriangulo1}cm, 
${ladoTriangulo2}cm,
${baseTriangulo}cm.
La altura del triangulo rs:
${alturaTriangulo}cm
`
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log(`El perímetro del Triángulo es: ${perimetroTriangulo} cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(`El área del Triángulo es: ${areaTriangulo}cm2`);

console.groupEnd();

//Código del círculo
console.group("Círculos");

// Radio

const radioCirculo = 4;
console.log(`El radio del círculo es: ${radioCirculo}cm`);

// Diametro

const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del círculo es: ${diametroCirculo}cm`);

// PI

const PI = Math.PI;

console.log(`El valor de PI es: ${PI}`);

// Circunferencia

const perimetroCirculo = diametroCirculo * PI;

console.log(`El perimetro del círculo es: ${perimetroCirculo}cm`);

// Área

const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log(`El áreadel círculo es: ${areaCirculo}cm2`);



console.groupEnd();