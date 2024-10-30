// import React from 'react';
import HeaderNavBar from "./Components/Header/HeaderNavBar";
import History from "./Components/RestaurantHomePageComponent/History/History";
import Footer from "./Components/RestaurantHomePageComponent/Footer/Footer";
import AnniversaryBanner from "./Components/RestaurantHomePageComponent/Anniversary/AnniversaryBanner";
import GuestLoyalty from "./Components/RestaurantHomePageComponent/LoyaltySignUp/GuestLoyalty";
import MainImage from "./Components/RestaurantHomePageComponent/MainImage/MainImage";
import CelebratePage from "./Components/RestaurantHomePageComponent/Celebrate/CelebratePage";
import DinnerCarousel from "./Components/RestaurantHomePageComponent/DinnerCarousel/DinnerCarousel";


export default function HomePage() {
  return (
    <>
      <div>
        <HeaderNavBar />
        <DinnerCarousel />
        <AnniversaryBanner />
        <History />
        <CelebratePage />
        <GuestLoyalty />
        <MainImage />
        <Footer />
      </div>
    </>
  );
}
