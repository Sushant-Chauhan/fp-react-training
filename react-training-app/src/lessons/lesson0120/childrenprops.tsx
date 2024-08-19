import React from "react";
import ChildrenWithBorder from "./childrenWithBorder";

export default function ChildrenProps() {
  const codesnippet = `
import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);`;

  return (
    <div>
      <h3> This is an example of composition with the children prop</h3>
      <ChildrenWithBorder TextString={"Hello World"}>
        <header>This is sample code in React</header>
        <pre>{codesnippet}</pre>
      </ChildrenWithBorder>
    </div>
  );
}
