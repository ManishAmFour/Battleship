import "./styles/battleship.css";
import GameBoard from "./components/classes/Gameboards";
import Players from "./components/classes/players";
import Ship from "./components/classes/Ship";
import { useState, useEffect } from "react";
import Cell from "./components/Cell";
import { useParams } from "react-router";
import AiCell from "./components/AiCell";

function BattleGround() {
  const { id } = useParams();
  let resultantArray = JSON.parse(id);
  let PlayerCoordinates = resultantArray
    .map((value, index) => {
      if (index > 5) {
        return value;
      } else {
        return null;
      }
    })
    .filter((value) => value !== null);

  let ComputerCoordinates = resultantArray
    .map((value, index) => {
      if (index <= 5) {
        return value;
      } else {
        return null;
      }
    })
    .filter((value) => value !== null);

  const [aiCell, setAiCell] = useState([
    { position: { x: 0, y: "A" }, mark: "unmark" },
    { position: { x: 0, y: "B" }, mark: "unmark" },
    { position: { x: 0, y: "C" }, mark: "unmark" },
    { position: { x: 0, y: "D" }, mark: "unmark" },
    { position: { x: 0, y: "E" }, mark: "unmark" },
    { position: { x: 0, y: "F" }, mark: "unmark" },
    { position: { x: 1, y: "A" }, mark: "unmark" },
    { position: { x: 1, y: "B" }, mark: "unmark" },
    { position: { x: 1, y: "C" }, mark: "unmark" },
    { position: { x: 1, y: "D" }, mark: "unmark" },
    { position: { x: 1, y: "E" }, mark: "unmark" },
    { position: { x: 1, y: "F" }, mark: "unmark" },
    { position: { x: 2, y: "A" }, mark: "unmark" },
    { position: { x: 2, y: "B" }, mark: "unmark" },
    { position: { x: 2, y: "C" }, mark: "unmark" },
    { position: { x: 2, y: "D" }, mark: "unmark" },
    { position: { x: 2, y: "E" }, mark: "unmark" },
    { position: { x: 2, y: "F" }, mark: "unmark" },
    { position: { x: 3, y: "A" }, mark: "unmark" },
    { position: { x: 3, y: "B" }, mark: "unmark" },
    { position: { x: 3, y: "C" }, mark: "unmark" },
    { position: { x: 3, y: "D" }, mark: "unmark" },
    { position: { x: 3, y: "E" }, mark: "unmark" },
    { position: { x: 3, y: "F" }, mark: "unmark" },
    { position: { x: 4, y: "A" }, mark: "unmark" },
    { position: { x: 4, y: "B" }, mark: "unmark" },
    { position: { x: 4, y: "C" }, mark: "unmark" },
    { position: { x: 4, y: "D" }, mark: "unmark" },
    { position: { x: 4, y: "E" }, mark: "unmark" },
    { position: { x: 4, y: "F" }, mark: "unmark" },
  ]);
  const userPlayer = new Players("player", PlayerCoordinates);

  const [CompPlayer, setAiComp] = useState(
    new Players("computer", ComputerCoordinates)
  );
  let prevValue = new Players("computer", ComputerCoordinates);

  useEffect(() => {
    if (prevValue !== CompPlayer) {
     
    }

    //if(CompPlayer.playerGameBoard.MissedAttacks.length !== 0 || )

    /*
    for (let i = 0; aiCell[randomValue].mark === "mark"; i++) {
      randomValue = Math.floor(Math.random() * 30);
    }
    if (CompPlayer.playerGameBoard.MissedAttacks.length !== 0) {
      if (aiCell[randomValue].mark === "unmark") {
        userPlayer.playerGameBoard.receiveAttack(aiCell[randomValue].position);

        let NewArray = [...aiCell];
        NewArray[randomValue].mark = "mark";
        setAiCell(NewArray);
      }
    }*/
  }, [CompPlayer]);


  return (
    <div>
  
      {userPlayer.playerGameBoard.ship.status === true ? (
        <div>YOU LOST</div>
      ) : CompPlayer.playerGameBoard.ship.status === true ? (
        <div>YOU WON</div>
      ) : (
        <div>
          <div className="play-ground">
            <div className="player">
              <div className="horizontal-strip">
                {aiCell.map((value) => {
                  if (value.position.x === 0) {
                    return (
                      <div
                        key={JSON.stringify(value.position)}
                        className={
                          value.mark === "mark"
                            ? "blocks-within-checked-ai"
                            : "blocks-within-unchecked-ai"
                        }
                      ></div>
                    );
                  } else {
                    return;
                  }
                })}
              </div>
              <div className="horizontal-strip">
                {aiCell.map((value) => {
                  if (value.position.x === 1) {
                    return (
                      <div
                        key={JSON.stringify(value.position)}
                        className={
                          value.mark === "mark"
                            ? "blocks-within-checked-ai"
                            : "blocks-within-unchecked-ai"
                        }
                      ></div>
                    );
                  } else {
                    return;
                  }
                })}
              </div>
              <div className="horizontal-strip">
                {aiCell.map((value) => {
                  if (value.position.x === 2) {
                    return (
                      <div
                        key={JSON.stringify(value.position)}
                        className={
                          value.mark === "mark"
                            ? "blocks-within-checked-ai"
                            : "blocks-within-unchecked-ai"
                        }
                      ></div>
                    );
                  } else {
                    return;
                  }
                })}
              </div>
              <div className="horizontal-strip">
                {aiCell.map((value) => {
                  if (value.position.x === 3) {
                    return (
                      <div
                        key={JSON.stringify(value.position)}
                        className={
                          value.mark === "mark"
                            ? "blocks-within-checked-ai"
                            : "blocks-within-unchecked-ai"
                        }
                      ></div>
                    );
                  } else {
                    return;
                  }
                })}
              </div>
              <div className="horizontal-strip">
                {aiCell.map((value) => {
                  if (value.position.x === 4) {
                    return (
                      <div
                        key={JSON.stringify(value.position)}
                        className={
                          value.mark === "mark"
                            ? "blocks-within-checked-ai"
                            : "blocks-within-unchecked-ai"
                        }
                      ></div>
                    );
                  } else {
                    return;
                  }
                })}
              </div>
            </div>
          </div>
          <div className="play-ground">
            <div className="player">
              <div className="horizontal-strip"></div>
              <div className="horizontal-strip">
                <Cell
                  position={{ x: 0, y: "A" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 0, y: "B" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 0, y: "C" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 0, y: "D" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 0, y: "E" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 0, y: "F" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
              </div>
              <div className="horizontal-strip">
                <Cell
                  position={{ x: 1, y: "A" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 1, y: "B" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 1, y: "C" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 1, y: "D" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 1, y: "E" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 1, y: "F" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
              </div>
              <div className="horizontal-strip">
                <Cell
                  position={{ x: 2, y: "A" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 2, y: "B" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 2, y: "C" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 2, y: "D" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 2, y: "E" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 2, y: "F" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
              </div>
              <div className="horizontal-strip">
                <Cell
                  position={{ x: 3, y: "A" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 3, y: "B" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 3, y: "C" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 3, y: "D" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 3, y: "E" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 3, y: "F" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
              </div>
              <div className="horizontal-strip">
                <Cell
                  position={{ x: 4, y: "A" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 4, y: "B" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 4, y: "C" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 4, y: "D" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 4, y: "E" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 4, y: "F" }}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BattleGround;
