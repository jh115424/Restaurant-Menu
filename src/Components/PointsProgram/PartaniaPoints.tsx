import "./partaniaPoints.css";
import HeaderNavBar from "../Header/HeaderNavBar";
import Footer from "../RestaurantHomePageComponent/Footer/Footer";
import React from "react";
import pointsImage from "/public/pointsImage.png";
import currentPoint from "/public/currentPoint.png";
import memberShield from "/public/memberShield.png";
import nextLevel from "/public/nextLevel.png";

const bronze = 990;
const silver = 1990;
const gold = 2990;
const platinum = 3000;

export default function PointsProgram() {
  //these are the 4 card updates
  const [currentPoints, setCurrentPoints] = React.useState(0);
  const [membershipStatus, setMembershipStatus] = React.useState("");
  const [nextTierPoints, setNextTierPoints] = React.useState(0);
  const [memberActivityPoints, setMemberActivityPoints] = React.useState("");
  const [submittedPoints, setSubmittedPoints] = React.useState(false);

  const pointsHandleClick = () => {
    const newPointTotal = currentPoints + 10;

    setCurrentPoints(currentPoints + 10);

    if (newPointTotal <= bronze) {
      setMembershipStatus("bronze");
    } else if (newPointTotal <= silver) {
      setMembershipStatus("silver");
    } else if (newPointTotal <= gold) {
      setMembershipStatus("gold");
    } else setMembershipStatus("platinum");

    if (newPointTotal <= bronze) {
      setNextTierPoints(silver - newPointTotal);
    } else if (newPointTotal <= silver) {
      setNextTierPoints(gold - newPointTotal);
    } else if (newPointTotal <= gold) {
      setNextTierPoints(platinum - newPointTotal);
    } else {
      setNextTierPoints(0);
    }

    if (newPointTotal <= bronze) {
      setMemberActivityPoints("bronze");
    } else if (newPointTotal <= silver) {
      setMemberActivityPoints("silver");
    } else if (newPointTotal <= gold) {
      setMemberActivityPoints("gold");
    } else setMemberActivityPoints("platinum");

    setSubmittedPoints(true);
  };


  
  return (
    <>
      <div className="main-container">
        <HeaderNavBar />

        {submittedPoints && (
          <div className="points-success-message">
            <h2>Thank you for dining with us.</h2>
            <p>Your points and membership status have been updated.</p>
          </div>
        )}

        <div className="pointsTitleContainer">
          <h1>Your Rewards Balance</h1>

          <p>Exclusive benefits for our most valued guests</p>
        </div>

        <div className="pointsCardContainer">
          <div className="currentPointImage">
            <img
              src={currentPoint}
              alt="point-card-image"
              className="pointTrayImage"
            />
          </div>
          <h2 className="currentPointLabel">Current Points:</h2>
          <span className="pointsValue">{currentPoints}</span>
        </div>
        <div className="pointsCardDivider"></div>
        <div className="tierStatus">
          <div className="memberShieldImage">
            <img
              src={memberShield}
              alt="member-shield-image"
              className="greenShieldImage"
            />
          </div>
          <h2 className="cardTitles">Your membership status:</h2>
          <span className="statusValue">{membershipStatus}</span>
        </div>
        <div className="pointsCardDivider"></div>
        <div className="tierStatus">
          <div className="nextLevelImage">
            <img src={nextLevel} alt="upArrow" className="upLevelImage" />
          </div>
          <h2 className="cardTitles">Points to next level:</h2>
          <span className="nextTierValue">{nextTierPoints}</span>
        </div>
        <div className="pointsCardDivider"></div>
        <div className="tierStatus">
          <div className="clipBoard">
            <img src={nextLevel} alt="upArrow" className="nextLevelImage" />
          </div>
          <h2 className="cardTitles">Recent activity:</h2>
          <span className="statusValue">{memberActivityPoints}</span>
        </div>
        <div>
          <button
            className="pointButton"
            type="button"
            onClick={pointsHandleClick}
          >
            Add Reward Points
          </button>
        </div>
        <div className="pointsCardDivider"></div>

        <div className="memberExclusiveBenefitsContainer">
          <div className="benefitsCard">
            <li>
              <h4>Membership brings rewards to every dining experience</h4>
              <ul> - Earn 10 points per dinner visit</ul>
              <ul> - Earn double points on your birthday week</ul>
              <ul> - Earn bonus points on chef's select menu nights</ul>
              <ul> - Early access to special dining events</ul>
              <p>And so much more!</p>
            </li>
            <div className="benefitsCardImage">
              <img
                src={pointsImage}
                alt="points image"
                className="gourmet-plate"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
