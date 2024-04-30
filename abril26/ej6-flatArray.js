/**
 * Write a program that takes the following nested matrix and flattens it (makes it a 1D array). 
 * Use any type of algorithm you want like callbacks, recursion, etc.. 
 * 
 * let multiDimension = [1, [2, 3, [4, 5, [6]]]];
 * 
 * una nested matrix es una matriz, no necesariamente "balanceada", son varios array organizados de forma deliberada. 
 * 
 * Requisitos:
 * 
 * {} tener una nested matrix
 * {}  separalas y unir, 
 * {} imprime el resultado
 * 
 */

let nestedM = [1, [2, 3, [4, 5, [6]]]]
let flat1 = nestedM.flat(1);
console.log(flat1); 
/**
 * el parametro de flat () indica el nivel de profundidad. 
 * Este se calcula por el numero de [], en este caso son 4. 
 * Entonces si recibe un parametro 1, el resultado es: [1, 2, 3, Array(3)], 
 * es decir quedan 3 array dentro. 
 */

let flat4 = nestedM.flat(4);
console.log(flat4); 
// y con una profundidad de 4, el resultado es [1, 2, 3, 4, 5, 6]. 
