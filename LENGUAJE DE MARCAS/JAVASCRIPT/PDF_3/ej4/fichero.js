let array=[-5,8,0,10,-3,-1,-10,4];

function filtrarPositivos(array){

    let soloPositivos=array.filter(n => n>0);
   

    soloPositivos=soloPositivos.map(n=> Math.pow(n,2))

    alert(soloPositivos);
}

filtrarPositivos(array);