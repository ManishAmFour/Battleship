import { Link } from "react-router";
import { useState } from "react";

function CredentialForm() {
  const [inputName, SetInputName] = useState("");
  return (
    <>
      <div>
        <input
          value={inputName}
          onChange={(e) => {
            SetInputName(e.target.value);
          }}
          placeholder="Enter Your Name"
        />
        <Link to={`/RegisteringCoordinates/${inputName}`}>
          <button>Enter</button>
        </Link>
      </div>
    </>
  );
}

export default CredentialForm;
