import "./App.css";
import headline from "./assets/headline.jpg";

function App() {
  return (
    <div className="App">
      <div>
        <section className="Header">
          <div className="flex">
            <div className="site_logo"></div>
            <div className="TGN_site_Tbobg"></div>
          </div>
          <ul className="menulist">
            <li>BOOKS</li>
            <li>VIDEOS</li>
            <li>THE YEAR AHEAD</li>
            <li style={{ color: "blue" }}>LOGIN</li>
            <li>
              <a
                style={{
                  color: "blue",
                  border: "1px solid blue",
                  padding: "5px",
                }}
                href="www.example.com"
              >
                SIGN UP
              </a>
            </li>
          </ul>
        </section>
        <hr className="ContentArea" />
      </div>
      <section className="ContentArea heromodule_hero" title="xyz">
        <img
          className="heromodule_heroleft"
          src={headline}
          alt="New Approach to teaching america"
        />
        <div className="heromodule_heroright">
          <p className="heromodule_label">SUM-THING NEW</p>
          <p className="heromodule_title">
            What does popcorn have to do with math?
          </p>
          <p className="heromodule_description">
            Its part of a new approach to teaching America's least favourite
            subject.
          </p>
          <p className="heromodule_herobyline">
            By <span className="heromodule_herobylinebold">Bill Gates</span> |
            Oct 03 2023
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
