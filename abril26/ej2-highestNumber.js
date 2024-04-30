/**
 * Write a program that asks for 10 numbers. 
 * Using logical operators and any other javascript functions/structures you've seen before,
 *  determine and output the highest of those numbers.
 * [] Preguntar 10 numeros
 * [] formular condiciones para evaluar 
 * [] encontrar el mayor
 */


function tenNumbers() { // pedir los diez numeros, en formato correcto
    let numbers = [];
    for (let i = 1; i <= 10; i++) {
        numbers.push(Number(prompt("Dame un número"))); // 
    }
    return numbers;
}

let numArray = tenNumbers();  // ordenar 
numArray.sort((x, y) => x - y); // usar los elementos contiguos 


let numHighest = numArray[numArray.length - 1]; // mostrar el ultimo elemento
console.log("Los números son:", numArray);
console.log("El número mayor es:", numHighest);
