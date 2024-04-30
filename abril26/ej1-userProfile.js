/**
 * Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
 * Store the information and then showcase it in the console. 
 * Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
 * Requisitos
 * [] Preguntar los datos
 * [] guardar y mostrar en la consola
 * [] la salida debe mostrar el mensaje especificado

*/


function userProfile() { // Consultar y almacenar
    let userName, age, favoriteM;
    userName = prompt("¿Cuál es tu nombre?");
    age = prompt("¿Cuál es tu edad?");
    favoriteM = prompt("¿Cuáles son tus películas favoritas? Nota: sepáralas con una coma. ").split(",");
    return {
        userName: userName,
        age: age,
        favoriteM: favoriteM
    };
}

function showInfo(showUser) { // showcase
    console.log("Nombre: ", showUser.userName);
    console.log("Edad: ", showUser.age);
    console.log("Listado de películas favoritas: ");
    showUser.favoriteM.map(movie => console.log(`The film "${movie.trim()} " is one of my favorites`));
}

let userData = userProfile(); 
showInfo(userData);


