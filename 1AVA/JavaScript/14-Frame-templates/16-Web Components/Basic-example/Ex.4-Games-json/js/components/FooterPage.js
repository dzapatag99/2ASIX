export class FooterPage extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <style>
                footer{
                    border:1px solid #000;
                    padding:10px;
                    margin:5px;
                    background-color:#ccc;
                }
            </style>
            <footer>
                <h4>@Design PRO</h4>
            </footer>
        `;
    }

}

window.customElements.define("footer-page", FooterPage);