/**
 * Los pasos son los mismos:
 * {} crear tarjetas
 * {} crear seccones
 * {} insertar en la tarjeta
 * {} mostrar en div container
 */
const CARDS_CONTAINER = document.querySelector("#card-container");
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
function userSection(){  // función para que se aplique a los users 
    const cardObj ={     // desde la función es más sencillo crear las secciones
        name_section: document.createElement ("h3"),
        desc_section: document.createElement ("p"),
        age_section: document.createElement ("p"),
        book_section: document.createElement("div"),
    };
    return cardObj;
}

// crear tarjeta
function injectData (obj, user){
    const booklist= user.fav_books.books.map((e) =>{
        const item = document.createElement("ul");
        item.textContent = e;
        return item;
});
obj.name_section.textContent = user.username;
obj.desc_section.textContent = user.desc;
obj.age_section.textContent = user.age;
obj.book_section.append(...bookList);
renderCard(obj);
}

// crear tarjeta vamos a usar el objeto,
function renderCard(cardObj){
    const card = document.createElement("div");
    card.append (
        cardObj.name_section,
        cardObj.desc_section,
        cardObj.age_section,
        cardObj.book_section,
    );
    card.className = "div-creado";
    CARDS_CONTAINER.appendChild(card);
}
USERS.forEach((user) => {
    const cardData = userSection ();
    injectData(carData, user);
});

