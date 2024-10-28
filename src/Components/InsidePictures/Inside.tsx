import "./inside.css";
import HeaderNavBar from "../Header/HeaderNavBar";
import menuHeaderPic from "/public/menuHeaderPic.png";
import avliBar from "/public/avliBar.webp";
import avliExecutiveChefNikolaosKapernaros from "/public/avliExecutiveChefNikolaosKapernaros.webp";
import avliNightParty from "/public/avliNightParty.jpg";
import avliOnThePark from "/public/avliOnThePark.png";
import avlioutdoors from "/public/avlioutdoors.jpg";
import avliPrivacyBooth from "/public/avliPrivacyBooth.jpg";
import avliPrivateDiningRoomPic from "/public/avliPrivateDiningRoomPic.jpg";
import avliRooftop from "/public/avliRooftop.jpg";
import avliRooftop2 from "/public/avliRooftop2.jpg";
import Footer from "../RestaurantHomePageComponent/Footer/Footer";




export default function Inside() {
  return (
    <>
      <HeaderNavBar />
      <div className="inside-container">
        <div className="menuHeaderPic">
          <img src={menuHeaderPic} alt="menuHeaderPic" />
        </div>
        <p>
          Welcome to our restaurant! We are thrilled to have you here and hope
          you enjoy your experience.
        </p>
        <p>
          Feel free to explore the various areas and enjoy the serene
          atmosphere.
        </p>
      </div>
      <div className="luxury-dining-pics">
        <div className="avli-dining">
          <img src={avliBar} alt="avliBar" />
        </div>
   
        <div className="avli-dining">
          <img src={avliNightParty} alt="avliNightParty" />
        </div>
        <div className="avli-dining">
          <img src={avliOnThePark} alt="avliOnThePark" />
        </div>
        <div className="avli-dining">
          <img src={avlioutdoors} alt="avlioutdoors" />
        </div>
        <div className="avli-dining">
          <img src={avliPrivacyBooth} alt="avliPrivacyBooth" />
        </div>
        <div className="avli-dining">
          <img src={avliPrivateDiningRoomPic} alt="avliPrivateDiningRoomPic" />
        </div>
        <div className="avli-dining">
          <img src={avliRooftop} alt="avliRooftop" />
        </div>
        <div className="avli-dining">
          <img src={avliRooftop2} alt="avliRooftop2" />
        </div>
      </div>
      <div className="avli-dining-chef">
        <img
          src={avliExecutiveChefNikolaosKapernaros}
          alt="avliExecutiveChefNikolaosKapernaros"
        />
        <p>Executive Chef, Nikolaos Kapernaros</p>
      </div>
      <Footer />
 
   
    </>
  );
}
