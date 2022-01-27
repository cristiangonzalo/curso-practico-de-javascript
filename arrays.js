a = [1, 2, 3, 4, 5, 6, 7];
console.log("El valor de ls posición 4 del array es: "+a[4]);

function array(array){
    console.log("El valor del primer elemento del array es: "+array[0]);
}
array(a);

//agregar elmento al final del array
//a.push(8);

//eliminar elemento del final del array
//a.pop();

//agregar elemento al inicio del array
//a.unshift(0);

//eliminar elemento al inicio del array
//a.shift();

for(i = 0; i < a.length; i++){
    console.log(a[i]);
}

//Obtener posición del valor a consultar
let posicion = a.indexOf(5);
console.log("Posición del valor 5 en el array es: "+posicion);