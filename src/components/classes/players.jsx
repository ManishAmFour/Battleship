import GameBoard from "./Gameboards";
import Ship from "./Ship";

class Players {
  constructor(playername, coordinates) {
    this.playername = playername;
    this.playerGameBoard = new GameBoard(new Ship(), coordinates);
  }
}

export default Players;
