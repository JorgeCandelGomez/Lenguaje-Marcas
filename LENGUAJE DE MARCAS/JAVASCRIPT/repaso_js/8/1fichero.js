window.addEventListener('load',function(){

    let boton=document.getElementById('cargarLista');
    let contenedor=document.getElementById('contenedorLista');

    boton.addEventListener('click',function(){
        let xhttp= new XMLHttpRequest();

        xhttp.onreadystatechange=function(){
            if (this.readyState== 4 && this.status== 200){
                
                contenedor.innerHTML= this.responseText;
            }
        }
        xhttp.open('GET',"prueba.php",true);
        xhttp.send();
    })


})