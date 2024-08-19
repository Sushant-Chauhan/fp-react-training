import { useState } from "react";

import "../App.css";

const Headline: React.FC<{
  src: string;
  title: string;
  description: string;
  onClicked: () => void;
}> = ({ src, title, description, onClicked }) => {
  let [displayVal, setDisplayVal] = useState(0);
  let [count, setCount] = useState(0);

  function onAddCount() {
    setCount((prevVal) => prevVal + 1);
  }

  const onShowClicked = () => {
    setDisplayVal((prevVal) => {
      return prevVal + 1;
    });
    onClicked();
  };

  console.log("Show Clicked", title, displayVal);

  return (
    <div>
      <button onClick={onShowClicked}>Hide</button>
      <button onClick={onAddCount}>Count</button>
      <p> {`Value of Count: ${count}`}</p>
      <section className="ContentArea heromodule_hero" title="xyz">
        <img
          className="heromodule_heroleft"
          src={src}
          alt="New Approach to teaching america"
        />
        <div className="heromodule_heroright">
          <p className="heromodule_label">SUM-THING NEW</p>
          <p className="heromodule_title">{title}</p>
          <p className="heromodule_description">{description}</p>

          <p className="heromodule_herobyline">
            By <span className="heromodule_herobylinebold">Bill Gates</span> |
            Oct 03 2023
          </p>
        </div>
      </section>
    </div>
  );
};

export default Headline;
