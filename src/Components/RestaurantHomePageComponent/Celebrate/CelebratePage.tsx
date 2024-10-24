import celebrate from "/public/celebrate.jpg";

import { Link } from "react-router-dom";
// import HeaderNavBar from "/Component/Header/HeaderNavBar";

// import HeaderNavBar from "../Header/HeaderNavBar";
// import Interior from "./CelebratePage";
import "./celebratePage.css"

export default function CelebratePage() {
  return (
    <>
      {/* <HeaderNavBar /> */}
      <div className="celebrate-page-container">
        <div className="celebrate-page-header">
          <h1>The Space</h1>
        </div>
        <div className="celebrate-page-image-banner">
          <img
            src={celebrate}
            alt="celebrate"
            className="celebrate-page-image-banner"
          />
        </div>
        <div className="space-buttons">
          <div className="celebrate-page-button">
            <Link
              style={{ textDecoration: "none" }}
              to="/interior"
              className="interior"
            >
              SEE INSIDE
            </Link>
          </div>
          <div className="celebrate-page-eList-button">
            <Link style={{ textDecoration: "none" }} to="/e-list">
              JOIN OUR E-LIST
            </Link>
        
          </div>
        </div>
      </div>
    </>
  );
}
