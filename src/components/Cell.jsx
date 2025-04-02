import { useState } from "react";

function Cell(props) {
  const [cellStatus, setStatus] = useState("unchecked");
  let position = props.position;
  function checkTheStatus(position) {
    props.stateUpdation(position);
    //props.Onclick(position);
  }

  return (
    <>
      <div
        onClick={() => {
          setStatus("checked");
          checkTheStatus(position);
        }}
        className={`${position}
          ${
            cellStatus === "unchecked"
              ? "blocks-within-unchecked"
              : "blocks-within-checked"
          }`}
      ></div>
    </>
  );
}

export default Cell;
