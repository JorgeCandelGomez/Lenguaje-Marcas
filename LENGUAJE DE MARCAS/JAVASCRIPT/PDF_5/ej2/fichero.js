let cambiarFondoAmarillo=function(){
    this.style.backgroundColor="yellow";
}

let comprobarValor=function(){
    if(this.value.trim()==="")
        this.style.backgroundColor="red";
    else
        this.style.backgroundColor="white";
}

let nombre= document.getElementById("nombre");
let email=document.getElementById("email");

nombre.addEventListener('focus',cambiarFondoAmarillo);
email.addEventListener('focus',cambiarFondoAmarillo);


nombre.addEventListener('blur',comprobarValor)
email.addEventListener('blur',comprobarValor)