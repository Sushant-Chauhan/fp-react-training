import logo from "./images/logo.jpeg";
import "./simplejsx-props.css";

function SimpleJsxHeader() {
  return (
    <div>
      <header className="page-hdr">
        <img src={logo} alt="logo" width="200px" />
        <h4>What do we Do?</h4>
        <p>Our mission:</p>
      </header>
      <hr></hr>
    </div>
  );
}

export default SimpleJsxHeader;
