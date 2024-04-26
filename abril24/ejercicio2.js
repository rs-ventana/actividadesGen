/**
 * Number divided into halves
 * Given a number, return the number divided into its halves in an array.
 * Examples:
 * `numDiv(4)` should return `[2, 2]`.
 *  `numDiv(10)` should return `[5, 5]`.
 * 
 * Requisitos :
 * [] Obtener mitad de un numero
 * [] agregar un array
 * [] x2
 * [] Regresar el array final
 */

const n = 4;
const n2 = 56;

function numDiv(num){
    let res = [];
    const half = num / 2;
    res.push(half);
    res.push(half);
    return res;
}

console.log(numDiv(n2));