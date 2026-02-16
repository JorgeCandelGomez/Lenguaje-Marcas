window.addEventListener('load',function(){
    alert("Hola");
//GRAFICO 1
    let datos={
        labels: ['Ex 1','Ex 2','Ex 3','Ex 4','Ex 5'],
        datasets:[
            {
                label:"Evolución de notas",
                borderColor: "blue",
                backgroundColor: "blue",
                data:[4,7,5,8,7]
            }]
    };

    let config={
        type: 'line',
        data: datos,
        options:{}
    }

    
    const grafico=new Chart(document.getElementById('grafico1'),config);

    let graficoDiv=document.querySelector('canvas');
        graficoDiv.style.height= "300px";
        graficoDiv.style.width= "500px";

    // FIN GRAFICO 1

    //GRAFICO 2

    let datos2={
            
        labels:['Aprobados','Suspendidos','No presentados'],
        
        datasets:
        [
            {
                
                backgroundColor: ['green','red','yellow'],
                borderColor: ['green','red','yellow'],
                data: [60,30,10]
            },
            
        ]
    }

    let config2={
        type: 'pie',
        data: datos2,
        options:{}

    }

    const grafico2=new Chart(document.getElementById('grafico2'),config2)

    let graficoDiv2=document.querySelectorAll('canvas');
        graficoDiv2[1].style.height= "500px";
        graficoDiv2[1].style.width= "700px";


    

    

})

