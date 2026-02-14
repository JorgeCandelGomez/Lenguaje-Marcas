let obtenerCoordenadas=function(event){
    let mouseX=event.clientX;
    let mouseY=event.clientY;
    console.log(mouseX+", "+mouseY);
}
let mostrarCoordenadas=function(event){
    let mouseX=event.clientX;
    let mouseY=event.clientY;
    alert(mouseX+", "+mouseY);
}
let div=document.getElementById('div');

div.style.border="1px solid black";

div.addEventListener('mousemove',obtenerCoordenadas);
div.addEventListener('click',mostrarCoordenadas);
