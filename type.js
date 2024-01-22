document.addEventListener('DOMContentLoaded', (event) => {
    // Array of countries
    const countries = [
        "Lagos", "Cairo", "Kinshasa", "Johannesburg", "Nairobi", "Addis Ababa", "Casablanca", "Cape Town", "Durban", "Alexandria", "Tunis", "Dakar", "Accra", "Kampala", "Algiers", "Dar es Salaam", "Abidjan", "Rabat", "Maputo", "Luanda",
        "Tokyo", "Delhi", "Shanghai", "Beijing", "Mumbai", "Dhaka", "Seoul", "Jakarta", "Bangkok", "Manila", "Karachi", "Osaka", "Riyadh", "Taipei", "Kuala Lumpur","Singapore", "Ho Chi Minh City", "Hong Kong", "Baghdad", "Dubai",
        "London", "Paris", "Berlin", "Madrid", "Rome", "Moscow", "Amsterdam", "Istanbul", "Stockholm", "Vienna", "Prague", "Warsaw", "Budapest", "Barcelona", "Munich", "Milan", "Brussels", "Athens", "Lisbon", "Copenhagen", "Cádiz", "Toledo", "Burgos",
        "New York City", "Los Angeles", "Toronto", "Chicago", "Mexico City", "Vancouver", "Montreal", "San Francisco", "Miami", "Washington, D.C.", "Atlanta", "Houston", "Dallas", "Seattle", "Boston", "San Diego", "Philadelphia", "Ottawa", "Denver", "Havana",
        "São Paulo", "Buenos Aires", "Rio de Janeiro", "Bogotá", "Lima", "Santiago", "Caracas", "Brasília", "Quito", "Montevideo", "Medellín", "Asunción", "La Paz", "Belo Horizonte", "Guayaquil", "Porto Alegre", "Salvador", "Cali", "Recife", "Santa Cruz",
        "Sydney", "Melbourne", "Brisbane", "Perth", "Auckland", "Adelaide", "Gold Coast", "Canberra", "Wellington", "Christchurch", "Newcastle", "Hobart", "Geelong", "Townsville", "Cairns", "Darwin", "Toowoomba", "Ballarat", "Bendigo", "Albury"
    ];

    function getRandomCountries(arr, num = 2) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    const random_countries = getRandomCountries(countries);
    
    const phrases = [...random_countries, "World!<br>I am Esteban Sánchez,<br><strong>lead data scientist.</strong>"];
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let baseText = "Hello ";
    let isDeleting = false;
    let typewriterElement = document.getElementById('typewriter');

    function type() {
        if (i < phrases.length) {
            // Logica para escribir la frase actual
            if (!isDeleting && j <= phrases[i].length) {
                currentPhrase.push(phrases[i][j]);
                j++;
                typewriterElement.innerHTML = baseText + currentPhrase.join('');
            }

            // Lógica para borrar la frase actual
            if(isDeleting && j <= phrases[i].length) {
                currentPhrase.pop(phrases[i][j]);
                j--;
                typewriterElement.innerHTML = baseText + currentPhrase.join('');
            }

            // Comprobar si la frase ha terminado de escribirse
            if (j == phrases[i].length) {
                // Si es la última frase, detener el bucle
                if (i === phrases.length - 1) {
                    return;
                };
            }

            // Si la frase está completamente escrita, iniciar el proceso de borrado después de una pausa
            if (!isDeleting && j === phrases[i].length) {
                setTimeout(() => {
                    isDeleting = true;
                    type(); // Continuar con el borrado
                }, Math.random() * (400 - 300) + 300); // Espera de 100 a 200 milisegundos
                return;
            }
            // Si se ha borrado toda la frase, pasar a la siguiente
            if (isDeleting && j === 0) {
                currentPhrase = [];
                isDeleting = false;
                i++;
            }
        }
        const spedUp = Math.random() * (120 - 80) + 80;
        const normalSpeed = Math.random() * (100 - 50) + 50;
        const time = isDeleting ? spedUp : normalSpeed;
        setTimeout(type, time);
    }

    type();
});
