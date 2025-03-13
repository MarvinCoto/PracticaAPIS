

// consultar la api de rick and morty utilizando fetch

const getRickAndMortyCharacters = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) throw new Error('Error al obtener los datos');
        
        const data = await response.json();
        const cardsParent = document.getElementById('cards');
console.log( data.results)
        data.results.forEach(results => {
            const card = document.createElement('div');
            card.innerHTML = `
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="${results.image}" alt="${results.name}" class="w-32 aspect-square object-cover">

                    <div class="p-4">
                        <h2 class="text-xl font-bold mb-2">${results.name}</h2>
                        <p class="text-gray-700">${results.status}</p>
                    </div>
                </div>  
            `;

            cardsParent.appendChild(card);
        });

    } catch (error) {
        console.error("Error:", error.message);
    }
};


const getRickAndMortyCharacters2 = () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
};

getRickAndMortyCharacters();

getRickAndMortyCharacters2();