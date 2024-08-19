import "./App.css";
import { useState } from "react";
import ChildCounter from "./Components/childCounter";

import Header from "./Components/header";
import Headline from "./Components/Headline";

function App() {
  const [showHead1, setShowHead1] = useState(true);
  const [showHead2, setShowHead2] = useState(true);

  const onShowClicked = (num: number) => {
    if (num === 1) {
      setShowHead1((prevVal) => {
        return !prevVal;
      });
    } else {
      setShowHead2((prevVal) => {
        return !prevVal;
      });
    }
    console.log("Show Clicked ", num);
  };

  return (
    <div className="App">
      <Header />
      {showHead1 ? (
        <Headline
          src={"./images/headline.jpg"}
          title={" What does popcorn have to do with math?"}
          description={
            "Its part of a new approach to teaching America's least favourite subject."
          }
          onClicked={() => onShowClicked(1)}
        />
      ) : (
        <button onClick={() => onShowClicked(1)}>Show</button>
      )}
      {showHead2 ? (
        <Headline
          src={"./images/headline2.jpg"}
          title={" This is Bill Gates"}
          description={"Description of Bill Gates"}
          onClicked={() => onShowClicked(2)}
        />
      ) : (
        <button onClick={() => onShowClicked(2)}>Show</button>
      )}
    </div>
  );
}

// const App = () => {
//   let [value, setValue] = useState(0);

//   function onAddCount() {
//     value++;
//     setValue(value);
//   }

//   return (
//     <div>
//       <p>{value}</p>
//       <ChildCounter onAddCount={onAddCount} />
//     </div>
//   );
// };

export default App;
