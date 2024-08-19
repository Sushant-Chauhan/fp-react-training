import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Footer from "./Footer";
import Header from "./Header";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">Home Page Content</div>
    <Footer />
    <div>Name: home</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
