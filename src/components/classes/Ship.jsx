class Ship {
  constructor(length = 1, hits = 0, status = false) {
    this.length = length;
    this.hits = hits;
    this.status = status;
  }
  isSunk() {
    if (this.length === this.hits) {
      this.status = true;
    } else if (this.length !== this.hits) {
      this.status = false;
    }
  }
  hit() {
    this.hits++;
    this.isSunk();
  }
}

export default Ship;
