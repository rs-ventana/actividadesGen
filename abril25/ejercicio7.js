/**  Antipodal Average
 * Given an array, return a shorter array following these steps:
 * - Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
 * - Sum each number of the first part with the inverse numbers of the second part.
 * - Divide each number of the resulting array by 2.
 * 
 * Example:
 * - For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
 * 
 * []  separar el arreglo y tomar en cuenta los arr impares
 * []  sumar en este orden [1,2,3] + [3,2,1] 1+1, 2+2, y 3+3 
 * [] dividir entre dos cada indice 

*/



function antipodal(arr) {
    if (arr.length % 2 !== 0) {
        arr.splice(Math.floor(arr.length / 2), 1); // dividir y en su caso eliminar el impar
    }

    const resultadoArray = [];
    const mitadArray = Math.floor(arr.length / 2); // Encontrar la mitad
    for (let i = 0; i < mitadArray; i++) {
        let sum = arr[i] + arr[arr.length - 1 - i]; // Sumar los números en el orden especificado
        resultadoArray.push(sum / 2); // Dividir entre dos
    }
    return resultadoArray;
}

console.log(antipodal([1, 2, 3, 5, 22, 6, 8])); 
// Resultado esperado: [ 4.5, 4, 12.5 ]

