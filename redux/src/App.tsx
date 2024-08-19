// npm install --save @types/react-redux  react-redux redux redux-thunk
// types/react-redux : for defining types for react-redux packages. When you use packages with typescript you have to download their type packages as well.
// react-redux : You need this to work connect redux to react
// redux : Redux library itself
// redux-thunk : You need this to create an actionCreator

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { State } from "./state";
import { ActionType } from "./state/action-types";

function App() {
  const dispatch = useDispatch();
  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button
        onClick={() =>
          dispatch({
            type: ActionType.DEPOSIT,
            payload: 1000,
          })
        }
      >
        Deposit
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ActionType.WITHDRAW,
            payload: 500,
          })
        }
      >
        Withdraw
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ActionType.BANKRUPT,
          })
        }
      >
        Bankrupt
      </button>
    </div>
  );
}

export default App;
