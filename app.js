/*Pregunta al usuario qué día de la semana es. 
Si la respuesta es "Sábado" o "Domingo", muestra 
"¡Buen fin de semana!". De lo contrario, muestra 
"¡Buena semana!".*/

let diaSemana = prompt ("Que dia de la semana es:");
let Sábado = "Sábado";
let Domingo = "Domingo";

if (diaSemana == Sábado){
alert("¡Buen fin de semana!");
    }
else if (diaSemana == Domingo){
    alert("¡Buen fin de semana!");
}
else alert("¡Buena semana!");

/*Verifica si un número ingresado por el usuario es 
positivo o negativo. Muestra una alerta informativa.*/

let numero = prompt ("Ingresa un número");

if (numero >= 0){
    alert("Positivo para positivo");
}
else alert("Negativo para negativo");

/*Crea un sistema de puntuación para un juego. Si la 
puntuación es mayor o igual a 100, muestra 
"¡Felicidades, has ganado!". En caso contrario, muestra 
"Intentalo nuevamente para ganar.".*/

alert ("Conoce tu puntaje EXAMEN FINAL");
let nota = prompt ("Ingresa la nota que obtuviste la cual esta en una escala de 1 a 200");

if (nota >= 100){
    alert("¡Felicidades, has ganado!");
}
else alert("Intentalo nuevamente para ganar.");

/*Crea un mensaje que informe al usuario sobre el saldo 
de su cuenta, utilizando un template string para incluir
el valor del saldo.*/

alert("Bienvenido a AluraBank");
let saldo = 0;

alert (`Su saldo actual es: ${saldo}`);

/*Pide al usuario que ingrese su nombre mediante un 
prompt. Luego, muestra una alerta de bienvenida usando 
ese nombre.*/

let nombre = prompt ("Ingresa tu nombre:");
alert(`Bienvenido: ${nombre}`);
