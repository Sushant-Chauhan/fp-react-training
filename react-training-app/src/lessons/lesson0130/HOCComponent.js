import { useState } from "react";

// Wrapped component, that will be passed as an argument to the HOC
const Button = (props) => (
  <button onClick={props.increase}>Btn clicks count: {props.counter}</button>
);

// Yet another wrapped component, that will be passed as an argument to the HOC
const Label = (props) => (
  <label onMouseOut={props.increase}>Mouse out count: {props.counter}</label>
);

// Higher Order Component
const withCounting = (WrappedComponent) => {
  return function WithCountingComponent(props) {
    const [count, setCount] = useState(0);

    // This is the enhancement - adding increase method to ANY WrappedComponent
    // that will be passed to the Hoc function
    function increaseCounter() {
      setCount((prevState) => {
        return count + 1;
      });
    }
    return (
      // Better to bind method here than in constructor as bind creates a new function, thus consumes memory.
      <WrappedComponent counter={count} increase={() => increaseCounter()} />
    );
  };
};

const EnhancedButton = withCounting(Button);
const EnhancedLabel = withCounting(Label);

// Parent component to wrap both enhanced components for rendering.
const HOCContainer = () => (
  <div>
    <Label />
    <br />
    <Button />
    <hr />
    <EnhancedButton />
    <br />
    <EnhancedLabel />
    <br />
  </div>
);

export default HOCContainer;
