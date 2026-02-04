function calcularPrecio(nombre="Producto Genérico",precio=100,iva=21){
    nombre= String(nombre);
    precio=Number(precio);
    iva=Number(iva);
    
    if(isNaN(precio) || isNaN(iva)){
        alert("Datos incorrectos")
    }else{
        alert("Nombre: "+nombre+"\n"+
            "Precio final: "+(precio+(precio*(iva/100)))
        )
    }
}

calcularPrecio();
calcularPrecio("Laptop", 800, 10); // Valores personalizados
calcularPrecio("Error Test", "hola", 21);