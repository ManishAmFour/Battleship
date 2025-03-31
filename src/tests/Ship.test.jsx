import { beforeAll, describe, expect, vi, it, vitest } from "vitest";
import Ship from "../components/Ship.jsx";
import GameBoard from "../components/Gameboards.jsx";

describe("Ship's interaction", () => {
  let testShip;
  beforeAll(() => {
    testShip = new Ship(10, 0, false);
  });

  it("ship's been hit", () => {
    testShip.hit();
    expect(testShip.hits).toBe(1);
  });

  it("is sunk?", () => {
    testShip.length = 3;
    testShip.hit();
    testShip.hit();
    testShip.isSunk();
    expect(testShip.status).toBe(true);
  });
});
describe("Gameboard interaction ", () => {
  let TestBoard;
  let ship;
  beforeAll(() => {
    ship = new Ship();
    TestBoard = new GameBoard(ship, { x: "1", y: "B" });
  });
  it("coordinates placement", () => {
    expect(TestBoard.coordinates).toStrictEqual({ x: "1", y: "B" });
  });
  it("attack is missed status", () => {
    let spy = vi.spyOn(ship, "hit");
    TestBoard.receiveAttack({ x: "2", y: "9" });

    expect(TestBoard.coordinates).to.not.toStrictEqual({ x: "2", y: "9" });
    expect(TestBoard.MissedAttacks).toContainEqual({ x: "2", y: "9" });
    expect(spy).to.not.toHaveBeenCalled();
  });
  it("attack is successfull status", () => {
    let spy = vi.spyOn(ship, "hit");
    TestBoard.receiveAttack({ x: "1", y: "B" });

    expect(TestBoard.coordinates).to.toStrictEqual({ x: "1", y: "B" });
    expect(spy).to.toHaveBeenCalled();
    TestBoard.ship.isSunk();
    expect(TestBoard.ship.status).toBe(true);
  });
});
