import React from "react";

interface FuncProps {
  onSelectAgree: () => void;
  onSelectDecline: () => void;
  confirm: string;
}

const ComponentEvent: React.FC<FuncProps> = ({
  onSelectAgree,
  onSelectDecline,
  confirm,
}) => {
  return (
    <div>
      <p>This is a licence agreement</p>
      <button onClick={onSelectAgree}>Agree</button>
      <button onClick={onSelectDecline}>Decline</button>
      <p>{confirm}</p>
    </div>
  );
};

export default ComponentEvent;
