window.addEventListener('load',function(){

    let form=document.getElementById('form3');
    let boton=document.getElementById('botonEnviar');

    form.addEventListener('input', function(e) {
        e.target.classList.remove('error-input');
        e.target.setCustomValidity(""); // Limpiamos el error de HTML5
        e.target.style.backgroundColor="white";
    });

     let validarForm=function(e){
        let datosCorrectos=true;


        if(form.login.value.trim() === ""|| form.login.value== null){
            form.login.setCustomValidity("Login obligatorio");
            //form.login.classList.add('error-input');
            form.login.style.backgroundColor="red";
            datosCorrectos=false;
        }

        let p1=form.pass1;
        let p2=form.pass2;
        let regexp=/^[A-Za-z0-9]{8}$/;
//          /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/ la buena.



           
        if (!regexp.test(p1.value)){
            form.pass1.setCustomValidity("Formato de contraseña inválido.");
           // form.pass1.classList.add('error-input');
            datosCorrectos=false;
            form.pass1.style.backgroundColor="red";
            
        }else if(form.pass1.value !== form.pass2.value){
            p2.setCustomValidity("Contraseñas no coincidentes");
           // form.pass1.classList.add('error-input');
            datosCorrectos=false;
            p2.style.backgroundColor="red";
        
        }else{
            p1.setCustomValidity("");
            p2.setCustomValidity("");
            p1.style.backgroundColor="white";
            p2.style.backgroundColor="white";
        }


        let regexEmail=/^[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}$/;
        

        if(form.email.value===""){
            form.email.setCustomValidity("Email obligatorio.");
           // form.email.classList.add('erro-input');
            datosCorrectos=false;
            form.email.style.backgroundColor="red";
        }else if(!regexEmail.test(form.email.value)){
            form.email.setCustomValidity("Formato incorrecto.");
           // form.email.classList.add('erro-input');
            datosCorrectos=false;
            form.email.style.backgroundColor="red";
        }else{
            form.email.setcustomValidity("");
        }


        


        if(!datosCorrectos){
            e.preventDefault();
            form.reportValidity();
        }else
            alert("Enviando datos...");
    }

    boton.addEventListener('click',validarForm);

   

})