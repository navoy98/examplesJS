function calcularCosto(){
    let tarifas = document.getElementById('tarifas').value;
    let dias = parseInt(document.getElementById('dias').value);
    let totalSin;
    let totalCon;
    let totalDesc;
    const iva = 1.19;


    switch (tarifas) {
        case "1":
            totalSin = dias * 2500; 
            totalCon = totalSin * iva;
            totalDesc = resul * 0.95
            break;
            case "2":
            totalSin = dias * 4600; 
            totalCon = totalSin * iva;
            totalDesc = resul * 0.91;
            break;
            case "3":
            totalSin = dias * 5200; 
            totalCon = totalSin * iva;
            totalDesc = resul * 0.85;
            break;
        default:
            alert("¡Tarifa no valida!");
            break;
    }

}