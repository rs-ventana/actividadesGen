/**
 * Los pasos son los mismos:
 * {} crear tarjetas
 * {} crear seccones
 * {} insertar en la tarjeta
 * {} mostrar en div container
 */
const CARDS_CONTAINER = document.querySelector(".card-container");

const USERS = [
    {
    id: 1,
    username: "booklover123",
    desc: "Avid reader and coffee enthusiast.",
    age: 29,
    fav_books: {
        books: [
            "To Kill a Mockingbird", 
            "1984", 
            "Pride and Prejudice"
        ],
    },
},
{
    id: 2,
    username: "literature_junkie",
    desc: "Poetry lover and amateur writer.",
    age: 35,
    fav_books: {
        books: ["The Great Gatsby", 
        "Invisible Man", 
        "Beloved"
    ],
    },
},
];

// crear secciones
function userSection(user){ // función para que se aplique a los users 
const card = document.createElement("div");
const name_section = document.createElement ("h3");
const desc_section = document.createElement ("p");
const age_section = document.createElement ("p");
const book_section = document.createElement("div");
// lista
const booklist= twoUsers.fav_books.books.map((e) =>{
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
});

// console.log(booklist);

// crear tarjeta vamos a usar el objeto,
name_section.textContent = user.username;
desc_section.textContent = user.desc;
age_section.textContent = user.age;
book_section.append(...booklist); // append permite varios nodos

card.append(name_section, desc_section, age_section, book_section); 
return card;
}


manyUsers.array.forEach(user => {
    const profileUser = userSection(user);
    tarjetaObj(profileUser);
});

