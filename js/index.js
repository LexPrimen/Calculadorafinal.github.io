
function limpiar(){
    document.getElementById('form').reset();
}

function sumar(){
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
   
    document.getElementById('resultado').innerHTML = x+y;

}
function multiplicar(){
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    
    document.getElementById('resultado').innerHTML = x*y;

}
function dividir(){
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = x/y;

}
function resta(){
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = x-y;

}

function borrar(){
    document.getElementById('borrar').reset()
}