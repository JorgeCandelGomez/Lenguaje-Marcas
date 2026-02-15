let nombre=document.getElementById('nombre');
let email=document.getElementById('email');

let botonEnviar=document.getElementById('botonEnviar');

let inputs=document.querySelectorAll('input');


let fondoAmarillo=function(){
    this.style.backgroundColor="yellow";
}

let nosenombre=function(){
    if(this.value==""){
        this.style.border="red 3px solid";
        this.placeholder="No completado";
        
    }else
        this.style.backgroundColor="white";
    
}
inputs.forEach((input) => {
    input.addEventListener('focus',fondoAmarillo)
    input.addEventListener('blur',nosenombre)
});



