import outsideClick from './outsideclick.js';

export default class DropdownMenu {
    constructor(dropdownMenus, events) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus);

        // define touchstart e click como argumento padrao
        // de events caso o usuario nao define
        if (events === undefined) this.events = ['touchstart', 'click'];
        else this.events = events;

        this.activeClass = 'active';
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    }

    // ativa dropdownmenu e adiciona
    // a funcao que observa o clique fora dele
    activeDropdownMenu(event) {
        event.preventDefault();
        const element = event.currentTarget;
        element.classList.add(this.activeClass);
        outsideClick(element, this.events, () => {
            element.classList.remove('active');
        });
    }

    // ativa o dropdownmenu e adiciona
    // a funcao que observa o clique fora dele
    addDropdownMenusEvent() {
        this.dropdownMenus.forEach((menu) => {
            ['touchstart', 'click'].forEach((userEvent) => {
                menu.addEventListener(userEvent, this.activeDropdownMenu);
            });
        });
    }

    init() {
        if (this.dropdownMenus.length) {
            this.addDropdownMenusEvent();
        }
        return this;
    }
}
