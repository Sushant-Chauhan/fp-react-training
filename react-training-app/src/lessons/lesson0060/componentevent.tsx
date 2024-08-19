import React from "react";

const ComponentEvent = () => {
  const onAgree = () => {
    console.log("User has agreed!");
  };

  const onDecline = () => {
    console.log("User has declined!");
  };

  return (
    <div>
      <p>This is a licence agreement</p>
      <button onClick={onAgree}>Agree</button>
      <button onClick={onDecline}>Decline</button>
    </div>
  );
};

export default ComponentEvent;
