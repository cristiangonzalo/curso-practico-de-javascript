const nombres = "Cristian";
const apellidos = "Gonzalo Macedo";
let nombreCompleto = nombres+" "+apellidos;
const usuario = "cjgonzalo15";
let edad = 32;
const email = "cjgonzalo15@gmail.com";
let dineroAhorrado = 1000000;
let deuda = 174000;
let dineroReal = dineroAhorrado - deuda;

function saludar(sujeto){
    let persona = sujeto;
    console.log(`${persona}, bienvenido al Curso Práctico de Javascript :)`);
}

console.log(`Mi nombre es: ${nombreCompleto}`);
console.log(`Mi edad es: ${edad}`);
console.log(`Mi usuario del sistema es: ${usuario}`);
console.log(`Mi email es: ${email}`);
console.log(`El saldo de mi dinero ahorrado es: ${dineroReal}`);

saludar(nombreCompleto);

if(dineroReal >= 800000){
    console.log(`Buen trabajo ${nombreCompleto}, tu ahorro supera o iguala los 800000 mil pesos`);
}else{
    console.log(`A poner más esfuerzo ${nombreCompleto}, para lograr mayores ahorros ya que tus ahorros no superaron los 800000 mil pesos`);
}