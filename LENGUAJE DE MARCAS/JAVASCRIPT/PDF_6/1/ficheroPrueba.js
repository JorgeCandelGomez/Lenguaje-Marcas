window.addEventListener('load', function() {
    let form = document.getElementById("form1");

    // VALIDACIÓN LOGIN
    let login = document.getElementById("login");
    login.addEventListener("invalid", function() {
        if (this.validity.valueMissing) {
            this.setCustomValidity("El login es obligatorio");
        }
    });
    login.addEventListener("input", function() {
        this.setCustomValidity("");
    });

    // VALIDACIÓN NÚMERO DE HIJOS (Ejemplo de validación numérica)
    let nhijos = document.getElementById("nhijos");
    nhijos.addEventListener("invalid", function() {
        if (this.validity.rangeUnderflow) {
            this.setCustomValidity("El número de hijos no puede ser negativo");
        }
    });
    nhijos.addEventListener("input", function() {
        this.setCustomValidity("");
    });

    // MANEJO DEL BOTÓN ENVIAR
    let boton = document.getElementById("botonEnviar");
    boton.addEventListener("click", function() {
        // Al usar type="button", debemos llamar a reportValidity para que salten los globos de "invalid"
        if (form.reportValidity()) {
            let info = form.info.checked ? "Quiero información" : "No quiero información";
            
            alert("Login: " + form.login.value +
                  "\nHijos: " + (form.nhijos.value || 0) +
                  "\n" + info +
                  "\nHorario: " + (form.horario.value || "No seleccionado") +
                  "\nOperador: " + document.getElementById("operador").value);
        }
    });
});