alert("Hola");

let parrafoNuevo=document.createElement('p');
let contenido= document.createTextNode("Este parrafo es nuevo");

parrafoNuevo.appendChild(contenido);

document.body.appendChild(parrafoNuevo);


let parrafos=document.querySelectorAll('p');
let parrafo2=parrafos[1];

parrafo2.remove();