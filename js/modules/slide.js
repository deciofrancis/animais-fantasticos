export default class Slide {
    constructor(slide, wrapper) {
        this.slide = document.querySelector(slide);
        this.wrapper = document.querySelector(wrapper);
    }

    onStart(event) {
        event.preventDefault();
        this.wrapper.addEventListenner('mousemove', this.onMove);
    }

    onMove(event) {

    }

    onEnd(event) {
        this.wrapper.removeEventListenner('mousemove', this.onMove);
    }

    addSlideEvents() {
        this.wrapper.addEventListenner('mousedown', this.onStart);
        this.wrapper.addEventListenner('mousemove', this.onEnd);
    }

    bindEvents() {
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
    }

    init() {
        this.bindEvents();
        this.addSlideEvents();
        return this;
    }
}
