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
          <div className="interior-page-button">
            <Link
              style={{ textDecoration: "none" }}
              to="/interior"
              className="interior"
            >
              SEE INSIDE
            </Link>
          </div>
          <div className="interior-page-eList-button">
            <Link style={{ textDecoration: "none" }} to="/e-list">
              JOIN OUR E-LIST
            </Link>
          </div>
        </div>
      </div>

      <div className="menu-options-container">
        <div className="menu-options-banner">
          <h1 className="menu-intro-title">OUR MENUS</h1>
          <div className="menu-and-private-button-container">
            <div className="bottom-menu-page-button">
              <Link
                style={{ textDecoration: "none" }}
                to="/menu-list"
                className="menu-list"
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
    </>
  );
}
