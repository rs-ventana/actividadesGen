// Fetch
//
// POST

BASE_URL = 'https://pokeapi.co/api/v2/';

// Fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data));
*/

/// fetch async
const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
} // funciona


/// Obtener pokemon
const savePokemon = (pokemon) => { // convertir en JSON y guardarlo
    localStorage.setItem('currentPokeData', JSON.stringify(pokemon));
}

document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        savePokemon(pokemon); 
        console.log(pokemon.name);
    })
// por ahora, todo bien 

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeData');
    if(storedPokemon){ //agregar parse
        const pokemon = JSON.parse(storedPokemon);
        console.log(pokemon.name);
    } else {
        const storedId = localStorage.getItem('currentPokeId');
        const initialId = storedId ? parseInt(storedId) : 1;
        const pokemon = await fetchPokemon(initialId);
        savePokemon(pokemon); 
        console.log(pokemon.name);
    }
})


/// obtener el anterior
document.getElementById('previous-btn').addEventListener('click', async () => {
    const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
    const newId = Math.max(1, currentPokeId - 1);
    const pokemon = await fetchPokemon(newId);
    savePokemon(pokemon);
    console.log(pokemon.name);


/// obtener el siguiente
document.getElementById('next-btn').addEventListener('click', async () => {
    const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
    const newId = currentPokeId + 1;
    const pokemon = await fetchPokemon(newId);
    savePokemon(pokemon); 
    console.log(pokemon.name);
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
// - La info -> LocalStorage -> Fetch // 