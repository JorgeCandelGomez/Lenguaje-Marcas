function tablaMultiplicar(){
    let numero;
    do{
        numero=Number(prompt("Introduce un dígito [1-10]: "));
    }
    while(numero <1 || numero >10);

    document.write("<h2>Tabla del "+numero+"</h2>");
    document.write("<ul>");

    for(let i=1;i<=10;i++){
        let resultado=numero*i;
        document.write("<li>"+numero+" x "+i+" = "+resultado+"</li>");

    }

    document.write("</ul>");
    

    
}
tablaMultiplicar();