alert("Hola");
let eventoClic=function(){
    alert("Has pulsado "+ this.id);    
}

let div=document.getElementById("div1");
let p=document.getElementById("p1");
let img=document.getElementById("img1");

div.addEventListener('click',eventoClic);
p.addEventListener('click',eventoClic);
img.addEventListener('click',eventoClic);


div.style.backgroundColor="yellow";
div.style.padding="40px";
p.style.backgroundColor="red";
p.style.padding="40px";
img.style.backgroundColor="blue";
img.style.padding="40px";