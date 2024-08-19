import React from "react";
import "./styles.css";
import CounterOne from "./counter1";
import CounterTwo from "./counter2";
import UserForm from "./userform";

export default function CounterHookApp() {
  return (
    <div className="App">
      <h1>React Custom Hooks</h1>
      <section className="counter-container">
        <CounterOne />
        <CounterTwo />
      </section>
      <section className="form-container">
        <UserForm />
      </section>
    </div>
  );
}
