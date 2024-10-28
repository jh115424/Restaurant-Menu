import ravioli from "/public/ravioli.jpg";
import salad from "/public/salad.jpg";
import sandwich from "/public/sandwich.jpg";
import pesto from "/public/pesto.jpg";
import choppedSteak from "/public/choppedSteak.jpg";


import "./dinnerCarousel.css";


export default function DinnerCarousel() {
  return (
    <>  

    <div className="carousel-title">
        Fine dishes especially prepared by our Executive Chef, Nikolaos Kapernaros.
     </div>
  
    <div className="dinner-carousel">
   
      <img className="pic-slide" src={ravioli} alt="pic-slide" />
      <img className="pic-slide" src={salad} alt="pic-slide" />
      <img className="pic-slide" src={sandwich} alt="pic-slide" />
      <img className="pic-slide" src={pesto} alt="pic-slide" />
      <img className="pic-slide" src={choppedSteak} alt="pic-slide" />
    </div>

    </>
  );
}
