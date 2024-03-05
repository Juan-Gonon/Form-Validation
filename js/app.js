import { valida } from "./script.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((element)=>{   
    element.addEventListener('blur', (e)=>{
        valida(e.target)
    })
})