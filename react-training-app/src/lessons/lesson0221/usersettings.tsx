import React from "react";
import { useNavigate } from "react-router";

const UserSettings = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
    //navigate("/users");
  };
  return (
    <div>
      <h2>User Settings</h2>
      <button onClick={onBack}>Back to User</button>
    </div>
  );
};

export default UserSettings;
