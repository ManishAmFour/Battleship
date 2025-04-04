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
  const navigate = useNavigate();
  const [selectedShip, setSelectedShip] = useState("small-ship");
  const [selectedValues, setSelectedValues] = useState([]);
  let UserName = window.location.pathname.slice(24);

  useEffect(() => {
    if (selectedShip === "selection-done") {
      let CompCoordinates = [];
      for (let i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * 30);
        Math.floor(Math.random() * 30);
        CompCoordinates.push(Mark[randomValue].position);

        let finalResult = CompCoordinates.concat(selectedValues);
        navigate(`/BattleGround/${JSON.stringify(finalResult)}`);
      }
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
    <div>
      <div className="blueprint">
        {
          <div className="player">
            <div className="horizontal-strip">
              {Mark.map((value, index) => {
                if (value.position.x === 0) {
                  return (
                    <div key={JSON.stringify(value.position)}>
                      <div
                        onClick={() => {
                          registringThePlayer(value.position, index);
                        }}
                        className={
                          value.mark === "mark"
                            ? "blocks-within-checked"
                            : "blocks-within-unchecked"
                        }
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
                    <div key={JSON.stringify(value.position)}>
                      <div
                        onClick={() => {
                          registringThePlayer(value.position, index);
                        }}
                        className={
                          value.mark === "mark"
                            ? "blocks-within-checked"
                            : "blocks-within-unchecked"
                        }
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
                    <div key={JSON.stringify(value.position)}>
                      <div
                        onClick={() => {
                          registringThePlayer(value.position, index);
                        }}
                        className={
                          value.mark === "mark"
                            ? "blocks-within-checked"
                            : "blocks-within-unchecked"
                        }
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
                    <div key={JSON.stringify(value.position)}>
                      <div
                        onClick={() => {
                          registringThePlayer(value.position, index);
                        }}
                        className={
                          value.mark === "mark"
                            ? "blocks-within-checked"
                            : "blocks-within-unchecked"
                        }
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
                    <div key={JSON.stringify(value.position)}>
                      <div
                        onClick={() => {
                          registringThePlayer(value.position, index);
                        }}
                        className={
                          value.mark === "mark"
                            ? "blocks-within-checked"
                            : "blocks-within-unchecked"
                        }
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
        Choose The positioning of the ship
        {selectedShip === "small-ship" ? (
          <div className="longest-ship medium-ship">
            <div className="longest-ship-block medium-ship-block"></div>
            <p>select one value</p>
          </div>
        ) : (
          <div>
            <div className="longest-ship-block medium-ship-block"></div>
          </div>
        )}
        {selectedShip === "medium-ship" ? (
          <div className="longest-ship medium-ship">
            <div className="longest-ship-block medium-ship-block"></div>
            <div className="longest-ship-block medium-ship-block"></div>
            <p>select one value</p>
          </div>
        ) : (
          <div className="longest-ship medium-ship">
            <div className="longest-ship-block medium-ship-block"></div>
            <div className="longest-ship-block medium-ship-block"></div>
          </div>
        )}
        {selectedShip === "long-ship" ? (
          <div className="longest-ship medium-ship">
            <div className="longest-ship-block medium-ship-block"></div>
            <div className="longest-ship-block medium-ship-block"></div>
            <div className="longest-ship-block medium-ship-block"></div>
            <p>select one value</p>
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
  );
}

export default RegisteringCoordinates;
