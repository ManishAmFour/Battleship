class Ship {
  constructor(length = 1, hits = 0, status = false) {
    this.length = length;
    this.hits = hits;
    this.status = status;
  }
  hit() {
    this.hits++;
  }
  isSunk() {
    if (this.length === this.hits) {
      this.status = true;
    } else {
      this.status = false;
    }
  }
}

export default Ship;
