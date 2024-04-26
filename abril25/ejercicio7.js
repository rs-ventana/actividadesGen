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


function antipodal (arr) {
    const arrMitad = Math.floor(arr.length/2); // floor redondeo hacia abajo
    const primeraMitad = arr.slice(0, arrMitad);  // slice regresa los elementos seleccionados en un nuevo arreglo, sustraemos "y"
    
    
    for 
    const segundaMitad = arr.slice(-arrMitad);
    const sumaOrden =primeraMitad.map((num, i)=> num (1/segundaMitad[i]));//map crea una nueva matriz 
    const res = sumaOrden.map(num => num/2); // dividir 
    return res;
}

const arreglo = [1,2,3,5,22,6]
const resFinal = antipodal(arr);
console.log(resFinal);


