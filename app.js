var operandoa;
var operandob;
var operacion;

function init(){
//variables
var resultado = document.getElementById("resultado");
var dividir = document.getElementById("dividir");
var multiplicar = document.getElementById("multiplicar");
var resta = document.getElementById("resta");
var suma = document.getElementById("suma");
var igual = document.getElementById("igual");
var reset = document.getElementById("reset");
var cero = document.getElementById("cero");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
}

//eventos
cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
}
uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
}
reset.onclick = function(e){
    resetear ();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion ="+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion ="-";
    limpiar();
}
multiplicar.onclick = function(e){
    operandoa = resultado.textContent;
    operacion ="*";
    limpiar();
}
dividir.onclick = function(e){
    operandoa = resultado.textContent;
    operacion ="/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
resultado.textContent = "";
operandoa = 0;
operandob = 0;
operacion = "";
}
function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
        res = parseFloat(operandoa) + parseFloat(operandob)
        break;

        case "-":
        res = parseFloat(operandoa) - parseFloat(operandob)
        break;

        case "*":
        res = parseFloat(operandoa) * parseFloat(operandob)
        break;

        case "/":
        res = parseFloat(operandoa) / parseFloat(operandob)
        break;
       }
       resetear(); {
           resultado.textContent = res;
       }
    }
