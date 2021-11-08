export class HeaderPage extends HTMLElement{

    connectedCallback(){
        this.reder();
    }

    reder(){
        this.innerHTML =`
            <style>
                header{
                    border:1px solid #000;
                    margin:5px;
                }
            </style>
            <header>
                <h1>Título y logo</h1>
            </header>
        `;
    }
}

window.customElements.define("header-page", HeaderPage);