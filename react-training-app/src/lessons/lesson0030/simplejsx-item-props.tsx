import React from "react";
import "./simplejsx-props.css";

const SimpleJsxItem: React.FC<{ hdr: string; para: string }> = ({
  hdr,
  para,
}) => {
  return (
    <div>
      <h3>{hdr}</h3>
      <p>{para}</p>
    </div>
  );
};

export default SimpleJsxItem;
