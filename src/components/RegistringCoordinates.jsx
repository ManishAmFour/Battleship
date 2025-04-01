import "../styles/options.css";
import { useState } from "react";

function RegisteringCoordinates() {
  const [mousePosition, setMousePosition] = useState("unactive");
  const [XAxis, setXAxis] = useState(0);
  const [YAxis, setYAxis] = useState(0);
  if (mousePosition === "active") {
    document.addEventListener("mousemove", (e) => {
      setXAxis(e.clientX);
      setYAxis(e.clientY);
    });
  } else if (mousePosition === "unactive") {
    document.addEventListener("mousemove", (e) => {
      setXAxis(0);
      setYAxis(0);
    });
  }

  return (
    <div
      onMouseUp={() => {
        setMousePosition("unactive");
      }}
    >
      <div className="blueprint">
        <div className="player">
          <div className="horizontal-strip"></div>
          <div className="horizontal-strip">
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
          </div>
          <div className="horizontal-strip">
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
          </div>
          <div className="horizontal-strip">
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
          </div>
          <div className="horizontal-strip">
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
          </div>
          <div className="horizontal-strip">
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
            <div className="blocks-within-unchecked"></div>
          </div>
        </div>
      </div>
      <div className="options-of-ships">
        {console.log(mousePosition)}
        {console.log(XAxis)}
        {mousePosition === "active" ? console.log("j") : null}
        <div
          onMouseDown={() => {
            setMousePosition("active");
          }}
          onMouseUp={() => {
            setMousePosition("unactive");
          }}
          className="longest-ship"
        >
          <div className="longest-ship-block"></div>
          <div className="longest-ship-block"></div>
          <div className="longest-ship-block"></div>
          <div className="longest-ship-block"></div>
          <div className="longest-ship-block"></div>
          <div className="longest-ship-block"></div>
        </div>
        <div className="longest-ship medium-ship">
          <div className="longest-ship-block medium-ship-block"></div>
          <div className="longest-ship-block medium-ship-block"></div>
          <div className="longest-ship-block medium-ship-block"></div>
        </div>
        <div className="longest-ship short-ship">
          <div className="longest-ship-block short-ship-block"></div>
        </div>
      </div>
    </div>
  );
}

export default RegisteringCoordinates;
