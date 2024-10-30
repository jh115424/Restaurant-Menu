import "./eList.css";
import HeaderNavBar from "../Header/HeaderNavBar";

import { Link } from "react-router-dom";

export default function EList() {
  return (
    <div>
      <HeaderNavBar />

      <div className="e-list-container">
        <Link to="/e-list"></Link>
      </div>
    </div>
  );
}
