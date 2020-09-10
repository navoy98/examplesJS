function sumar() {
    //Recibir los datos
    let numeroU = parseInt(document.getElementById("nUno").value);
    let numeroD = parseInt(document.getElementById("nDos").value);

    //Procesar los datos
    let resultado = parseInt(numeroU + numeroD);

    //Entregar los resultados
    document.getElementById("resulOperacion").innerHTML = resultado;

}

function multiplicar() {
    //Recibir los datos
    let numeroU = parseInt(document.getElementById("nUno").value);
    let numeroD = parseInt(document.getElementById("nDos").value);

    //Procesar los datos
    let resultado = parseInt(numeroU * numeroD);

    //Entregar los resultados
    document.getElementById("resulOperacion").innerHTML = resultado;

}


///// Calcular área triángulo ////////
function triangulo() {
    //Recibir los datos
    let b = parseInt(document.getElementById("b").value);
    let h = parseInt(document.getElementById("h").value);

    //Procesar los datos
    let resultado = parseInt(b * h / 2);

    //Entregar los resultados
    document.getElementById("resul").innerHTML = resultado;

}

/////// Calcular área círculo /////////
function circulo() {
    //Recibir los datos
    let radio = parseInt(document.getElementById("radio").value);

    //Procesar los datos
    let resultado = parseInt(Math.Pi * radio * radio);

    //Entregar los resultados
    document.getElementById("resulCir").innerHTML = resultado;

}