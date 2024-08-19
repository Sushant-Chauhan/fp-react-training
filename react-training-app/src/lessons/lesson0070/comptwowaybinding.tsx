import React from "react";
import ComponentEvent from "./componentevent";
import { useState } from "react";

const ComponentTwoWayBinding = () => {
  const [val, setVal] = useState("Not Confirmed");

  const onAgree = () => {
    setVal("User has agreed!");
  };

  const onDecline = () => {
    setVal("User has declined!");
  };

  return (
    <div>
      <ComponentEvent
        onSelectAgree={onAgree}
        onSelectDecline={onDecline}
        confirm={val}
      />
    </div>
  );
};

export default ComponentTwoWayBinding;
