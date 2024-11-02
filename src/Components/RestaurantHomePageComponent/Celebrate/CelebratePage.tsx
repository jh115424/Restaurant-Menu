import celebrate from "/public/celebrate.jpg";

import { Link } from "react-router-dom";

import "./celebratePage.css";
// import "/menuList.css"

export default function CelebratePage() {
  return (
    <>
      <div className="interior-page-container">
        <div className="interior-page-header">
          <h1>The Space</h1>
        </div>
        <div className="interior-page-image-banner">
          <img
            src={celebrate}
            alt="celebrate"
            className="interior-page-image-banner"
          />
        </div>
        <div className="space-buttons">
          <Link style={{ textDecoration: "none" }} to="/interior">
            <button className="interior">SEE INSIDE</button>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/e-list">
            <button className="e-list">JOIN OUR E-LIST</button>
          </Link>
        </div>
      </div>

      <div className="menu-options-container">
        <div className="menu-options-banner">
          <h1 className="menu-intro-title">OUR MENUS</h1>

          <div className="menu-and-private-button-container">
            <Link style={{ textDecoration: "none" }} to="/menu-title">
              <button className="celebrate-menu-title">MENU</button>
            </Link>

            <Link style={{ textDecoration: "none" }} to="/private-events">
              <button className="private-events">PRIVATE EVENTS</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
