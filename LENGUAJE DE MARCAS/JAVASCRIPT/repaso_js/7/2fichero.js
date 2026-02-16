window.addEventListener('load',function(){
    let textoFecha=prompt("Fecha nacimiento");
    let fechaNacimiento= moment(textoFecha, "dd/MM/YYYY");

    

    let edad=moment().diff(fechaNacimiento,'years');
    alert("Tienes "+edad+" años");


    let proximoCumple=moment(fechaNacimiento).year(moment().year());

    if (proximoCumple.isBefore(moment())){
        proximoCumple.add(1,'years');
    }

    let diasRestantes=moment().diff(proximoCumple,'days');


    alert("Quedan "+(diasRestantes*-1)+" hasta tu cumpleaños");
})