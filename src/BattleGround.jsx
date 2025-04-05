import "./styles/battleship.css";
import GameBoard from "./components/classes/Gameboards";
import Players from "./components/classes/players";
import Ship from "./components/classes/Ship";
import { useState, useEffect } from "react";
import Cell from "./components/Cell";
import { Link, useParams } from "react-router";
import AiCell from "./components/AiCell";
import "./styles/status.css";

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
  const [block, setBlock] = useState("user-turn");
  const [userPlayer, setUserPlayer] = useState(
    new Players("player", PlayerCoordinates)
  );

  const [CompPlayer, setAiComp] = useState(
    new Players("computer", ComputerCoordinates)
  );
  let stringifiedPlayerPosition = userPlayer.playerGameBoard.coordinates.map(
    (value) => {
      return JSON.stringify(value);
    }
  );

  useEffect(() => {
    if (
      CompPlayer.playerGameBoard.MissedAttacks.length !== 0 ||
      block === "computer-turn"
    ) {
      let randomValue = Math.floor(Math.random() * 30);

      while (aiCell[randomValue].mark === "mark") {
        randomValue = Math.floor(Math.random() * 30);
      }
      userPlayer.playerGameBoard.receiveAttack(aiCell[randomValue].position);

      let NewValue = { ...userPlayer };

      let NewArray = [...aiCell];

      NewArray[randomValue].mark = "mark";
      setUserPlayer(NewValue);
      setAiCell(NewArray);
      setBlock("user-turn");
    }
  }, [CompPlayer]);

  return (
    <div>
      {userPlayer.playerGameBoard.ship.status === true ? (
        <div className="status-div">
          <div className="status-title lose-status"> YOU LOST</div>
          <div className="return-buttons">
            <Link to={"/RegisteringCoordinates/q"}>
              <button className="restart-option">Restart the game</button>
            </Link>
            <Link to={"/"}>
              <button className="restart-option-home">
                Restart from the Home page
              </button>
            </Link>
          </div>
        </div>
      ) : CompPlayer.playerGameBoard.ship.status === true ? (
        <div className="status-div">
          <div className="status-title win-status">YOU WON</div>
          <div className="return-buttons">
            <Link to={"/RegisteringCoordinates/q"}>
              <button className="restart-option">Restart the game</button>
            </Link>
            <Link to={"/"}>
              <button className="restart-option-home">
                Restart from the Home page
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="play-ground">
            <div className="player">
              <div className="horizontal-strip">
                {aiCell.map((value) => {
                  if (value.position.x === 0) {
                    let marker = false;
                    stringifiedPlayerPosition.forEach((position) => {
                      if (JSON.stringify(value.position) === position) {
                        marker = true;
                      }
                    });

                    return marker ? (
                      <div
                        key={JSON.stringify(value.position)}
                        className={` ${
                          value.mark === "mark"
                            ? "blocks-within-checked-ai"
                            : "player-pos"
                        }`}
                      ></div>
                    ) : (
                      <div
                        key={JSON.stringify(value.position)}
                        className={` ${
                          value.mark === "mark"
                            ? "blocks-within-checked-ai"
                            : "blocks-within-unchecked-ai"
                        }`}
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
                    let marker = false;
                    stringifiedPlayerPosition.forEach((position) => {
                      if (JSON.stringify(value.position) === position) {
                        marker = true;
                      }
                    });

                    return marker ? (
                      <div
                        key={JSON.stringify(value.position)}
                        className={` ${
                          value.mark === "mark"
                            ? "blocks-within-checked-ai"
                            : "player-pos"
                        }`}
                      ></div>
                    ) : (
                      <div
                        key={JSON.stringify(value.position)}
                        className={` ${
                          value.mark === "mark"
                            ? "blocks-within-checked-ai"
                            : "blocks-within-unchecked-ai"
                        }`}
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
                    let marker = false;
                    stringifiedPlayerPosition.forEach((position) => {
                      if (JSON.stringify(value.position) === position) {
                        marker = true;
                      }
                    });

                    return marker ? (
                      <div
                        key={JSON.stringify(value.position)}
                        className={` ${
                          value.mark === "mark"
                            ? "blocks-within-checked-ai"
                            : "player-pos"
                        }`}
                      ></div>
                    ) : (
                      <div
                        key={JSON.stringify(value.position)}
                        className={` ${
                          value.mark === "mark"
                            ? "blocks-within-checked-ai"
                            : "blocks-within-unchecked-ai"
                        }`}
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
                    let marker = false;
                    stringifiedPlayerPosition.forEach((position) => {
                      if (JSON.stringify(value.position) === position) {
                        marker = true;
                      }
                    });

                    return marker ? (
                      <div
                        key={JSON.stringify(value.position)}
                        className={` ${
                          value.mark === "mark"
                            ? "blocks-within-checked-ai"
                            : "player-pos"
                        }`}
                      ></div>
                    ) : (
                      <div
                        key={JSON.stringify(value.position)}
                        className={` ${
                          value.mark === "mark"
                            ? "blocks-within-checked-ai"
                            : "blocks-within-unchecked-ai"
                        }`}
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
                    let marker = false;
                    stringifiedPlayerPosition.forEach((position) => {
                      if (JSON.stringify(value.position) === position) {
                        marker = true;
                      }
                    });

                    return marker ? (
                      <div
                        key={JSON.stringify(value.position)}
                        className={` ${
                          value.mark === "mark"
                            ? "blocks-within-checked-ai"
                            : "player-pos"
                        }`}
                      ></div>
                    ) : (
                      <div
                        key={JSON.stringify(value.position)}
                        className={` ${
                          value.mark === "mark"
                            ? "blocks-within-checked-ai"
                            : "blocks-within-unchecked-ai"
                        }`}
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
              <div className="horizontal-strip">
                <Cell
                  position={{ x: 0, y: "A" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 0, y: "B" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 0, y: "C" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 0, y: "D" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 0, y: "E" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 0, y: "F" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
              </div>
              <div className="horizontal-strip">
                <Cell
                  position={{ x: 1, y: "A" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 1, y: "B" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 1, y: "C" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 1, y: "D" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 1, y: "E" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 1, y: "F" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
              </div>
              <div className="horizontal-strip">
                <Cell
                  position={{ x: 2, y: "A" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 2, y: "B" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 2, y: "C" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 2, y: "D" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 2, y: "E" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 2, y: "F" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
              </div>
              <div className="horizontal-strip">
                <Cell
                  position={{ x: 3, y: "A" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 3, y: "B" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 3, y: "C" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 3, y: "D" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 3, y: "E" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 3, y: "F" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
              </div>
              <div className="horizontal-strip">
                <Cell
                  position={{ x: 4, y: "A" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 4, y: "B" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 4, y: "C" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 4, y: "D" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 4, y: "E" }}
                  startTheGame={setBlock}
                  enemyPosition={CompPlayer}
                  stateUpdation={setAiComp}
                />
                <Cell
                  position={{ x: 4, y: "F" }}
                  startTheGame={setBlock}
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
