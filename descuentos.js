console.group("Porcentajes y Descuentos");

// const precioOriginal = 120;
// const descuento = 18;


/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});*/

const cupones = [
    {
        descripcion : "babyPlan",
        descuento : 15,
    },
    {
        descripcion : "juniorPlan",
        descuento : 30,
    },
    {
        descripcion : "seniorPlan",
        descuento : 45,
    },
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio  * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}
function calcularPrecioFinal(){
    const precioProducto = document.getElementById("precioProducto").value;
    const descuentoProducto = document.getElementById("descuentoProducto").value;
    const resultadoPrecioFinal = calcularPrecioConDescuento(Number(precioProducto), Number(descuentoProducto));
    console.log(`El precio final del producto con descuento es: ${resultadoPrecioFinal}`);
    document.getElementById("resultadoPrecioFinal").innerText = `El precio final del producto con descuento es: ${resultadoPrecioFinal}`;
}

function validarCupon(cupon){
    const cuponEncontrado = cupones.find(function(elemento){
        return elemento.descripcion === cupon;
    });
    return cuponEncontrado;
}

function calcularPrecioFinalConCupon(){
    const precioProductoConCupon = document.getElementById("precioProductoConCupon").value;
    const descripcionCupon = document.getElementById("descripcionCupon").value;
    const cuponEncontrado = validarCupon(descripcionCupon);
    if(!cuponEncontrado){
        console.log(`Cupón no válido`);
        document.getElementById("resultadoPrecioFinalConCupon").innerText = `Cupón no válido`;
    }else{
        const resultadoPrecioFinalConCupon = calcularPrecioConDescuento(Number(precioProductoConCupon), Number(cuponEncontrado.descuento));
        console.log(`El precio final del producto con cupón de descuento es: ${resultadoPrecioFinalConCupon}`);
        document.getElementById("resultadoPrecioFinalConCupon").innerText = `El precio final del producto con cupón de descuento es: ${resultadoPrecioFinalConCupon}`;
    }
}

console.groupEnd();