export function valida(input){
    const tipoInput = input.dataset.tipo;
    console.log(tipoInput)


    if(validadores[tipoInput]){
        validadores[tipoInput](input)
    }

    // console.log(input.parentElement)

    if(!input.validity.valid){
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerText = mostrarMensajeError(tipoInput, input)
        console.log(input.parentElement.querySelector(".input-message-error"))
    }else{
        input.parentElement.classList.remove("input-container--invalid");
    }


}

const mensajeError = {
    name: {
        valueMissing : "El campo nombre no puede esta vacío"
    },
    email:{
        valueMissing : "El campo email no puede esta vacío",
        typeMismatch : "El campo email no es válido"
    },
    password:{
        valueMissing : "El campo password no puede esta vacío",
        patternMismatch : "Al menos 6 caracteres, máximo 12"
    },
    nacimiento:{
        valueMissing : "Este campo no puede esta vacío",
        customError: "Debes tener al menos 18 años de edad"
    },
    number:{
        valueMissing : "Este campo no puede estar vacío",
        patternMismatch: "El formato requerido es xxxxxxxxxx"
    }
}

const validadores = {
    nacimiento: (input) => validarDate(input)
}


const typeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]



function mostrarMensajeError(type, input){

    let mensaje = "";
    console.log(input)

    typeErrores.forEach((error)=>{
        if(input.validity[error]){
            mensaje = mensajeError[type][error];
        }
    })

    return mensaje;
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