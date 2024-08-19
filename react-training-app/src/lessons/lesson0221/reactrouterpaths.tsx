import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./about";
import Users from "./users";
import Home from "./home";
import Navbar from "./navbar";
import Settings from "./settings";
import UserSettings from "./usersettings";

export default function ReactRouterPaths() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/settings" element={<UserSettings />} />{" "}
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}
