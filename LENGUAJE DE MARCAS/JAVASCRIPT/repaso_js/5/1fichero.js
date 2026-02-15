let doblarTamanyo=function(){
    this.style.width="200px";
    this.style.height="200px";
}

let volverOriginal=function(){
    this.style.width="100px";
    this.style.height="100px";
}
let img1=document.getElementById('img1');
let img2=document.getElementById('img2');
let img3=document.getElementById('img3');

img1.addEventListener('mouseenter',doblarTamanyo)
img1.addEventListener('mouseout',volverOriginal)

img2.addEventListener('mouseenter',doblarTamanyo)
img2.addEventListener('mouseout',volverOriginal)

img3.addEventListener('mouseenter',doblarTamanyo)
img3.addEventListener('mouseout',volverOriginal)