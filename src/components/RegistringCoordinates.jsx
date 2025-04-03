import "../styles/options.css";
import { Link } from "react-router";
import { useState } from "react";

function RegisteringCoordinates() {
  const [Mark, setMark] = useState([
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
  let UserName = window.location.pathname.slice(24);
  let randomPosition = Math.floor(Math.random() * 30);
  let randomValue;
  Mark.forEach((value, index) => {
    if (randomPosition === index) {
      randomValue = value.position;
    }
  });

  /*if (0 < randomPosition && randomPosition <= 1) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  } else if (1 < randomPosition && randomPosition <= 2) {
    randomPosition;
  }*/

  function registringThePlayer(position) {
    let NewArray = [...Mark];
    NewArray.forEach((value) => {
      if (value.position.x === position.x && value.position.y === position.y) {
        value.mark = "mark";
      }
    });
    setMark(NewArray);
  }

  return (
    <div>
      <div className="blueprint">
        {
          <div className="player">
            <div className="horizontal-strip">
              {Mark.map((value) => {
                if (value.position.x === 0) {
                  return (
                    <Link
                      key={JSON.stringify(value.position)}
                      to={`/BattleGround/${JSON.stringify(
                        value.position
                      )}${JSON.stringify(UserName)}${JSON.stringify(
                        randomValue
                      )}`}
                    >
                      <div
                        onClick={() => {
                          registringThePlayer(value.position);
                        }}
                        className={
                          value.mark === "mark"
                            ? "blocks-within-checked"
                            : "blocks-within-unchecked"
                        }
                      ></div>
                    </Link>
                  );
                } else {
                  return;
                }
              })}
            </div>
            <div className="horizontal-strip">
              {Mark.map((value) => {
                if (value.position.x === 1) {
                  return (
                    <Link
                      key={JSON.stringify(value.position)}
                      to={`/BattleGround/${JSON.stringify(
                        value.position
                      )}${JSON.stringify(UserName)}${JSON.stringify(
                        randomValue
                      )}`}
                    >
                      <div
                        onClick={() => {
                          registringThePlayer(value.position);
                        }}
                        className={
                          value.mark === "mark"
                            ? "blocks-within-checked"
                            : "blocks-within-unchecked"
                        }
                      ></div>
                    </Link>
                  );
                } else {
                  return;
                }
              })}
            </div>
            <div className="horizontal-strip">
              {Mark.map((value) => {
                if (value.position.x === 2) {
                  return (
                    <Link
                      key={JSON.stringify(value.position)}
                      to={`/BattleGround/${JSON.stringify(
                        value.position
                      )}${JSON.stringify(UserName)}${JSON.stringify(
                        randomValue
                      )}`}
                    >
                      <div
                        onClick={() => {
                          registringThePlayer(value.position);
                        }}
                        className={
                          value.mark === "mark"
                            ? "blocks-within-checked"
                            : "blocks-within-unchecked"
                        }
                      ></div>
                    </Link>
                  );
                } else {
                  return;
                }
              })}
            </div>
            <div className="horizontal-strip">
              {Mark.map((value) => {
                if (value.position.x === 3) {
                  return (
                    <Link
                      key={JSON.stringify(value.position)}
                      to={`/BattleGround/${JSON.stringify(
                        value.position
                      )}${JSON.stringify(UserName)}${JSON.stringify(
                        randomValue
                      )}`}
                    >
                      <div
                        onClick={() => {
                          registringThePlayer(value.position);
                        }}
                        className={
                          value.mark === "mark"
                            ? "blocks-within-checked"
                            : "blocks-within-unchecked"
                        }
                      ></div>
                    </Link>
                  );
                } else {
                  return;
                }
              })}
            </div>
            <div className="horizontal-strip">
              {Mark.map((value) => {
                if (value.position.x === 4) {
                  return (
                    <Link
                      key={JSON.stringify(value.position)}
                      to={`/BattleGround/${JSON.stringify(
                        value.position
                      )}${JSON.stringify(UserName)}${JSON.stringify(
                        randomValue
                      )}`}
                    >
                      <div
                        onClick={() => {
                          registringThePlayer(value.position);
                        }}
                        className={
                          value.mark === "mark"
                            ? "blocks-within-checked"
                            : "blocks-within-unchecked"
                        }
                      ></div>
                    </Link>
                  );
                } else {
                  return;
                }
              })}
            </div>
          </div>
        }
      </div>
      <div className="options-of-ships">
        Choose The positioning of the ship
        <div className="longest-ship medium-ship">
          <div className="longest-ship-block medium-ship-block"></div>
        </div>
      </div>
    </div>
  );
}

export default RegisteringCoordinates;
