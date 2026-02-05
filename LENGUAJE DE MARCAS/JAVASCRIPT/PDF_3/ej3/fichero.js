
let datos=[8,10,12,14,16];
let x=Number(prompt("Introduce un dígito"));

function arrayPar(x=2,datos){
    let resultado=datos.every(function(n){
        return n % x == 0; 
    })

    alert(resultado);
}

arrayPar(x,datos);