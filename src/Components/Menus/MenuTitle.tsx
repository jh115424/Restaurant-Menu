import HeaderNavBar from "../Header/HeaderNavBar";
import cutlery from "/public/cutlery.png";
import "./menuTitle.css";
import MenuBody from "../MenuBodyComponent/MenuBody";

export default function MenuTitle() {
  return (
    <>
      <div>
        <HeaderNavBar />
   
        <div className="Menu-flex-container">
          <div className="menu-image-container">
            <img src={cutlery} alt="cutleryPic" />

            <h1 className="menu-name">
              Authentic<br></br>
              Mediterranean
            </h1>

            <div className="menu-image-container">
              <img src={cutlery} alt="cutleryPic" />
            </div>
        
          </div>
          <MenuBody />
        </div>
     
      </div>
    </>
  );
}
