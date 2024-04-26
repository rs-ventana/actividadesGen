/**Array of Multiples
 * Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 * Examples:
 * `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
 * `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 * 
 * [] recibe dos parametros 
 * usaremos push method
 * 
 */

function ofMultiples (num, len){
    const arrMultiples = [];
    for (let i=1; i < len; i++) { // desde 1, para que no salga cero
        arrMultiples.push(num * i);
    }
    return arrMultiples;
}

let num = 19;
let len = 11;
let num2 = 3.14
let len2 = 11;
console.log(ofMultiples(num,len));
// resultado: [19,  38,  57,  76, 95, 114, 133, 152, 171, 190]
// son once numeros porque empieza en 1 
console.log(ofMultiples(num2,len2));
// [3.14, 6.28, 9.42, 12.56, 15.700000000000001, 18.84, 21.98, 25.12, 28.26, 31.400000000000002 ]
