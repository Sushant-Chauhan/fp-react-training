import React from "react";
import useInput from "./useinput";

function UserForm() {
  const [name, resetName, bindToInputName] = useInput("");
  const [occupation, resetOccupation, bindToInputOccupation] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    resetName();
    resetOccupation();
  };

  console.log(bindToInputName, bindToInputOccupation);
  return (
    <div className="form-details">
      <div className="user-info">
        <h3>{name}</h3>
        <h3>{occupation}</h3>
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <div>
          <label>Name</label>
          <input type="text" {...bindToInputName} />
        </div>
        <div>
          <label>Occupation</label>
          <input type="text" {...bindToInputOccupation} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default UserForm;
