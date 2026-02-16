window.addEventListener('load',function(){

    let boton=document.getElementById('botonEnviar');
    let form=document.getElementById('form1');

    boton.addEventListener('click',function(){

        if(form.nhijos==="")
            form.nhijos.value=0;
        let info="";
        if (form.info.checked)
            info="Quiero recibir información"
        else
            info="No quiero recibir información"

        alert("Login: "+ form.login.value+
                "\nHijos: "+form.nhijos.value+
                "\n"+info+
                "\nHorario: "+form.horario.value+
                "\nOperador: "+form.operador.value
        )
    })
       
 

})


