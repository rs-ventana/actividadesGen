/**
 * Write a program that asks a user for the amount of seconds needed until an alarm (message)
 *  is executed alongside a text to show once those seconds have passed in real time.
 * Result example: "Time for bed after 10 seconds".
 * 
 * Requisitos
 * [] Preguntar la cantidad de segundos para la alarma 
 * [] despues de ese tiempo, muestre un mensaje
 *
 */

function cantidadSeconds() { // preguntar
    let seconds = Number(prompt("¿Cuántos segundos necesitas?"));
    return seconds;
}

function showText() { // mensaje
    console.log("Es tiempo de ir a dormir");
}

let time = cantidadSeconds(); 
console.log("Faltan:", time, "segundos para la alarma.");
setTimeout(showText, time * 1000); // al usar setTimeoutMultiplicar se necesita milisegundos

