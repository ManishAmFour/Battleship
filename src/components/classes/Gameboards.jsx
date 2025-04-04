class GameBoard {
  constructor(ship, coordinates = { x: 1, y: "A" }) {
    this.ship = ship;
    this.coordinates = coordinates;
    this.MissedAttacks = [];
  }

  receiveAttack(coordinates) {
    let StringiyfiedCoordinates = this.coordinates.map((value) => {
      return JSON.stringify(value);
    });
    if (StringiyfiedCoordinates.includes(JSON.stringify(coordinates))) {
      console.log("hit");
      this.ship.hit();
    } else {
      this.MissedAttacks.push(coordinates);
    }
  }
}

export default GameBoard;
