// import React from 'react';
import HeaderNavBar from "./Components/Header/HeaderNavBar";
import MenuOptions from "./Components/Menus/MenuOptions";
import History from "./Components/RestaurantHomePageComponent/History/History";
import Footer from "./Components/Footer/Footer";
import AnniversaryBanner from "./Components/RestaurantHomePageComponent/Anniversary/AnniversaryBanner";
import Celebrate from "./Components/RestaurantHomePageComponent/Celebrate/CelebratePage";
import MainImage from "./Components/RestaurantHomePageComponent/MainImage/MainImage";
import InteriorPage from "./Components/RestaurantHomePageComponent/Celebrate/CelebratePage";
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
    
        <MenuOptions />
        <Footer />
      </div>

    </>
  );
}
