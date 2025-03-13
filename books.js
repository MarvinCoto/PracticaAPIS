

// consultar la api de rick and morty utilizando fetch

const getBooksInfo = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) throw new Error('Error al obtener los datos');
        
        const data = await response.json();
        const cardsParent = document.getElementById('cards');
console.log( data.data)
        data.id.forEach(id => {
            const card = document.createElement('div');
            card.innerHTML = `
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
        

                    <div class="p-4">
                        <h2 class="text-xl font-bold mb-2">${id.title}</h2>

                        <p class="text-gray-700">${id.completed}</p>
                    </div>
                </div>  
            `;

            cardsParent.appendChild(card);
        });

    } catch (error) {
        console.error("Error:", error.message);
    }
};


const getBooksInfo2 = () => {
    fetch('https://dogapi.dog/api/v2/breeds')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
};

getBooksInfo();

getBooksInfo2();