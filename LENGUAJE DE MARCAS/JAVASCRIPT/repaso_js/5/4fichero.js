let div=document.querySelector('div');

let mostrarCoordenadas=function(event){
    let x=event.clientX;
    let y=event.clientY;
    console.log("X: "+x+"\nY: "+y);
}

div.addEventListener('mouseenter',mostrarCoordenadas);