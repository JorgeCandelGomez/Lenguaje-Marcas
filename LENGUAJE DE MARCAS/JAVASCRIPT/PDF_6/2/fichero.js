window.addEventListener('load',function(){

    

    let boton=document.getElementById('botonEnviar');
    let form=document.getElementById('form2');

    const validarFormulario=function(e){
        let formularioCorrecto=true;

        if (form.edad.value === ""){
            formularioCorrecto=false;
            alert("Introduce un número válido");

        }else if(form.edad.value < 0 || form.edad.value>200){
            formularioCorrecto=false;
            alert("[0-200]");
        
        }else if(!/^\d{4}$/.test(form.nacimiento.value)){
            alert("Formato de año nacimiento no válido.");
            formularioCorrecto=false;
        }else if(form.provincia.selectedIndex == null || form.provincia.selectedIndex == 0){
            alert("Provincia no seleccionada");
            formularioCorrecto=false;
        }
    

        if(!formularioCorrecto){
            e.preventDefault();
            alert
        }else
             alert("Enviando datos...");
            
    }

    boton.addEventListener('click',validarFormulario)





})