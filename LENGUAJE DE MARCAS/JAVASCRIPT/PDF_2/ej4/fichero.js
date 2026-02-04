function limpiarTexto(t1,t2){
    alert(t1.replace(t2,""));
}

function getTipoFichero(texto){
    texto=String(texto).toUpperCase();
    

    if(texto.endsWith("JPG")){
        alert("Archivo .jpg")
    }else if(texto.endsWith("PNG")){
        alert("Archivo .png")
    }else{
        alert("Formato no aceptado.")
    }
}

function matriculaValida(matricula){
    let patron=/^[0-9]{4}[A-Z]{3}$/;
    matricula=String(matricula).toUpperCase();

    if(patron.test(matricula)){
        alert("Matricula correcta.");
    }else{
        alert("Matricula no válida.")
    }
}

console.log(limpiarTexto("Hola mundo mundo", "mundo")); // Devuelve "Hola  "
getTipoFichero("foto.jpg"); 
matriculaValida("123ABC");