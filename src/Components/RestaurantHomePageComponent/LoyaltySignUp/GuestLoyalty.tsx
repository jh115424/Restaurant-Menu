import "./guestLoyalty.css"
import dinnerPrepare from "/public/dinnerPrepare.png"

export default function GuestLoyalty () {
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
        </>
    )
}