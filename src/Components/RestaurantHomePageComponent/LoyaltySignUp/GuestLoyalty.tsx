import "./guestLoyalty.css";
import dinnerPrepare from "/public/dinnerPrepare.png";
import { Link } from "react-router-dom";
import footerLogo from "/public/footerLogo.webp";

export default function GuestLoyalty() {
  return (
    <>
      <div className="serving-container">
        <div className="event-planning">
          <h1>Looking to Have Your Next Event at Partania's?</h1>
          <h1 className="sub-header">PRIVATE SPACE</h1>
          <hr />
          <div className="event-rules">
            <h5>Seated:</h5>
            <p>75 guests</p>
            <br />
            <h5>Reception-style:</h5>
            <p>150 guests</p>
            <br />
            <h5>Elevator:</h5>
            <p>No</p>
            <br />
            <h5>Restaurant Buy-Outs:</h5>
            <p>Yes (Sun-Thurs only)</p>
          </div>
        </div>
        <div className="tax-rate">
          <h5>Sales Tax:</h5>
          <p>8.4%</p>
          <br />
          <h5>Service Charge</h5>
          <p>24%</p>
          <br />
          <h5>Parking:</h5>
          <p>
            Street parking (free after 6pm) Parking structures within 2 blocks
            (Milwaukee St & corner of Water & N. Michigan Ave.)
          </p>
        </div>

        <div className="event-planning-image">
          <img
            src={dinnerPrepare}
            alt="dinner prepare"
            className="event-planning-image"
          />
        </div>
      </div>

      <div className="guest-loyalty-container">
        <div className="loyalty">
          <h5>
            PREFERRED GUEST LOYALTY<br></br>PROGRAM
          </h5>
          <h6>
            START EARNING DELICIOUS REWARDS IN A<br></br>FEW SIMPLE CLICKS
          </h6>
          <p>
            $1 = 1 POINT<br></br>150 POINTS = $15 REWARD
          </p>
          <p>
            Rewards are redeemable at all Benson's Restaurant<br></br>Group
            locations: The Edison, AJ Bombers, Blue Bat<br></br>Kitchen, Smoke
            Shack, Onesto, and The Bridgewater
            <img className="footer-image" src={footerLogo} alt="footer" />
          </p>
        </div>

        <div className="sign-up">
          THREE WAYS TO SIGN UP:
          <p>1. online</p>
          <p>2. Sign up at the restaurant</p>
          <p>3. Text "PARTANIA" to 844-248-2672</p>
          <div className="help">
            <h4>Need assistance with loyalty?</h4>
            <h4>Email us at loyalty@partania.com</h4>
          </div>
          <div className="loyalty-button">
            <Link
              style={{ textDecoration: "none" }}
              to="/sign-up"
              className="sign-up-button"
            >
              {" "}
              SIGN UP
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}
