import React from "react";
import "./App.css";
import UserInfoForm from "./components/userinfoform";
import UserInfoList from "./components/userInfoList";

function App() {
  return (
    <div className="App">
      <div>
        <h3>User Info Form</h3>
        <UserInfoForm />;
      </div>
      <hr />
      <UserInfoList />
    </div>
  );
}

export default App;
