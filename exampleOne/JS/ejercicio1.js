function calcularCosto() {
    let tarifas = document.getElementById('tarifas').value;
    let dias = parseInt(document.getElementById('dias').value);
    let totalSin;
    let totalCon;
    let totalDesc;
    const iva = 1.19;


    switch (tarifas) {
        case "1":
            totalSin = dias * 2500;
            totalCon = parseFloat(totalSin * iva);
            totalDesc = parseFloat(totalCon * 0.95);
            break;
        case "2":
            totalSin = dias * 4600;
            totalCon = parseFloat(totalSin * iva);
            totalDesc = parseFloat(totalCon * 0.91);
            break;
        case "3":
            totalSin = dias * 5200;
            totalCon = parseFloat(totalSin * iva);
            totalDesc = parseFloat(totalCon * 0.85);
            break;
        default:
            alert("¡Tarifa no valida!");
            break;
    }

    document.getElementById("totalSin")[0].value = totalSin;
    document.getElementById("totalCon")[0].value = totalCon;
    document.getElementById("totalDesc")[0].value = totalDesc;

}