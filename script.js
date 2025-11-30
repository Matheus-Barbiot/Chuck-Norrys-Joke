
const frase = document.getElementById('frase')

async function gerar() {
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const joke = await response.json()

    // Coloca a frase
    frase.innerHTML = joke.value

    // Destaca "Chuck Norris"
    frase.innerHTML = frase.innerHTML.replace(
        /Chuck Norris/gi,
        '<span class="highlight">Chuck Norris</span>'
    )
}

window.addEventListener("load", gerar);
document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // evita comportamento padrão
        gerar();
    }
})
