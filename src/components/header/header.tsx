import "./header.css";
import logo from "../../assets/loblawsLogo.png";

function Header() {
  return (
    <div className="font full-header hdr">
      <img src={logo} alt="" className="logo"></img>
      <h2 className="title">Morello's Your Independent Grocer</h2>

      <a href="." className="nav-links abt">
        About
      </a>

      <a href="." className="nav-links contact">
        Contact
      </a>
      <a href="." className="nav-links emp">
        Employee Links
      </a>
    </div>
  );
}

export default Header;
