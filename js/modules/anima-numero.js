export default class AnimaNumeros {
    constructor(numeros, observerTarget, observerClass) {
        this.numeros = document.querySelectorAll(numeros);
        this.observerTarget = document.querySelector(observerTarget);
        this.observerClass = observerClass;

        // bind o this do obejto ao callback da mutacao
        this.handleMutation = this.handleMutation.bind(this);
    }

    // recebe um elemento do dom, com numero em seu texto
    // incrementa a partir do 0 ate o numero final
    static incrementarNumero(numero) {
        const total = +numero.innerText;
        const incremento = Math.floor(total / 100);
        let start = 0;
        const timer = setInterval(() => {
            start += incremento;
            numero.innerText = start;
            if (start > total) {
                numero.innerText = total;
                clearInterval(timer);
            }
        }, 25 * Math.random());
    }

    // ativa incrementar numero para cada
    // numero selecionado do dom
    animaNumeros() {
        this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
    }

    // funcao que ocorre quando a mutacoes ocorrer
    handleMutation(mutation) {
        if (mutation[0].target.classList.contains(this.observerClass)) {
            this.observer.disconnect();
            this.animaNumeros();
        }
    }

    // adiciona o MutationObserver para verificar
    // quando a classe ativo e adicionada ao element target
    addMutationObserver() {
        this.observer = new MutationObserver(this.handleMutation);
        this.observer.observe(this.observerTarget, { attributes: true });
    }

    init() {
        if (this.numeros.length && this.observerTarget) {
            this.addMutationObserver();
        }
        return this;
    }
}
