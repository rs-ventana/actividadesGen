/** Positive dominance in Array
 * Write a function to determine if an array is positively dominant.
 * An array is positively dominant when the majority of its elements are positive.
 * Example:
 *  `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
 * 
 * Requisitos:
 * 
 * [] establecer la función 
 * [] encontrar los positivos dominantes- si positivos > negativos = true
 * [ ] calcular la mitad 
 * [] comparación booleana

*/

function arrayPD(arr) {
    let conteoD = 0; // conteo

    for (let num of arr) { // revisar el valor del i de array
        if (num > 0) {  // que sea positivo
            conteoD++; // de uno en uno
        }
    }

    return conteoD > arr.length / 2; // compara si es mayor a la mitad
}

console.log(arrayPD([-1, -3, 5, 4, 6767])); 

