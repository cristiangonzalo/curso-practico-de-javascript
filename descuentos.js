console.group("Porcentajes y Descuentos");

// const precioOriginal = 120;
// const descuento = 18;


/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});*/

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
console.groupEnd();