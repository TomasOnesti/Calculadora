const botones = document.querySelectorAll(".tecla");
sonido1 = new Audio("../sonido/click.mp3");
sonido2 = new Audio("../sonido/aceptado.mp3");      
botones.forEach(boton=>{
    boton.addEventListener("click", () =>{
        const valor = boton.textContent;
        nuevo_numeros(valor);
        sonido1.play();
    })
})

document.getElementById("igual").onclick = calculo;
document.getElementById("suma").onclick = suma;
document.getElementById("resta").onclick = resta;
document.getElementById("multiplicacion").onclick = multiplicacion;
document.getElementById("division").onclick = division;
document.getElementById("borrar").onclick = borrar;
document.getElementById("borrar_todo").onclick = borrartodo;

const numpantalla = document.getElementById("pantalla");

let num1 = "";
let num2 = "";
let operador = "";
let segundo = false;

function nuevo_numeros(numero){
    if(!segundo){
        if(numero === "." && num1.includes("."))return;
        num1 += numero;
        numpantalla.textContent = num1;
    }else{
        if(numero === "." && num2.includes("."))return;
        num2 += numero;
        numpantalla.textContent = num2
    }
}

function suma(){
    operador = "+";
    segundo = true;
    sonido1.play();
}

function resta(){
    operador = "-";
    segundo = true;
    sonido1.play();
}

function division(){
    operador = "/";
    segundo = true;
    sonido1.play();
}

function multiplicacion(){
    operador = "*";
    segundo = true;
    sonido1.play();
}

function calculo(){
    let resultado;

    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);

    if(operador == "+"){resultado = n1 + n2}
    if(operador == "-"){resultado = n1 - n2}
    if(operador == "/"){resultado = n1 / n2}
    if(operador == "*"){resultado = n1 * n2}

    numpantalla.textContent = resultado;
    num1 = resultado.toString();
    num2 = "";
    operador = "";
    segundo = false;
    sonido2.play();
}

function borrartodo(){
    num1 ="";
    num2 = "";
    operador = "";
    segundo = false;

    numpantalla.textContent="0";
    sonido1.play();
}

function borrar(){
    if(!segundo){
        num1 = num1.slice(0, -1);
        numpantalla.textContent = num1 || "0";
        sonido1.play();
    }else{
        num2 = num2.slice(0, -1);
        numpantalla.textContent = num2 || "0";
        sonido1.play();
    }  
}