let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
pass1.addEventListener("input", validarPass);
pass2.addEventListener("input", validarPass);


function validarPass()
{
if (pass1.value != pass2.value)
pass2.setCustomValidity("Los passwords no coinciden");
else
pass2.setCustomValidity("");
}



let login = document.getElementById("login");
login.addEventListener("invalid", function() {
this.setCustomValidity("El login es obligatorio");
});
login.addEventListener("input", function() {
this.setCustomValidity("");
});


let email = document.getElementById("email");
email.addEventListener("invalid", function() {
if (email.validity.valueMissing)
email.setCustomValidity("El e-mail no puede estar vacío");
else if (email.validity.typeMismatch)
email.setCustomValidity("El formato de email no es correcto");
});
email.addEventListener("input", function() {
email.setCustomValidity("");
});



