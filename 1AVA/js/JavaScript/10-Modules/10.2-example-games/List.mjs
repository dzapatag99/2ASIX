import Game from './Game.js';
class List {

  constructor() {
    this.lGames = [];
  }

	addGame(id, name, developer){
		let new_game = new Game(id, name, developer);
		this.lGames.push(new_game);
	}
}
export default List;
