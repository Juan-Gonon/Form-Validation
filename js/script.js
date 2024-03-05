const inputDate = document.querySelector('#birth');


inputDate.addEventListener('blur', (e)=>{
    validarDate(e.target)
})



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