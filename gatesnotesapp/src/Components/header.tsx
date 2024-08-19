import "../App.css";

function Header() {
  let varOne = "MP3";
  return (
    <div>
      <section className="Header">
        <div className="flex">
          <div className="site_logo"></div>
          <div className="TGN_site_Tbobg"></div>
        </div>
        <ul className="menulist">
          <li>{varOne}</li>
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
            >
              SIGN UP
            </a>
          </li>
        </ul>
      </section>
      <hr className="ContentArea" />
    </div>
  );
}

export default Header;
