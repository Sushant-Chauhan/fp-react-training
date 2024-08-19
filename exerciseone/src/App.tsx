import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function onCountHandler() {
    setCount((prevValue) => prevValue + 1);
  }
  return (
    <div className="App">
      <Header />
      <Body count={count} />
      <Body count={count} />
      <Footer onCount={onCountHandler} />
    </div>
  );
}

export default App;
