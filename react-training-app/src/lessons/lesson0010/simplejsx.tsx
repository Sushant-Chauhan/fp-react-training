import logo from "./images/logo.jpeg";
import "./simplejsx.css";

function SimpleJsx() {
  return (
    <div>
      <header className="page-hdr">
        <img src={logo} alt="logo" width="200px" />
        <h4>What do we Do?</h4>
        <p>Our mission:</p>
      </header>
      <hr></hr>
      <article>
        <h3>MISSION</h3>
        <p>
          To protect, restore and enhance environmental quality towards good
          public health, environmental integrity and economic viability.
        </p>
        <h3>VISION</h3>
        <p>
          A nation empowered to protect our finite natural resources, attuned to
          the pursuit of sustainable development, for a clean and healthy
          environment that enhances the Filipino Quality of life for present and
          future generations.
        </p>
        <h3>THRUST</h3>
        <p>
          {" "}
          Ensure Attainment of an Environmental Quality that is conducive for
          present and future generations Air, Water and Toxic and Hazardous
          Chemicals Management Pursue Cooperation and Partnership Environmental
          Impact Assessment System Implementation Solid Waste Management
          Secretariat assistance to the Pollution Adjudication Board Lead by
          Example Environmental Compliance and Organizational Performance{" "}
        </p>
      </article>
      <hr></hr>
      <footer className="page-footer">
        <ul className="footer-list">
          <li className="li-item">About</li>
          <li className="li-item">Links</li>
        </ul>
      </footer>
    </div>
  );
}

export default SimpleJsx;
