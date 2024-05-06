// Fetch
//
// POST

const BASE_URL = 'https://pokeapi.co/api/v2/';

// Fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data));
*/
// fetch async

const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

// guardar el pokemon
const savePokemon = (pokemon) => {
    localStorage.setItem('currentPokeData', JSON.stringify(wartotle));

// Obtener pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        savePokemon(pokemon); // revisar
        console.log(pokemon.name); 
    })


/** 
// obtener el anterior
document.getElementById('previous-btn').addEventListener('click', async () => {
    const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
    const newId = Math.max(1, currentPokeId - 1);
    const pokemon = await fetchPokemon(newId);
    savePokemonToLocalStorage(pokemon); // Guardar el Pokémon en localStorage
    console.log(pokemon.name);
})

document.addEventListener('DOMContentLoaded', async () => {
    const storedData = localStorage.getItem('currentPokeData');
    if (storedData) {
        const pokemon = JSON.parse(storedData);
        console.log(pokemon.name);
    } else {
        const storedId = localStorage.getItem('currentPokeId');
        const initialId = storedId ? parseInt(storedId) : 1;
        const pokemon = await fetchPokemon(initialId);
        savePokemonToLocalStorage(pokemon); // Guardar el Pokémon en localStorage
        console.log(pokemon.name);
    }
})

// obtener el siguiente

document.getElementById('next-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = currentPokeId + 1;
        const pokemon = await fetchPokemon(newId);
        console.log(pokemon);
    })



////////////////// POST
//

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'title1',
        body: 'Lorem ipsum dolor sit amet',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
    .then(json => console.log(json))


/////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch


 */