import { Link } from "react-router-dom";
import "./headerNavBar.css";

const HeaderNavBar = () => {
  return (
    <div className="container">
      <div className="name">
        <h1>Partania's Mediterranean Bistro</h1>
      </div>
      <div className="Main-Header">
      <li>
          <Link style={{ textDecoration: "none" }} to="/">HOME</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/menu-title">MENUS</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/e-list">JOIN E-LIST</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/reservation">RESERVATIONS</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/contact-us">CONTACT US</Link>
        </li>
      </div>
    </div>
  );
};

export default HeaderNavBar;