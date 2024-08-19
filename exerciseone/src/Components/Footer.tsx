import React from "react";

export default function Footer(props: { onCount: () => void }) {
  console.log("Footer is rendered");
  return (
    <div>
      <button onClick={props.onCount}>Count</button>
    </div>
  );
}
