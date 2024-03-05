export function valida(input){
    const tipoInput = input.dataset.birth;
    console.log(tipoInput)


    if(validadores[tipoInput]){
        validadores[tipoInput](input)
    }


}

const validadores = {
    nacimiento: (input) => validarDate(input)
}


function validarDate(input){
    const fechaCliente = new Date(input.value);
    let mensaje = '';

    if(!mayorEdad(fechaCliente)){
        mensaje = 'Debes tener al menos 18 años de edad'
    }

    input.setCustomValidity(mensaje)
    
}

function mayorEdad(fecha){
    const fechaActual = new Date();
    const difDate = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );

   

    return difDate <= fechaActual;
}