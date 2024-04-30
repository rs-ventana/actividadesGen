// DOM api
// OBTENER EL POR ID

const div1 = document.getElementById("div-1");
console.log(div1);

const divCollection = document.getElementsByTagName("div");
console.log(divCollection);

// si es solo uno, entonces no es división

const p = document.getElementById("p1");
const usernameInputs = document.getElementsByName ("username");
const usernameInput = usernameInputs[0];

console.log(p, usernameInput);

// Eventos:

usernameInput.addEventListener("input", (event) => {
    console.log(event.target.value);
    p.innerText = event.target.value;
});

// target: donde sucede el evento

// mandar a p para que el usuario lo vea

