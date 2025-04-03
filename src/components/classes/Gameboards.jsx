class GameBoard {
  constructor(ship, coordinates = { x: 1, y: "A" }) {
    this.ship = ship;
    this.coordinates = coordinates;
    this.MissedAttacks = [];
  }

  receiveAttack(coordinates) {
    if (
      coordinates.x !== this.coordinates.x ||
      coordinates.y !== this.coordinates.y
    ) {
      this.MissedAttacks.push(coordinates);
    } else if (
      coordinates.x === this.coordinates.x &&
      coordinates.y === this.coordinates.y
    ) {
      this.ship.hit();
    }
  }
}

export default GameBoard;
