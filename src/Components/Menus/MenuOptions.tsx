import HeaderNavBar from "../Header/HeaderNavBar";
import { Link } from "react-router-dom";

import "./menuOptions.css";

const MenuOptions = () => {
  return (
    <div className="menu-options-container">
    <div className="menu-options-banner">
      <h1 className="menu-intro-title">OUR MENUS</h1>
      <div className="menu-and-private-button-container">
        <div className="bottom-menu-page-button">
          <Link
            style={{ textDecoration: "none" }}
            to="/interior"
            className="interior"
          >
            MENU
          </Link>
        </div>
        <div className="private-menu-button">
          <Link
            style={{ textDecoration: "none" }}
            to="/private-events"
            className="private-events"
          >
            PRIVATE EVENTS
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MenuOptions;
