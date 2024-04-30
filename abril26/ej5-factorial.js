/**
 * Write a program that prompts for an intenger number n. 
 * Where  1 <= n. 
 * Solve this using recursion.
 * 
 *  Requisitos: 
 * {} pedir un numero entero. es decir, que no sea decimal, y 1 <= n
 * {}  Crear una condición que si n < 1 vuelva al inicio. 
 *
 * Recursión es una función que termina una vez que se cumplen las condiciones, en este caso si le doy un numero menor a 1 o negativo continuará hasta que cumpla =>1
 */



function numEntero() { 
    let numero = parseFloat(prompt("¿Qué número quieres obtener su factorial?"));

    while (isNaN(numero) || numero < 1 || !Number.isInteger(numero)) { // que no sea un string, que cumpla la condicion del valor y que sea un entero
        numero = parseFloat(prompt("Por favor, ingresa un número entero mayor o igual a uno:"));
    }

    function factorial(n) { // función recursiva que calcula el factorial
        if (n === 0 || n === 1) { // como 0 y 1 son 1 en factorial
            return 1; 
        } else { // en otros casos multiplicar. 
            return n * factorial(n - 1);
        }
    }

    let resultado = factorial(numero);
    console.log("El factorial de " + numero + " es: " + resultado);
}

numEntero();
