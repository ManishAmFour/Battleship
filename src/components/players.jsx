import GameBoard from "./Gameboards";
class Players {
  constructor(playername) {
    this.playername = playername;
    this.playerGameBoard = new GameBoard();
  }
}
