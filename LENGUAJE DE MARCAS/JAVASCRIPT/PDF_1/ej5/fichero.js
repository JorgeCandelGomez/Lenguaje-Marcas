let n1=Number(prompt("Introduce un número: "));
let n2=Number(prompt("Introduce otro número: "));

if(n1>n2)
    for(let i=n1;i>=n2;i--)
        console.log(i);

else if(n1<n2)
    for(let i=n1;i<=n2;i++)
        console.log(i);
else
    console.log("Ambos son iguales.")    