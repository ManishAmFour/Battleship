import "./styles/battleship.css";
import GameBoard from "./components/Gameboards";
import Players from "./components/players";
import Ship from "./components/Ship";
import { useState } from "react";
import Cell from "./components/Cell";

function BattleGround() {
  const [result, setResult] = useState("nothing");
  let UserShip = new Players("Manish", { x: 0, y: "C" });
  let CompShip = new Players("Computer", { x: 4, y: "D" });
  let playerName = window.location.pathname.slice(14);
  console.log(playerName);

  function handleStatus(position) {
    if (
      position.x === CompShip.playerGameBoard.coordinates.x &&
      position.y === CompShip.playerGameBoard.coordinates.y
    ) {
      setResult("win");
    }
  }

  return (
    <>
      {result === "win" ? <div>WINNN HURRAY</div> : null}
      <div className="play-ground">
        <div className="player">
          <div className="horizontal-strip"></div>
          <div className="horizontal-strip">
            <Cell position={{ x: 0, y: "A" }} />
            <Cell position={{ x: 0, y: "B" }} />
            <Cell position={{ x: 0, y: "C" }} />
            <Cell position={{ x: 0, y: "D" }} />
            <Cell position={{ x: 0, y: "E" }} />
            <Cell position={{ x: 0, y: "F" }} />
          </div>
          <div className="horizontal-strip">
            <Cell position={{ x: 1, y: "A" }} />
            <Cell position={{ x: 1, y: "B" }} />
            <Cell position={{ x: 1, y: "C" }} />
            <Cell position={{ x: 1, y: "D" }} />
            <Cell position={{ x: 1, y: "E" }} />
            <Cell position={{ x: 1, y: "F" }} />
          </div>
          <div className="horizontal-strip">
            <Cell position={{ x: 2, y: "A" }} />
            <Cell position={{ x: 2, y: "B" }} />
            <Cell position={{ x: 2, y: "C" }} />
            <Cell position={{ x: 2, y: "D" }} />
            <Cell position={{ x: 2, y: "E" }} />
            <Cell position={{ x: 2, y: "F" }} />
          </div>
          <div className="horizontal-strip">
            <Cell position={{ x: 3, y: "A" }} />
            <Cell position={{ x: 3, y: "B" }} />
            <Cell position={{ x: 3, y: "C" }} />
            <Cell position={{ x: 3, y: "D" }} />
            <Cell position={{ x: 3, y: "E" }} />
            <Cell position={{ x: 3, y: "F" }} />
          </div>
          <div className="horizontal-strip">
            <Cell position={{ x: 4, y: "A" }} />
            <Cell position={{ x: 4, y: "B" }} />
            <Cell position={{ x: 4, y: "C" }} />
            <Cell position={{ x: 4, y: "D" }} />
            <Cell position={{ x: 4, y: "E" }} />
            <Cell position={{ x: 4, y: "F" }} />
          </div>
        </div>
      </div>
      <div className="play-ground">
        <div className="player">
          <div className="horizontal-strip"></div>
          <div className="horizontal-strip">
            <Cell position={{ x: 0, y: "A" }} />
            <Cell position={{ x: 0, y: "B" }} />
            <Cell position={{ x: 0, y: "C" }} />
            <Cell position={{ x: 0, y: "D" }} />
            <Cell position={{ x: 0, y: "E" }} />
            <Cell position={{ x: 0, y: "F" }} />
          </div>
          <div className="horizontal-strip">
            <Cell position={{ x: 1, y: "A" }} />
            <Cell position={{ x: 1, y: "B" }} />
            <Cell position={{ x: 1, y: "C" }} />
            <Cell position={{ x: 1, y: "D" }} />
            <Cell position={{ x: 1, y: "E" }} />
            <Cell position={{ x: 1, y: "F" }} />
          </div>
          <div className="horizontal-strip">
            <Cell position={{ x: 2, y: "A" }} />
            <Cell position={{ x: 2, y: "B" }} />
            <Cell position={{ x: 2, y: "C" }} />
            <Cell position={{ x: 2, y: "D" }} />
            <Cell position={{ x: 2, y: "E" }} />
            <Cell position={{ x: 2, y: "F" }} />
          </div>
          <div className="horizontal-strip">
            <Cell position={{ x: 3, y: "A" }} />
            <Cell position={{ x: 3, y: "B" }} />
            <Cell position={{ x: 3, y: "C" }} />
            <Cell position={{ x: 3, y: "D" }} />
            <Cell position={{ x: 3, y: "E" }} />
            <Cell position={{ x: 3, y: "F" }} />
          </div>
          <div className="horizontal-strip">
            <Cell position={{ x: 4, y: "A" }} />
            <Cell position={{ x: 4, y: "B" }} />
            <Cell position={{ x: 4, y: "C" }} />
            <Cell Onclick={handleStatus} position={{ x: 4, y: "D" }} />
            <Cell position={{ x: 4, y: "E" }} />
            <Cell position={{ x: 4, y: "F" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BattleGround;
