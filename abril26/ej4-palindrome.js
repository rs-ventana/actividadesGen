/**
 * Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). 
 * Figure out if the sentence/word is a palindrome or not. 
 * Ignoring punctuation, spaces and capitalized letters.
 * 
 * Requerimientos:
 * {} pedir una palabra/oración
 * {} ignorar, puntuación, los espacios y mayúsculas (pasar a minisculas ) y luego comprobar que sin esos elementos, 
 * {} ordenados al reves 
 * {} averiguar si es palindromo 
 * {} responder true/false 
 * pasos:
 * ¿La siguiente palabra es palindromo? palabra; si/no
 */


function palindrome (sentence) {
    let sentenceOriginal = sentence.toUpperCase().replace(/[\W_]/g, '');  // convierte a mayusculas, busca y borra caracteres que no sean string o number o guiones. 
    let sentenceReves = sentenceOriginal.split("").reverse("").join(""); // separa, invierte y ahora une.
    return sentenceOriginal === sentenceReves; // evalua si es el mismo valor y tipo
}

let ejemplo = palindrome(prompt("Ingrese una palabra o frase para verificar si es un palíndromo:"));

if (ejemplo){ // sino es imprime
    console.log("Es palíndromo");
} else {
    console.log("No es palindromo.");
}