let numero, flag, total; 

function borrar()
{
    document.getElementById("calculadora").reset();
}

function boton(num)
{
    document.getElementById("display").value += num;    
}

function sumar()
{
    numero = 
    parseFloat(document.getElementById("display").
    value); 
    borrar();
    flag = "+";
    //console.log = "voy a sumar cuando presionen igual";
}

function restar()
{
    numero = 
    parseFloat(document.getElementById("display").
    value); 
    borrar();
    flag = "restar";
    console.log = "voy a sumar cuando presionen igual";
}

function multiplicar()
{
    numero = 
    parseFloat(document.getElementById("display").
    value); 
    borrar();
    flag = "*";
    console.log = "voy a sumar cuando presionen igual";
}

function igual()
{
    if(flag == "+")
    {
        total = numero + parseFloat(document.
            getElementById("display").value);
        document.getElementById("display").value = total;
    }
    else if(flag == "restar")
    {
        total = numero - parseFloat(document.getElementById("display").value);
        document.getElementById("display").value = total;
    }
    else if(flag == "*")
    {
        total = numero * parseFloat(document.getElementById("display").value);
        document.getElementById("display").value = total;
    }
}

