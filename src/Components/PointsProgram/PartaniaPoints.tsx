import "./partaniaPoints.css";
import HeaderNavBar from "../Header/HeaderNavBar";
import Footer from "../RestaurantHomePageComponent/Footer/Footer";
import React from "react";

export default function PointsProgram({
  setPointsData,
}: {
  setPointsData: (data: {
    pointsBalance: string;
    memberTier: string;
    pointsToNextTier: string;
    recentActivity: string;
  }) => void;
}) {
  const [pointsBalance, setPointsBalance] = React.useState("");
  const [memberTier, setMemberTier] = React.useState("");
  const [pointsToNextTier, setPointsToNextTier] = React.useState("");
  const [recentActivity, setRecentActivity] = React.useState("");
  const [submittedPoints, setSubmittedPoints] = React.useState(false);

  const handlePointSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedPoints(true);

    setPointsData({
      pointsBalance,
      memberTier,
      pointsToNextTier,
      recentActivity,
    });

    setPointsBalance("");
    setMemberTier("");
    setPointsToNextTier("");
    setRecentActivity("");
  };
  // clear fields after submit

  console.log("Points updated:", {
    pointsBalance,
    memberTier,
    pointsToNextTier,
    recentActivity,
  });

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
          <p>Exclusive benefits for our most valued guests.</p>
        </div>

        <div className="pointsCardContainer">
          <h1 className="currentPointLabel">Current Points:</h1>
        </div>
        <div className="pointsCardDivider"></div>

      </div>
      <div className="tierStatus">
          <h2>Your membership status:</h2>
      </div>

      <Footer />
    </>
  );
}
