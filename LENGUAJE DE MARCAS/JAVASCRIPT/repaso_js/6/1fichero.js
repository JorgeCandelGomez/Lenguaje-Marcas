window.addEventListener('load',function(){
/*
    let login=document.getElementById('login');
    let nhijos=document.getElementById('nhijos');
    let info=document.getElementById('info');

    let horarios=document.getElementsByClassName('campo radio-group')
    let inputsHorarios=horarios.querySelectorAll('input');

    let operador=document.getElementById('operador');
    */
    let formulario=document.getElementById('form1');
    let botonEnviar=document.getElementById('btnEnviar');

    botonEnviar.addEventListener('click', function(){
        
        if(formulario.nhijos.value == ""){
            formulario.nhijos.value=0;
        }

        let login="";

        if (formulario.login.value===""){
            login="No introducido"
        }else
            login=formulario.login.value;
        let numHijos=formulario.nhijos.value
        let info=""

        if (formulario.info.checked){
            info="Desea recibir información."
        }else{
            info="No desea recibir información."
        }

        let horario=formulario.horario.value;
        let mensajeHorario="";
        if(horario){
            mensajeHorario=horario;
        }else{
            mensajeHorario="No elegido."
        }

        let operador="";
        if(formulario.operador.value== "Seleccione una opcion"){
            operador="No seleccionado";
        }else
            operador=formulario.operador.value;

        


        alert("Login: "+login+"\nTienes "+numHijos+" hijos.\n"
                +info+"\n"+"Horario: "+mensajeHorario+"\n"
                +"Operador: "+operador);
        
    })

})