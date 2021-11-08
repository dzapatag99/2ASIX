import Game from './Game.js';
const btnAddGame = document.getElementById("btn-addGame");
const elementsForm = document.getElementById("frm-game").elements;
let bodyGameTag = document.getElementById("gamelist");

// List of games
let lGames = [];

// Fake key of games. Counter of games
let indexGame = 3;

// Load init data and main actions
/**********************************************************************/
document.addEventListener("DOMContentLoaded", () => {

  // Load lGames with example Data
  lGames.push(new Game(1, "Star Wars Jedi: Fallen Order", "Five Start Studio", "12/12/2019", "Action", "16"));
  lGames.push(new Game(2, "Terminator", "Marvel Studio", "12/12/2019", "Adventure", "12"));
  lGames.push(new Game(3, "Halo", "Pixel Studio", "12/12/2019", "Rol", "18"));

  // Populate main table width data games from lGames array 
  populateTableGames(lGames);

  btnAddGame.addEventListener("click", (e) => {
    addGame();
  });

});


// Return false if any field doesn't fulfill the conditions
/**********************************************************************/
function validateGameForm() {

  // Check mandatory fields
  for (let e of elementsForm) {
    if ((e.type === "text" || e.type === "date" || e.type === "number") &&
      e.value === "") {
      let nameField = e.parentElement.querySelector("label").textContent;
      message(`El camp '${nameField}' és obligatori`);
      e.focus();
      return false;
    }
  }
  // Check PEGI: First we need to parser the string value of the string  
  const pegiInput = document.querySelector("#game_pegi");
  let pegi = Number.parseInt(pegiInput.value, 10);
  if (!Number.isInteger(pegi) || pegi > 18) {
    message("El camp PEGI ha de ser un valor numèric entre 0 i 18");
    pegiInput.focus();
    return false;
  }
  return true;
}

// Populate UI with current games
/**********************************************************************/
function populateTableGames(lGames) {
  bodyGameTag.innerHTML = "";
  // Create rows in the table from the games list
  lGames.forEach(game => {
    let rowGame = `<tr>
										<td scope="row">${game.id}</td>
										<td>${game.name}</td>
										<td>${game.developer}</td>
										<td>${game.release}</td>
										<td>${game.pegi}</td>
                    <td>${game.genre}</td>
                    <td><i class="fas fa-trash-alt" style="color:red" 
                           data-game-id="${game.id}"></i></td>
                  </tr>`;
    bodyGameTag.innerHTML += rowGame;
  });

  // Set events of every delete icon.
  handleDeleteEvent();

}

// Configure proper action of all delete buttons
/**********************************************************************/
function handleDeleteEvent() {
  let aBtnDelete = document.querySelectorAll(".fa-trash-alt");
  if (aBtnDelete) {
    aBtnDelete.forEach(item => {
      item.addEventListener("click", function () {
        deleteGame(this.dataset.gameId);
      });
    });
  }
}

// Add new game with data form
/**********************************************************************/
function addGame() {
  if (!validateGameForm()) return false;

  // First we check the game is no repeated by the name
  const nameGame = (item) => item.name === document.querySelector("#game_name").value;
  if (lGames.some(nameGame)) {
    message("Aquest joc ja existeix");
    return false;
  }

  let codeGame = ++indexGame;
  // Data conversion to spanish format, for instance: 02/12/2019
  let aDate = document.querySelector("#game_release").value.split("-");
  let release = aDate[2] + "/" + aDate[1] + "/" + aDate[0];

  let oGame = new Game(codeGame,
    document.querySelector('#game_name').value,
    document.querySelector('#game_developer').value,
    release,
    document.querySelector('#game_gnre').value,
    document.querySelector('#game_pegi').value
  );
  console.info("New game:" + oGame.toString());

  lGames.push(oGame);
  document.getElementById("frm-game").reset();
  populateTableGames(lGames);
  jump("#container-games");

}

// Delete game from the table
/**********************************************************************/
function deleteGame(idGame) {
  // New array without the game width a idGame to delete
  const result = lGames.filter(game => game.id != idGame);
  lGames = result;
  console.info("New array:", lGames);
  populateTableGames(lGames);
}

// Show message to the user
/**********************************************************************/
function message(msg) {
  $("#txt-message").html(msg);
  $('#modal-message').modal('show');
}

// Util function to jump to a new location in the page
/**********************************************************************/
function jump(nodeName) {
  var top = document.querySelector(nodeName).offsetTop; //Getting Y of target element
  window.scrollTo(0, top);                        //Go there directly or some transition
}