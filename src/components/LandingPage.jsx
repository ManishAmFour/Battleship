import { Link } from "react-router";
import { useState } from "react";
import "../styles/landing.css";

function CredentialForm() {
  const [inputName, SetInputName] = useState("");
  return (
    <>
      <div className="credentials-form">
        <div className="title-name">BattleShip</div>
        <div className="credentials">
          {" "}
          <input
          className="input-bar"
            value={inputName}
            onChange={(e) => {
              SetInputName(e.target.value);
            }}
            placeholder="Enter Your Name"
          />
          <Link to={`/RegisteringCoordinates/${inputName}`}>
            <button className="enter-button">Enter</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CredentialForm;
