import "./inside.css"
import HeaderNavBar from "../Header/HeaderNavBar";

export default function Inside() {
  return (
    <>
      <HeaderNavBar />
      <div className="inside-container">
    
        <img src="/inside1.jpg" alt="Inside 1" />
        <img src="/inside2.jpg" alt="Inside 2" />
        <img src="/inside3.jpg" alt="Inside 3" />
      </div>
    </>
  );
}
