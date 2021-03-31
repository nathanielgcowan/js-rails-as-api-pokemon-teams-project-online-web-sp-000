const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

function fetchTrainers() {
    fetch('http://localhost:3000/trainers')
    .then(response => {
        if (!response.ok) {
            throw Error("ERROR"); 
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const html = data.map(trainer => {
            return `
                <div class="card" data-id="${trainer.id}">
                <p>${trainer.name}</p>
                <button data-trainer-id="${trainer.id}">Add Pokemon</button>
                    <ul>
                        <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
                    </ul>
                </div>
            `;
        })
        .join('');
        document
            .querySelector('#app')
            .insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
        console.log(error);
    });
}

fetchTrainers();