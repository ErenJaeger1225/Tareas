function ingresarProductos() {
   
    // Obtener los valores de los inputs
    let nombre1 = document.getElementById('nombre1').value;
    let precio1 = parseFloat(document.getElementById('precio1').value) || 0;
    let cantidad1 = parseFloat(document.getElementById('cantidad1').value) || 0;

    let nombre2 = document.getElementById('nombre2').value;
    let precio2 = parseFloat(document.getElementById('precio2').value) || 0;
    let cantidad2 = parseFloat(document.getElementById('cantidad2').value) || 0;

    let nombre3 = document.getElementById('nombre3').value;
    let precio3 = parseFloat(document.getElementById('precio3').value) || 0;
    let cantidad3 = parseFloat(document.getElementById('cantidad3').value) || 0;

    // Calcular subtotal por producto
    let total1 = parseFloat(precio1) * parseFloat(cantidad1);
    let total2 = parseFloat(precio2) * parseFloat(cantidad2);
    let total3 = parseFloat(precio3) *parseFloat (cantidad3);

    // Calcular subtotal general
    let subtotal = parseFloat(total1) + parseFloat(total2) + parseFloat(total3);

    // Calcular IVA (15%)
    let iva = parseFloat(subtotal) * 0.15;
   
    // Total con IVA
    let totalConIva = parseFloat(subtotal) + iva;

    // Mostrar información básica
    alert("=== FACTURA ===");
    alert("Productos: " + nombre1 + " - " + nombre2 + " - " + nombre3);
    alert("Subtotal: $" + subtotal);
    alert("IVA (15%): $" + iva);
    alert("Total con IVA: $" + totalConIva);

    // Aplicar descuento del 25% si alguna cantidad es mayor a 10
    if (cantidad1 > 10 || cantidad2 > 10 || cantidad3 > 10) {
        let descuento = parseFloat(totalConIva) * 0.25;
        let totalFinal = parseFloat(totalConIva) - parseFloat(descuento);
       
        alert("¡Descuento del 25% aplicado!");
        alert("Total con descuento: $" + totalFinal);
    }
}
