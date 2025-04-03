import { useState } from "react";

function Cell(props) {
  const [cellStatus, setStatus] = useState("unchecked");
  let position = props.position;
  function checkTheStatus(position) {
    props.enemyPosition.playerGameBoard.receiveAttack(position);

    if (props.enemyPosition.playerGameBoard.ship.status === false) {
      let NewArray = [...props.enemyPosition.playerGameBoard.MissedAttacks];
      let NewValue = { ...props.enemyPosition };
      NewValue.playerGameBoard.MissedAttacks = NewArray;
      props.stateUpdation(NewValue);
    } else {
      let NewValue = { ...props.enemyPosition };
      props.stateUpdation(NewValue);
    }
  }

  return (
    <>
      <div
        onClick={() => {
          let dontContinue = false;
          for (
            let i = 0;
            i < props.enemyPosition.playerGameBoard.MissedAttacks.length;
            i++
          ) {
            if (
              position.x ===
                props.enemyPosition.playerGameBoard.MissedAttacks[i].x &&
              position.y ===
                props.enemyPosition.playerGameBoard.MissedAttacks[i].y
            ) {
              dontContinue = true;
              break;
            }
          }
          if (!dontContinue) {
            setStatus("checked");
            checkTheStatus(position);
          }
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
