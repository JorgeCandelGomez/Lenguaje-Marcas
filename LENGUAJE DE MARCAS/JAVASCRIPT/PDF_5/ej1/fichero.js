alert("Hola!");

let modificarTamañoImagen=function(){
    this.style.width="200px";
    this.style.height="200px";
}

let ponerBordeRojo=function(){
    this.style.border= "3px solid red";
}

let porDefecto=function(){
    this.style="none";
}

let img1=document.getElementById("img1");
img1.addEventListener('mouseenter',modificarTamañoImagen);
img1.addEventListener('mouseenter',ponerBordeRojo);

img1.addEventListener('mouseleave',porDefecto)

let img2=document.getElementById("img2");
img2.addEventListener('mouseenter',modificarTamañoImagen);
img2.addEventListener('mouseenter',ponerBordeRojo)
img2.addEventListener('mouseleave',porDefecto)

let img3=document.getElementById("img3");
img3.addEventListener('mouseenter',modificarTamañoImagen);
img3.addEventListener('mouseenter',ponerBordeRojo)
img3.addEventListener('mouseleave',porDefecto)



