class HolaTag extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML ='<h1>Hola mundo</h1>';
    }

}

window.customElements.define("hola-tag", HolaTag);