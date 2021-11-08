class Game {

  constructor(id, name, developer) {
    this.id = id;
    this.name = name;
    this.developer = developer;
  }

  print(){
    // Fer servir cometes especials
    return `id:${this.id} - name:${this.name} - developer: ${this.developer}`;
  }

}

export default Game;
