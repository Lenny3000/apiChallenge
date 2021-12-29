/* Pokemon App Notes

The User will press a button to get their Pokemon data
When pressed, the button will fetch the Pokemon data.
Display the Pokemon data in the Document.

*/

const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

//Get the button that user will interact with
let buttonElement = document.getElementById('get-pokemon');
let searchElement = document.getElementById('myInput');
// Grab the area where the results will be displayed
let resultsElement = document.getElementById('results');

function displayPokemonData(name, height, weight) {
    // Clear previous results
    resultsElement.innerHTML = ''
    let nameElement = document.createElement('p');
    let heightElement = document.createElement('p');
    let weightElement = document.createElement('p')
    //let imageElement = document.createElement('img')

    nameElement.innerText = name;
    heightElement.innerText = height;
    weightElement.innerText = weight;
    //imageElement.

    resultsElement.appendChild(nameElement);
    resultsElement.appendChild(heightElement);
    resultsElement.appendChild(weightElement);
}

function fetchPokemon(pokemonName) {
    let url = `${ baseURL }${ pokemonName }`;
    fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            let name = jsonData.name
            console.log(name)
            let height = jsonData.height
            console.log(height)
            let weight = jsonData.weight
            console.log(weight)

            displayPokemonData(name, height, weight);
        })
}

buttonElement.addEventListener('click', () => {
    var input = document.getElementById("myInput").value;
    fetchPokemon(input);
});

searchElement.addEventListener('keyup', (event) => {
    console.log(event.target.value);
   

});