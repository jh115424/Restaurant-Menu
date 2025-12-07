import "./partaniaPoints.css";
import HeaderNavBar from "../Header/HeaderNavBar";
import Footer from "../RestaurantHomePageComponent/Footer/Footer";
import React from "react";

// export default function PointsProgram() {
//   return (
//     <>
//       <div>
//        <HeaderNavBar />
        
//         <h1>Point System</h1>
//       </div>
//       <Footer />
//     </>
//   );
// }


export default function PointsProgram({
  setPointsData,
}: {
  setPointsData: (data: {
    pointsBalance: number;
    memberTier: string;
    pointsToNextTier: number;
    recentActivity: { description: string; points: number; date: string }[];
  }) => void;
}) {

  
  // component code goes here
}
