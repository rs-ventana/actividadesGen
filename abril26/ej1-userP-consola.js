// de esta forma puedo responder en Bash :)
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function userProfile() { // Consultar y almacenar 
  rl.question('¿Cuál es tu nombre? ', (answer) => {
    let userName = answer;
    rl.question('¿Cuál es tu edad? ', (answer) => {
      let age = answer;
      rl.question('¿Cuáles son tus películas favoritas? Nota: sepáralas con una coma. ', (answer) => {
        let favoriteM = answer.split(",");
        showInfo({userName, age, favoriteM});
        rl.close();
      });
    });
  });
}

function showInfo(showUser) { // mostrar 
  console.log("Nombre: ", showUser.userName);
  console.log("Edad: ", showUser.age);
  console.log("Listado de películas favoritas: ");
  console.log("Películas favoritas:");
  showUser.favoriteM.map(movie => console.log(`${movie.trim()} es una de mis favoritas.`));
}

userProfile();
