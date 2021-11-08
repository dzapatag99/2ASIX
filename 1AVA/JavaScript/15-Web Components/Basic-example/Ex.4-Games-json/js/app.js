import { GameItem } from "./components/GameItem.js";
import { HeaderPage } from "./components/HeaderPage.js";
import { FooterPage } from "./components/FooterPage.js";

const containerTag = document.getElementById("container-games");


window.onload= async ()=>{
    
    const gamesList = await getGames();
    gamesList.forEach( gameJson => {

        let game = new GameItem();
        game.setAttribute("title", gameJson.title);
        game.setAttribute("developer", gameJson.developer);
        game.setAttribute("year", gameJson.year);

        containerTag.appendChild(game);

    });
};


const getGames = async ()=>{
    const response = await fetch('./data/games.json');
    return response.json();
};