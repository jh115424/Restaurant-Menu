// import React from 'react';
import HeaderNavBar from "./Components/Header/HeaderNavBar";
import History from "./Components/RestaurantHomePageComponent/History/History";
import Footer from "./Components/Footer/Footer";
import AnniversaryBanner from "./Components/RestaurantHomePageComponent/Anniversary/AnniversaryBanner";
import GuestLoyalty from "./Components/RestaurantHomePageComponent/LoyaltySignUp/GuestLoyalty";
import MainImage from "./Components/RestaurantHomePageComponent/MainImage/MainImage";
import CelebratePage from "./Components/RestaurantHomePageComponent/Celebrate/CelebratePage";

export default function HomePage() {
  return (
    <>
      <div>
        <HeaderNavBar />
        <MainImage />
        <AnniversaryBanner />
        <History />
        <CelebratePage />
        <GuestLoyalty />
        <Footer />
      </div>
    </>
  );
}
