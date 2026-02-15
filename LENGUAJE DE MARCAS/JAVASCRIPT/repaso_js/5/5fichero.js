let imagen=document.getElementById("chrome");
let destino=document.getElementById("dest-chrome");

imagen.addEventListener("dragstart",function(evento){
    evento.dataTransfer.setData("elemento",evento.target.id);
});

destino.addEventListener("dragover",function(evento){
    evento.preventDefault();
})

destino.addEventListener("drop",function(evento){
    evento.preventDefault();
    let datos=evento.dataTransfer.getData("elemento");
    evento.target.appendChild(document.getElementById(datos));
});



let imagen2=document.getElementById("firefox");
let destino2=document.getElementById("dest-firefox");

imagen2.addEventListener("dragstart",function(evento){
    evento.dataTransfer.setData("elemento",evento.target.id);
});

destino2.addEventListener("dragover",function(evento){
    evento.preventDefault();
})

destino2.addEventListener("drop",function(evento){
    evento.preventDefault();
    let datos=evento.dataTransfer.getData("elemento");
    evento.target.appendChild(document.getElementById(datos));
});

let imagen3=document.getElementById("safari");
let destino3=document.getElementById("dest-safari");

imagen3.addEventListener("dragstart",function(evento){
    evento.dataTransfer.setData("elemento",evento.target.id);
});

destino3.addEventListener("dragover",function(evento){
    evento.preventDefault();
})

destino3.addEventListener("drop",function(evento){
    evento.preventDefault();
    let datos=evento.dataTransfer.getData("elemento");
    evento.target.appendChild(document.getElementById(datos));
});