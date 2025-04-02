import "./styles/battleship.css";
import GameBoard from "./components/Gameboards";
import Players from "./components/players";
import Ship from "./components/Ship";
import { use, useState } from "react";
import Cell from "./components/Cell";
import { useParams } from "react-router";
import AiCell from "./components/AiCell";

function BattleGround() {
  const [userComp, setParentComp] = useState("");
  const [AiComp, setAiComp] = useState("");

  const { id } = useParams();
  let UserName = "";

  for (let i = 16; i < id.length; i++) {
    if (id[i] === '"') {
      break;
    } else {
      UserName += id[i];
    }
  }

  let coordinates = JSON.parse(id.slice(0, 15));
  let randomValue = JSON.parse(id.slice(-15));

  let userPlayer = new Players(UserName, coordinates);
  let CompPlayer = new Players("computer", randomValue);
  userPlayer.playerGameBoard.receiveAttack(userComp);
  console.log(userPlayer.playerGameBoard.MissedAttacks);

  return (
    <>
      <div className="play-ground">
        <div className="player">
          <div className="horizontal-strip"></div>
          <div className="horizontal-strip">
            <AiCell position={{ x: 0, y: "A" }} />
            <AiCell position={{ x: 0, y: "B" }} />
            <AiCell position={{ x: 0, y: "C" }} />
            <AiCell position={{ x: 0, y: "D" }} />
            <AiCell position={{ x: 0, y: "E" }} />
            <AiCell position={{ x: 0, y: "F" }} />
          </div>
          <div className="horizontal-strip">
            <AiCell position={{ x: 1, y: "A" }} />
            <AiCell position={{ x: 1, y: "B" }} />
            <AiCell position={{ x: 1, y: "C" }} />
            <AiCell position={{ x: 1, y: "D" }} />
            <AiCell position={{ x: 1, y: "E" }} />
            <AiCell position={{ x: 1, y: "F" }} />
          </div>
          <div className="horizontal-strip">
            <AiCell position={{ x: 2, y: "A" }} />
            <AiCell position={{ x: 2, y: "B" }} />
            <AiCell position={{ x: 2, y: "C" }} />
            <AiCell position={{ x: 2, y: "D" }} />
            <AiCell position={{ x: 2, y: "E" }} />
            <AiCell position={{ x: 2, y: "F" }} />
          </div>
          <div className="horizontal-strip">
            <AiCell position={{ x: 3, y: "A" }} />
            <AiCell position={{ x: 3, y: "B" }} />
            <AiCell position={{ x: 3, y: "C" }} />
            <AiCell position={{ x: 3, y: "D" }} />
            <AiCell position={{ x: 3, y: "E" }} />
            <AiCell position={{ x: 3, y: "F" }} />
          </div>
          <div className="horizontal-strip">
            <AiCell position={{ x: 4, y: "A" }} />
            <AiCell position={{ x: 4, y: "B" }} />
            <AiCell position={{ x: 4, y: "C" }} />
            <AiCell />
            <AiCell position={{ x: 4, y: "E" }} />
            <AiCell position={{ x: 4, y: "F" }} />
          </div>
        </div>
      </div>
      <div className="play-ground">
        <div className="player">
          <div className="horizontal-strip"></div>
          <div className="horizontal-strip">
            <Cell
              position={{ x: 0, y: "A" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 0, y: "B" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 0, y: "C" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 0, y: "D" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 0, y: "E" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 0, y: "F" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
          </div>
          <div className="horizontal-strip">
            <Cell
              position={{ x: 1, y: "A" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 1, y: "B" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 1, y: "C" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 1, y: "D" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 1, y: "E" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 1, y: "F" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
          </div>
          <div className="horizontal-strip">
            <Cell
              position={{ x: 2, y: "A" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 2, y: "B" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 2, y: "C" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 2, y: "D" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 2, y: "E" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 2, y: "F" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
          </div>
          <div className="horizontal-strip">
            <Cell
              position={{ x: 3, y: "A" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 3, y: "B" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 3, y: "C" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 3, y: "D" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 3, y: "E" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 3, y: "F" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
          </div>
          <div className="horizontal-strip">
            <Cell
              position={{ x: 4, y: "A" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 4, y: "B" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 4, y: "C" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 4, y: "D" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 4, y: "E" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
            <Cell
              position={{ x: 4, y: "F" }}
              enemyPosition={userPlayer}
              stateUpdation={setParentComp}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BattleGround;
