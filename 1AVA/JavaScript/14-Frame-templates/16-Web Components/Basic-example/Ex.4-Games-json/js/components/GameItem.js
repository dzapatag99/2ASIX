export class GameItem extends HTMLElement{

    connectedCallback(){
        this.reder();
    }

    reder(){
        let title = this.getAttribute("title");
        let developer = this.getAttribute("developer");
        let year = this.getAttribute("year");
        this.innerHTML =`
            <style>
                .game{
                    border-radius: 5px;
                    padding: 5px;
                    border: solid 1px brown;
                    background-color: yellow;
                }
            </style>
            <div class="game">
                <h1>${ title }</h1>
                <ul>
                    <li>${ developer }</li>
                    <li>${ year }</li>
                </ul>
            </div>
        `;
    }

}

window.customElements.define("game-item", GameItem);