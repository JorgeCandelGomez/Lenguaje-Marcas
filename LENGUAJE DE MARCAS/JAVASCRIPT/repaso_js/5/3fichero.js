let div1=document.getElementById('div1');
let p1=document.getElementById('p1');
let img1=document.getElementById('img1');

let eventoClic=function(){
    alert("Has pulsado "+ this.id);
}

img1.style.padding="20px";
img1.style.backgroundColor="blue";

p1.style.padding="20px";
p1.style.backgroundColor="yellow";

div1.style.padding="20px";
div1.style.backgroundColor="red";

div1.addEventListener('click',eventoClic);
p1.addEventListener('click',eventoClic);
img1.addEventListener('click',eventoClic);
