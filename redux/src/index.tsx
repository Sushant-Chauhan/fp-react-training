import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReactReduxProvider } from "react-redux";

import "./index.css";
import App from "./App";
import { store } from "./state/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReactReduxProvider store={store}>
      <App />
    </ReactReduxProvider>{" "}
  </React.StrictMode>
);
