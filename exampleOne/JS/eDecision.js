function mostrarMensaje() {
    let edad = parseInt(document.getElementById('edad').value);

    // if (edad >= 18) {
    // mensaje = "Eres mayor de edad";
    // }else{
    //     mensaje = "Eres menor de edad";
    // }

    //// If con operador terniario //// SOLO SE PUEDE CON DOS VALIDACIONES
    let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";

    alert(mensaje);
    //document.write(mensaje);
}

function mostrarMensajeDos() {
    let edadP = parseInt(document.getElementById('edadP').value);
    let estaturaP = parseFloat(document.getElementById('estaturaP').value);
    let pesoP = parseInt(document.getElementById('pesoP').value);

    const parametroEdad = 80;
    const parametroEstatura = 1.40;
    const parametroPeso = 70;
    let mensajeDecision = "";

    //// IF ANIDADO /////
    // if (edadP <= parametroEdad) {
    //     if (estaturaP >= parametroEstatura) {
    //         if (pesoP == parametroPeso) {
    //             mensajeDecision = "Apto para realizar el deporte";
    //         }
    //         else {
    //             mensajeDecision = "No apto. Peso no válido";
    //         }
    //     } else {
    //         mensajeDecision = "No apto. Estatura no válida";
    //     }
    // } else {
    //     mensajeDecision = "No apto. Edad no permitida";
    // }

    /// IF con operador lógico AND (&&)
    // if (edadP <= parametroEdad && estaturaP >= parametroEstatura && pesoP == parametroPeso) {
    //     mensajeDecision = "Apto para realizar el deporte";
    // }else{
    //     mensajeDecision = "No apto para realizar el deporte";
    // }

    /// IF con operador lógico OR (||)
    // if (edadP <= parametroEdad || estaturaP >= parametroEstatura || pesoP == parametroPeso) {
    //     mensajeDecision = "Apto para realizar el deporte";
    // }else{
    //     mensajeDecision = "No apto para realizar el deporte";
    // }

    alert(mensajeDecision);
}

function mostrarMensajeTres(){
    let productName = document.getElementById('productName').value;
    let price = 0;

    // const PRODUCT_ONE = 'A';
    // const PRODUCT_TWO = 'B';
    // const PRODUCT_THREE = 'C';

    // if (productName.toUpperCase() == PRODUCT_ONE) {
    //     price = 2000;
    //     alert(price);
    // }else{
    //     if (productName.toUpperCase() == PRODUCT_TWO) {
    //         price = 2200;
    //         alert(price);
    //     }else{
    //         if (productName.toUpperCase() == PRODUCT_THREE) {
    //             price = 1800;
    //             alert(price);
    //         }else{
    //             alert("¡Product Invalid!");
    //         }
    //     }    
    // }

        //alert(price);

    switch (productName.toUpperCase()) {
        case 'A':
            price = 2000;
            break;
            case 'B':
            price = 2200;
            break;
            case 'C':
            price = 1800;
            break;
        default:
            alert("¡Product Invalid!");
            break;
    }
    alert(price);
}

// function On_Off(interruptor){
//Ejemplo con funcion flecha
let On_Off = interruptor =>{
    let pic;

    // if (interruptor == 0) {
    //     alert('OFF');
    // } else {
    //     alert('ON');
    // }

    //Ejemplo con operador terniario
    let mensaje = (interruptor == 0) ? "OFF" : "ON";
    alert(mensaje);
}
