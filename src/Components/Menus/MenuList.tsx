import HeaderNavBar from "../Header/HeaderNavBar";
import cutlery from "/public/cutlery.png"
import "./menuList.css";

export default function MenuList() {
  return (
    <>
      <div>
        <HeaderNavBar />
        <div className="Menu-flex-container">
          <h1 className="menu-name"><span className="bigger">Authentic<br></br></span>Mediterranean</h1>
          <h1></h1>

          <div className="menu-image-container">
          <img src={cutlery} alt="cutleryPic" />
   </div>
        </div>
      </div>
    </>
  );
}
