class PortadaTag extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const name = this.getAttribute("name");
        const width = this.getAttribute("width") || "200px";
        this.innerHTML =`<img src="./images/${name}.jpg" style="width:${width}" />`;
    }

}

window.customElements.define("portada-tag", PortadaTag);