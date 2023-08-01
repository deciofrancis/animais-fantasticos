import AnimaNumeros from './anima-numero.js';

export default function fetchAnimais(url, target) {
    // cria a div contendo o informacoes
    // com o tatal de animais
    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
        return div;
    }

    // preencher cada animal no Dom
    const numerosGrid = document.querySelector(target);
    function preencherAnimais(animal) {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
    }

    // anima os numeros de cada animal
    function animaAnimaisNumeros() {
        const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
        animaNumeros.init();
    }

    // puxa os animais atraves de um arquivo json
    // e cria cada animal utilizando createAnimal
    async function criarAnimais() {
        try {
            // Fetch, espera a resposta e transforma em json
            const animaisResponse = await fetch(url);
            const animaisJSON = await animaisResponse.json();

            // apos a transformacao de json, ativa as funcoes
            // para preencher e animar o numeros
            animaisJSON.forEach((animal) => preencherAnimais(animal));
            animaAnimaisNumeros();
        } catch (erro) {
            console.log(erro);
        }
    }

    return criarAnimais();
}
