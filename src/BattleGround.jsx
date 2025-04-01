import "./styles/battleship.css";
import GameBoard from "./components/Gameboards";
import Players from "./components/players";
import Ship from "./components/Ship";
import { useState } from "react";
import Cell from "./components/Cell";

function BattleGround() {
  const [result, setResult] = useState("nothing");
  let UserName = "";
  let coordinates = "";
  for (let i = 0; i < window.location.pathname.slice(48).length; i++) {
    if (
      Number(window.location.pathname.slice(48)[i]) ||
      window.location.pathname.slice(48)[i] === "0" ||
      window.location.pathname.slice(48)[i] === "%"
    ) {
      if (window.location.pathname.slice(48)[i] === "%") {
        UserName += " ";
      }
      continue;
    } else {
      UserName += window.location.pathname.slice(48)[i];
    }
  }
  for (let i = 0; i < window.location.pathname.slice(48).length; i++) {
    if (
      Number(window.location.pathname.slice(48)[i]) ||
      window.location.pathname.slice(48)[i] === "0" ||
      window.location.pathname.slice(48)[i] === "%"
    ) {
      if (window.location.pathname.slice(48)[i] === "%") {
        UserName += " ";
      }
      continue;
    } else {
      UserName += window.location.pathname.slice(48)[i];
    }
  }
  console.log(window.location.pathname);
  let userPlayer = new Players(UserName);

  function handleStatus(position) {}

  return (
    <>
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
