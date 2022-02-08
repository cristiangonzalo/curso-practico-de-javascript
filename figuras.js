// Código del cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ladoCuadrado+ " cm");

function perimetroCuadrado(lado){
    return (lado * 4) ;
}

// console.log("El perímetro del cuadrado es: "+perimetroCuadrado+" cm");

function areaCuadrado(lado){
    return (lado * lado) ;
}

// console.log("El área del cuadrado es: "+areaCuadrado+ " cm2");

console.groupEnd();

//Código del triángulo
console.group("Triángulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triángulo miden: "+ladoTriangulo1+ " cm, "+ladoTriangulo2+" cm, "+baseTriangulo+" cm");
// console.log("La altura del triángulo es de: "+alturaTriangulo+" cm");

function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base) ;
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: "+perimetroTriangulo+" cm");

function areaTriangulo(base, altura){
    return ((base * altura) / 2) ;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es de: "+areaTriangulo+" cm^2");

console.groupEnd();

// Código del círculo
console.group("Círculo");
// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: "+radioCirculo+" cm");
// Diámetro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es: "+diametroCirculo+" cm");
function diametroCirculo(radio){
    // return console.log("El diámetro del círculo es: "+ (radio * 2) +" cm")
    return (radio * 2);
}
// PI
const _pi = 3.1415;
const _pi_ = Math.PI;
// console.log("PI es: "+_pi_+" cm");
// Circunferencia
// const perimetroCirculo = diametroCirculo * _pi_;
// console.log("El perímetro del círculo es: "+perimetroCirculo+" cm");

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return (diametro * _pi_) ;
}

// Área
// const areaCirculo = (radioCirculo * radioCirculo) * _pi_;
// console.log("El área del círculo es: "+areaCirculo+" cm^2");

function areaCirculo(radio){
    return console.log("El área del círculo es: "+ ( (radio * radio) * _pi_) +" cm^2");
}

console.groupEnd();

// Interactuamos con HTML

function calcularPerimetroCuadrado(){
    const medidaLadoCuadrado = document.getElementById("medidaLadoCuadrado").value;
    const resultadoPerimetroCuadrado = perimetroCuadrado(Number(medidaLadoCuadrado));
    console.log(`El perímetro del cuadrado es: ${resultadoPerimetroCuadrado}`);
    document.getElementById("resultadoCuadrado").innerHTML = `El perímetro del cuadrado es: ${resultadoPerimetroCuadrado}`;
}

function calcularAreaCuadrado(){
    const medidaLadoCuadrado = document.getElementById("medidaLadoCuadrado").value;
    const resultadoAreaCuadrado = areaCuadrado(Number(medidaLadoCuadrado));
    console.log(`El área del cuadrado es: ${resultadoAreaCuadrado}`);
    document.getElementById("resultadoCuadrado").innerHTML = `El área del cuadrado es: ${resultadoAreaCuadrado}`;
}

function calcularPerimetroTriangulo(){
    const medidaLadoATriangulo = document.getElementById("medidaLadoATriangulo").value;
    const medidaLadoBTriangulo = document.getElementById("medidaLadoBTriangulo").value;
    const medidaBaseTriangulo = document.getElementById("medidaBaseTriangulo").value;
    const resultadoPerimetroTriangulo = perimetroTriangulo(Number(medidaLadoATriangulo), Number(medidaLadoBTriangulo), Number(medidaBaseTriangulo));
    console.log(`El perímetro del triángulo es: ${resultadoPerimetroTriangulo}`);
    document.getElementById("resultadoTriangulo").innerHTML = `El perímetro del triángulo es: ${resultadoPerimetroTriangulo}`;
}

function calcularAreaTriangulo(){
    const medidaBaseTriangulo = document.getElementById("medidaBaseTriangulo").value;
    const medidaAlturaTriangulo = document.getElementById("medidaAlturaTriangulo").value;
    const resultadoAreaTriangulo = areaTriangulo(Number(medidaBaseTriangulo), Number(medidaAlturaTriangulo));
    console.log(`El área del triángulo es: ${resultadoAreaTriangulo}`);
    document.getElementById("resultadoTriangulo").innerHTML = `El área del triángulo es: ${resultadoAreaTriangulo}`;
}