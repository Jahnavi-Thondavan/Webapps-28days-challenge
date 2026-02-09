// https://pokeapi.co/api/v2/pokemon?limit=20&offset=0

// let limit =20;
// let offset = 0;

// function fetchPokemonsList() {
//         fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
//             .then(res => res.json())
//             .then(data => {

//                 let cardsContainer = document.querySelector(".Pokecards");

//                 let html = "";

//                 for (let i = 0; i < data.results.length; i++) {
//                     const id = data.results[i].url.split("/").at(-2);

//                     html += `
//                         <div class="cards">
//                             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="pokemon1">
//                             <h3>${data.results[i].name}</h3>
//                             <button>Show Abilities</button>
//                         </div>
//                     `;
//                 }

//                 cardsContainer.innerHTML = html;
//             });
//     }

//     fetchPokemonsList();

//     function handleNext(){
//     offset += 1;
//     fetchPokemonsList();
// }

// function handlePrev(){
//     if(offset > 0){
//         offset -= 1;
//         fetchPokemonsList();
//     }
// }

// const TOTAL_POKEMONS = 1360;


// let limit = 20;
// let offset = 0;

// function fetchPokemonsList() {
//     fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
//         .then(res => res.json())
//         .then(data => {

//             let cardsContainer = document.querySelector(".Pokecards");
//             let html = "";

//             for (let i = 0; i < data.results.length; i++) {
//                 const id = data.results[i].url.split("/").at(-2);

//                 html += `
//                     <div class="cards">
//                         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="pokemon">
//                         <h3>${data.results[i].name}</h3>
//                         <button>Show Abilities</button>
//                     </div>
//                 `;
//             }

//             cardsContainer.innerHTML = html;
//         });
// }

// function updatePageText() {
//     const pageText = document.querySelector(".h2");

//     const currentPage = Math.floor(offset / limit) + 1;
//     const totalPages = Math.ceil(TOTAL_POKEMONS / limit);

//     pageText.textContent = `Page ${currentPage} of ${totalPages}`;
// }


// function handleNext() {
//     offset += limit;
//     fetchPokemonsList();
//     updatePageText();
// }

// function handlePrev() {
//     if (offset > 0) {
//         offset -= limit;
//         fetchPokemonsList();
//         updatePageText();
//     }
// }

// document.getElementById("next").addEventListener("click", handleNext);
// document.getElementById("prev").addEventListener("click", handlePrev);

// fetchPokemonsList();
// updatePageText();

// function toggleAbilities(id, button) {
//     const abilitiesDiv = button.nextElementSibling;

//     // if already visible → hide
//     if (abilitiesDiv.innerHTML !== "") {
//         abilitiesDiv.innerHTML = "";
//         button.textContent = "Show Abilities";
//         return;
//     }

//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         .then(res => res.json())
//         .then(data => {
//             let abilitiesHTML = "";

//             data.abilities.forEach(a => {
//                 abilitiesHTML += `<p>${a.ability.name}</p>`;
//             });

//             abilitiesDiv.innerHTML = abilitiesHTML;
//             button.textContent = "Hide Abilities";
//         });
// }


const TOTAL_POKEMONS = 1360;

let limit = 21;
let offset = 0;

function fetchPokemonsList() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json())
        .then(data => {

            let cardsContainer = document.querySelector(".Pokecards");
            let html = "";

            for (let i = 0; i < data.results.length; i++) {
                const id = data.results[i].url.split("/").at(-2);

                html += `
                    <div class="cards" data-id="${id}">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
                        <h3>${data.results[i].name}</h3>
                        <button class="ability-btn">Show Abilities</button>
                        <div class="abilites"></div>
                    </div>
                `;
            }

            cardsContainer.innerHTML = html;
        });
}

function updatePageText() {
    const pageText = document.querySelector(".h2");
    const currentPage = Math.floor(offset / limit) + 1;
    const totalPages = Math.ceil(TOTAL_POKEMONS / limit);
    pageText.textContent = `Page ${currentPage} of ${totalPages}`;
}

function handleNext() {
    offset += limit;
    fetchPokemonsList();
    updatePageText();
}

function handlePrev() {
    if (offset > 0) {
        offset -= limit;
        fetchPokemonsList();
        updatePageText();
    }
}

document.getElementById("next").addEventListener("click", handleNext);
document.getElementById("prev").addEventListener("click", handlePrev);

document.querySelector(".Pokecards").addEventListener("click", function (e) {
    if (!e.target.classList.contains("ability-btn")) return;

    const card = e.target.closest(".cards");
    const id = card.dataset.id;
    const abilitiesDiv = card.querySelector(".abilites");
    const button = e.target;

    if (abilitiesDiv.innerHTML !== "") {
        abilitiesDiv.innerHTML = "";
        button.textContent = "Show Abilities";
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => {
            let html = "";
            data.abilities.forEach(a => {
                html += `<p>${a.ability.name}</p>`;
            });
            abilitiesDiv.innerHTML = html;
            button.textContent = "Hide Abilities";
        });
});

fetchPokemonsList();
updatePageText();

