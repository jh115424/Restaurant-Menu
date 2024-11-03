import HeaderNavBar from "../Header/HeaderNavBar";
import cutlery from "/public/cutlery.png";
import "./menuTitle.css";
import MenuBody from "../MenuBodyComponent/MenuDinnerAppetizer";

export default function MenuTitle() {
  return (
    <>
      <div>
        <HeaderNavBar />

        <div className="Menu-flex-container">
          <div className="fork-container">
            <div className="menu-image-container">
              <img src={cutlery} alt="cutleryPic" />
            </div>

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
