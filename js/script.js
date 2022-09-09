let total = 0, op = 0, flag = false;

function boton(numero)
{
    if(flag)
    {
        limpiar();
    }
    document.getElementById("display").value += numero;   
    flag = false;
}

function sumar()
{
    if (total != isNaN)
    {
        total += parseFloat(document.getElementById("display").value);
        document.getElementById("display").value = total;
        console.log("Sumando " + total);
        flag = true;
        op = 1;
    }
}

function restar()
{
    if(total != isNaN)
    {
        total -= parseFloat(document.getElementById("display").value);
        document.getElementById("display").value = total;
        console.log("Restando " + total);
        flag = true;
        op = 2;
    }
}

function multiplicar()
{
    if(total != isNaN)
    {
        if(total == 0)
        {
            total = 1;
        }
        total *= parseFloat(document.getElementById("display").value);
        document.getElementById("display").value = total;
        console.log("Mutiplicando " + total);
        flag = true;
        op = 3
    }
}

function dividir()
{
    if(total == 0 && total != isNaN)
    {
        total = parseFloat(document.getElementById("display").value) / 1;
    }
    else
    {
        total /= parseFloat(document.getElementById("display").value);
    }

    document.getElementById("display").value = total;
    console.log("Dividiendo " + total);
    flag = true;
    op = 4;
}

function igual()
{
    switch (op) 
    {
        case 1:
            total += parseFloat(document.getElementById("display").value);
            break;
        case 2:
            total -= parseFloat(document.getElementById("display").value);
            break;
        case 3:
            total *= parseFloat(document.getElementById("display").value);
            break;
        case 4:
            total /= parseFloat(document.getElementById("display").value);
            break;
        default:
            break;
    }

    op = 0;
    document.getElementById("display").value = total;
    console.log(total);
    flag = true;
    total = 0;
    console.log("Se reinicia total con " + 0);
}

function ac()
{
    total = 0;
    console.log(total);
}

function limpiar()
{
    document.getElementById("calculadora").reset();
}