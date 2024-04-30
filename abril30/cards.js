/**
 * {} crear tarjetas
 * {} secciones para tarjetas
 * {} img
 * nomb, des, age, lista de caja
 * insertar tarjeta
 * mostror en div.container
 */


// aqui van las globales
const CARDS_CONTAINER = document.querySelector("#card-container");

const USER = {
    id: 1,
    username: "user name",
    desc: "sobre  mi",
    age: 26,
    fav_books: {
        books: [
            "canito",
            "mac 2", 
            "canito 3", 
            "canito 4",
            "canito 5",
        ],
    },
};




// crear secciones
const card = document.createElement("div");
const name_section = document.createElement ("h3");
const desc_section = document.createElement ("p");
const age_section = document.createElement ("p");
const book_section = document.createElement("div");
// lista
const booklist= USER.fav_books.books.map((e) =>{
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
});

console.log(booklist);

// crear tarjeta vamos a usar el objeto
name_section.textContent = USER.username;
desc_section.textContent = USER.desc;
age_section.textContent = USER.age;
book_section.append(...booklist); // append permite varios nodos
card.append(name_section, desc_section, age_section, book_section); 

// inyectar en el container 
CARDS_CONTAINER.appendChild(card); // inserta un nodo