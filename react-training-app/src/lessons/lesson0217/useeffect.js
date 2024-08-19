import { useEffect, useState } from "react";

export default function UseEffectApp() {
  const [count, setCount] = useState(0);

  const [state, setState] = useState(0);

  // Runs only on the first render
  useEffect(() => {
    console.log("mounted");
  }, []);

  // Runs on Every Render
  useEffect(() => {
    console.log("updated");
  });

  // Runs on the first render and every time any dependency changes
  useEffect(() => {
    console.log("updated with dependencies");
  }, [count]);

  useEffect(() => {
    const onMousedown = () => {
      console.log("mousedown");
    };
    // Subscripe to Event Handler
    console.log("Adding Subscription");
    window.addEventListener("mousedown", onMousedown);
    return () => {
      console.log("cleanup");
      window.removeEventListener("mousedown", onMousedown);
    };
  });

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <h2>Change State {state}</h2>
      <button
        onClick={() => {
          setCount((state) => state + 1);
        }}
      >
        Add Count
      </button>
      <button
        onClick={() => {
          setState((state) => state + 1);
        }}
      >
        Change State
      </button>
    </div>
  );
}
