/**  Sum of Resistors in Series
 * Calculate the sum of all resistors connected in series.
 * Examples:
 * `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
 * `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
 * `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123
 * Note: This approach uses the absolute value of each resistance to ensure all values are positive.
 
 */


// [x] preparar constantes
// [] declarar la función para aceptar un array por parametro
// [] loop por el array
// [] tomar el valor abs de c/elemento
// [] sumar toso los valores absolutos 

const res1 = [-1, 5, 6, 3];
const res2 = [14, 3.5, 6];
const res3 = [8, 15 ,100];

function sumResistance (arr) {
    const arr2 = [];
    let res =0;
    arr.forEach((e) => arr2.push(Math.abs(e))); // valor absoluto
    arr2.forEach((e) => (res = res + e)); // suma
    console.log(`${res} ohms`);
}

// ahora el caso con for
function sumResistance2(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += Math.abs(arr[1]); // valor absoluto
    }
    return res;
}

sumResistance(res3);
const try2 = sumResistance2(res1);
console.log(`${try2}`);