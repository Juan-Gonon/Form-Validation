export function valida(input){
    const tipoInput = input.dataset.tipo;
    console.log(tipoInput)


    if(validadores[tipoInput]){
        validadores[tipoInput](input)
    }

    console.log(input.parentElement)

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
    }else{
        input.parentElement.classList.add("input-container--invalid");
    }


}

const mensajeError = {
    name: {
        valueMissing : "Este campo no puede esta vacío"
    },
    email:{
        typeMismatch : "El correo no es válido"
    },
    password:{
        valueMissing : "Este campo no puede esta vacío",
        patternMismatch : "Al menos 6 caracteres, máximo 12"
    },
    nacimiento:{
        valueMissing : "Este campo no puede esta vacío",
        customError: "Debes tener al menos 18 años de edad"
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