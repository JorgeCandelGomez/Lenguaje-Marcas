window.addEventListener('load',function(){

    let form = document.getElementById('formulario');
    let login=document.getElementById('login');
    let pass1 = document.getElementById('pass1');
    let pass2 = document.getElementById('pass2');
    let email = document.getElementById('email');

    //Validación login
    login.addEventListener('invalid',function(){
        login.style.backgroundColor="red";

        if(login.validity.valueMissing){
            login.setCustomValidity('Login obligatorio');
            
        }

        
    })

    login.addEventListener('input',function(){
        login.setCustomValidity('');
        login.style.backgroundColor="white";
    })


    //Validación contraseñas

    pass1.addEventListener('invalid',function(){
        pass1.style.backgroundColor="red";
        if(pass1.validity.valueMissing)
            pass1.setCustomValidity('contraseña obligatoria');
        else if(pass1.validity.patternMismatch)
            pass1.setCustomValidity('Formato incorrecto.');
    })

    pass1.addEventListener('input',function(){
        pass1.setCustomValidity('');
        pass1.style.backgroundColor="white";
    })


    pass2.addEventListener('invalid',function(){
        pass2.style.backgroundColor="red";

        if(pass2.value !==pass1.value)
             pass2.setCustomValidity('Las contraseñas no coinciden');

    })

    pass2.addEventListener('input',function(){
        if(pass2.value !==pass1.value)
             pass2.setCustomValidity('Las contraseñas no coinciden');
        else{
            pass2.setCustomValidity('');
            
        }
        pass2.style.backgroundColor="white";
        
    })

    //validar email
    email.addEventListener('invalid',function(){
        email.style.backgroundColor="red";
        if(email.validity.valueMissing){
            email.setCustomValidity('Email obligatorio');
        }else if(email.validity.patternMismatch){
            email.setCustomValidity('Solo email corporativo');
        }else if(email.validity.typeMismatch){
            email.setCustomValidity('Formato de email erróneo');
        }
    })

    email.addEventListener('input',function(){
        email.setCustomValidity("");
        email.style.backgroundColor="white";
    })
})