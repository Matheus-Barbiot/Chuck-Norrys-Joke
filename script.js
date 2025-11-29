const button = document.getElementById('gerar')
const divResponse = document.getElementById('resposta')

async function gerar() {
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const joke = await response.json()

    divResponse.innerHTML = `<p>${joke.value}</p>`
}

button.addEventListener('click', gerar)