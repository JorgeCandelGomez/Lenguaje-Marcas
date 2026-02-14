
let mostrarInformacion=function(){
    let formulario=document.getElementById("form1");

     let login = formulario["login"].value;

    if(formulario["nhijos"].value ===""){
        formulario["nhijos"].value= 0;

    }
    let hijos = formulario["nhijos"].value;
    
    let info=""
    if (formulario["info"].checked){
        info="Desea recibir información."
    }else{
         info="No desea recibir información."
    }

    let campoHorario = formulario.querySelector('input[name="horario"]:checked');
    let horario = campoHorario ? campoHorario.id : "no seleccionado";

    let lista=document.getElementById("operador")
    let operador=lista.value;

    alert("Login: "+login+"\n"+
        "Número hijos: "+ hijos+"\n"+
        info+"\n"+
        "Has elegido el horario de "+horario+"\n"+
        "Has elegido el operador "+operador)
    

    
    

    

}




let boton = document.querySelector('input[type="button"]');
boton.addEventListener("click", mostrarInformacion);