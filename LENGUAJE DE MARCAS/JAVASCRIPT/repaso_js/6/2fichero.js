window.addEventListener('load',function(){


    
    let form=document.getElementById('form2');
    let botonEnviar=document.getElementById('botonEnviar');


    let validarFormulario=function(e){
            let datosCorrectos=true;

            // 1. LOGIN: Si falla aquí, salta al "if(!datosCorrectos)" y no mira el resto
        if (form.login.value.trim() === "") {
            datosCorrectos = false;
            alert("Error en login");
        } 
        // 2. EDAD: Solo entra aquí si el login era correcto
        else if (form.edad.value === "" || (form.edad.value < 0 || form.edad.value > 200)) {
            datosCorrectos = false;
            alert("Error en edad");
        } 
        // 3. NACIMIENTO: Solo entra aquí si todo lo anterior estaba bien
        else if (!/^\d{4}$/.test(form.nacimiento.value)) {
            datosCorrectos = false;
            alert("Error en nacimiento");
        } 
        // 4. PROVINCIA: El último filtro
        else if (form.provincia.selectedIndex === 0) {
            datosCorrectos = false;
            alert("Error en provincia.");
        }

        // --- SALIDA FINAL ---
        if (!datosCorrectos) {
            e.preventDefault(); // Si algo falló, frena el envío
        } else {
            alert("Todo correcto, enviado...");
        };
        };
    botonEnviar.addEventListener('click',validarFormulario);
})