
let nuevoParrafo= document.createElement('p');
let contenido=document.createTextNode("Parrafo extra");
nuevoParrafo.appendChild(contenido);

document.body.appendChild(nuevoParrafo)


let parrafos=document.getElementsByTagName("p");
parrafos[1].remove();

