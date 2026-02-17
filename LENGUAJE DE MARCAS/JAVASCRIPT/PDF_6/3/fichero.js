window.addEventListener('load',function(){
    let form=document.getElementById('formulario');
    let boton=document.querySelector('button');

    let login=document.getElementById('login');
    let pass1=document.getElementById('pass1');
    let pass2=document.getElementById('pass2');
    let email=document.getElementById('email');

    form.addEventListener('input',function(e){


        e.target.classList.remove('error-input');
        e.target.setCustomValidity('');
        e.target.style.backgroundColor="white";
    })


    const validarForm=function(e){
        let datosCorrectos=true;

        //validar login
        if (login.value === "" || login.value == null){
            login.setCustomValidity('Login obligatorio');
            login.style.backgroundColor="red";
            datosCorrectos=false;
        }


        //validar patrón contraseña
        let regexp=/^[a-zA-Z0-9]{8,}/;
        let p1=form.pass1;
        let p2=form.pass2;

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
        /*
        if(pass1.value ==="" || pass1.value ==null){
            pass1.setCustomValidity('Contraseña obligatoria');
            pass1.style.backgroundColor="red";
            datosCorrectos=false;
        }else if (!patron.test(pass1.value)){
            pass1.setCustomValidity('Formato incorrecto');
            pass1.style.backgroundColor="red";
            datosCorrectos=false;
        }

        if(pass2.value ==="" || pass2.value ==null){
            pass2.setCustomValidity('Contraseña obligatoria');
            pass2.style.backgroundColor="red";
            datosCorrectos=false;
        }else if (!patron.test(pass2.value)){
            pass2.setCustomValidity('Formato incorrecto');
            pass2.style.backgroundColor="red";
            datosCorrectos=false;
        }

        //validar contraseñas iguales

        if (!compararContraseñas(pass1.value,pass2.value)){
            pass1.setCustomValidity('Las contraseñas no coinciden');
            pass2.style.backgroundColor="red";
            datosCorrectos=false;
        }

        */

        //validar email
        let pattern=/^[\w-\.]{3,}@ejemplo\.com$/;

        if (email.value === "" || email.value == null){
            email.setCustomValidity('Email obligatorio');
            email.style.backgroundColor="red";
            datosCorrectos=false;
        }else if (!pattern.test(email.value)){
            email.setCustomValidity('Necesitas email corporativo.');
            email.style.backgroundColor="red";
            datosCorrectos=false;
        }




        if(!datosCorrectos){
            e.preventDefault();
            form.reportValidity();

        }else{
            alert("Enviando datos...");
        }
    }



    
   

    boton.addEventListener('click',validarForm);
})