var n1=prompt("Introduce un número: ");
numero1=(parseInt(n1));

var n2=parseInt(prompt("Introduce otro núemro: "));

if(!isNaN(numero1)&& !isNaN(n2)){
    alert("Suma: "+(numero1+n2)+"\n"+
    "Resta: "+(numero1-n2)+"\n"+
    "Multiplicación: "+(numero1*n2)+"\n"+
"División: "+(numero1/n2))
    
}else
    alert("Alguno de los datos introducidos no son NÚMEROS!")

