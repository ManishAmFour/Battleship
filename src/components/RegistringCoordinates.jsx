import "../styles/options.css";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

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
  let stringifiedArray = Mark.map((value) => {
    let stringifiedValue = JSON.stringify(value.position);
    return stringifiedValue;
  });
  const navigate = useNavigate();
  const [selectedShip, setSelectedShip] = useState("small-ship");
  const [selectedValues, setSelectedValues] = useState([]);
  let UserName = window.location.pathname.slice(24);

  useEffect(() => {
    if (selectedShip === "selection-done") {
      let CompCoordinates = [];

      for (let i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * 30);

        while (CompCoordinates.includes(stringifiedArray[randomValue])) {
          randomValue = Math.floor(Math.random() * 30);
        }
        CompCoordinates.push(stringifiedArray[randomValue]);
      }
      let computerValues = CompCoordinates.map((value) => {
        return JSON.parse(value);
      });
      console.log(computerValues);

      let finalResult = computerValues.concat(selectedValues);

      navigate(`/BattleGround/${JSON.stringify(finalResult)}`);
    }
  }, [selectedShip]);

  function registringThePlayer(position, index) {
    if (selectedShip === "small-ship") {
      let NewArray = [...Mark];
      NewArray.forEach((value) => {
        if (
          value.position.x === position.x &&
          value.position.y === position.y
        ) {
          let NewSelectedValues = [...selectedValues];
          NewSelectedValues.push(value.position);
          setSelectedValues(NewSelectedValues);
          value.mark = "mark";
          setSelectedShip("medium-ship");
          setMark(NewArray);
        }
      });
    } else if (selectedShip === "medium-ship") {
      let NewArray = [...Mark];
      if (
        NewArray[index].mark !== "mark" &&
        (NewArray[index - 1].mark !== "mark" ||
          NewArray[index + 1].mark !== "mark")
      ) {
        if (
          NewArray[index].mark !== "mark" &&
          NewArray[index - 1].mark !== "mark"
        ) {
          let NewSelectedValues = [...selectedValues];
          NewSelectedValues.push(NewArray[index].position);
          NewSelectedValues.push(NewArray[index - 1].position);

          setSelectedValues(NewSelectedValues);
          NewArray[index].mark = "mark";
          NewArray[index - 1].mark = "mark";
          setSelectedShip("long-ship");

          setMark(NewArray);
        }
        if (
          NewArray[index].mark !== "mark" &&
          NewArray[index + 1].mark !== "mark"
        ) {
          let NewSelectedValues = [...selectedValues];

          NewSelectedValues.push(NewArray[index].position);
          NewSelectedValues.push(NewArray[index + 1].position);
          setSelectedValues(NewSelectedValues);
          NewArray[index].mark = "mark";
          NewArray[index + 1].mark = "mark";
          setSelectedShip("long-ship");

          setMark(NewArray);
        }
      }
    } else if (selectedShip === "long-ship") {
      let NewArray = [...Mark];

      if (
        NewArray[index].mark !== "mark" &&
        NewArray[index - 1].mark !== "mark" &&
        NewArray[index + 1].mark !== "mark"
      ) {
        let NewSelectedValues = [...selectedValues];
        NewSelectedValues.push(NewArray[index].position);
        NewSelectedValues.push(NewArray[index - 1].position);
        NewSelectedValues.push(NewArray[index + 1].position);
        setSelectedValues(NewSelectedValues);
        NewArray[index].mark = "mark";
        NewArray[index + 1].mark = "mark";
        NewArray[index - 1].mark = "mark";
        setMark(NewArray);
        setSelectedShip("selection-done");
      }
    }
  }

  return (
    <div className="entire-registration-form">
      <div className="blueprint">
        {
          <div className="player registration-blocks">
            <div className="horizontal-strip">
              {Mark.map((value, index) => {
                if (value.position.x === 0) {
                  return (
                    <div
                      className="register-option"
                      key={JSON.stringify(value.position)}
                    >
                      <div
                        onClick={() => {
                          registringThePlayer(value.position, index);
                        }}
                        className={`${"blocks-hover"}
                          ${
                            value.mark === "mark"
                              ? "blocks-within-checked"
                              : "blocks-within-unchecked"
                          }`}
                      ></div>
                    </div>
                  );
                } else {
                  return;
                }
              })}
            </div>
            <div className="horizontal-strip">
              {Mark.map((value, index) => {
                if (value.position.x === 1) {
                  return (
                    <div
                      className="register-option"
                      key={JSON.stringify(value.position)}
                    >
                      <div
                        onClick={() => {
                          registringThePlayer(value.position, index);
                        }}
                        className={`${"blocks-hover"}
                        ${
                          value.mark === "mark"
                            ? "blocks-within-checked"
                            : "blocks-within-unchecked"
                        }`}
                      ></div>
                    </div>
                  );
                } else {
                  return;
                }
              })}
            </div>
            <div className="horizontal-strip">
              {Mark.map((value, index) => {
                if (value.position.x === 2) {
                  return (
                    <div
                      className="register-option"
                      key={JSON.stringify(value.position)}
                    >
                      <div
                        onClick={() => {
                          registringThePlayer(value.position, index);
                        }}
                        className={`${"blocks-hover"}
                        ${
                          value.mark === "mark"
                            ? "blocks-within-checked"
                            : "blocks-within-unchecked"
                        }`}
                      ></div>
                    </div>
                  );
                } else {
                  return;
                }
              })}
            </div>
            <div className="horizontal-strip">
              {Mark.map((value, index) => {
                if (value.position.x === 3) {
                  return (
                    <div
                      className="register-option"
                      key={JSON.stringify(value.position)}
                    >
                      <div
                        onClick={() => {
                          registringThePlayer(value.position, index);
                        }}
                        className={`${"blocks-hover"}
                        ${
                          value.mark === "mark"
                            ? "blocks-within-checked"
                            : "blocks-within-unchecked"
                        }`}
                      ></div>
                    </div>
                  );
                } else {
                  return;
                }
              })}
            </div>
            <div className="horizontal-strip">
              {Mark.map((value, index) => {
                if (value.position.x === 4) {
                  return (
                    <div
                      className="register-option"
                      key={JSON.stringify(value.position)}
                    >
                      <div
                        onClick={() => {
                          registringThePlayer(value.position, index);
                        }}
                        className={`${"blocks-hover"}
                        ${
                          value.mark === "mark"
                            ? "blocks-within-checked"
                            : "blocks-within-unchecked"
                        }`}
                      ></div>
                    </div>
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
        <p className="options-text">Choose The positioning of the ship</p>
        <div className="options-list">
          {selectedShip === "small-ship" ? (
            <div className="longest-ship medium-ship">
              <div className="longest-ship-block medium-ship-block"></div>
              <p>select</p>
            </div>
          ) : (
            <div>
              <div className="longest-ship-block medium-ship-block"></div>
            </div>
          )}
          {selectedShip === "medium-ship" ? (
            <div className="longest-ship medium-ship">
              <div className="medium-div">
                <div className="longest-ship-block medium-ship-block"></div>
                <div className="longest-ship-block medium-ship-block"></div>
              </div>

              <p>select</p>
            </div>
          ) : (
            <div className="medium-div">
              <div className="longest-ship-block medium-ship-block"></div>
              <div className="longest-ship-block medium-ship-block"></div>
            </div>
          )}
          {selectedShip === "long-ship" ? (
            <div className="longest-ship medium-ship">
              <div className="longest-ship-block medium-ship-block"></div>
              <div className="longest-ship-block medium-ship-block"></div>
              <div className="longest-ship-block medium-ship-block"></div>
              <p>select</p>
            </div>
          ) : (
            <div className="longest-ship medium-ship">
              <div className="longest-ship-block medium-ship-block"></div>
              <div className="longest-ship-block medium-ship-block"></div>
              <div className="longest-ship-block medium-ship-block"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegisteringCoordinates;
