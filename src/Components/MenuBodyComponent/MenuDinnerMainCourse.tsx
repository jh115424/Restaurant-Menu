import "./menuDinnerMainCourse.css";
import Footer from "../RestaurantHomePageComponent/Footer/Footer";

export default function MenuDinnerMainCourse() {
  return (
    <>
      <div className="mainCourse-name-container">
        <h1 className="mainCourse-title">MAIN COURSE</h1>
      </div>

      <div className="mainCourse-menu-container">
        <div className="left-side-mainCourse">
          <li>
            <h3 className="food-name">
              Saganaki Halloumi (Cypriot Fried Halloumi) 45
            </h3>
            <p>
              Halloumi cheese is fried in clarified butter, then brushed in a{" "}
              <br />
              spiced honey and served with lemon yogurt, brandy-basted
              nectarines, <br />
              and fresh tomatoes in this sweet and savory appetizer
            </p>
          </li>
          <li>
            <h3 className="food-name">
              Ouzo Snapper with Fennel and Tomatoes 52
            </h3>
            <p>
              mild whole snapper with licorice-scented ouzo, the national drink{" "}
              <br />
              of Greece, and roast over a bed of tomatoes, fennel, and sweet
              onions
            </p>
          </li>
          <li>
            <h3 className="food-name">
              {" "}
              Chicken with Lemon, Oregano, and Feta 31
            </h3>
            <p>
              Chicken is drizzled with olive oil and lemon juice before it's{" "}
              <br />
              sprinkled with oregano, salt, and pepper and roasted.
            </p>
          </li>
          <li>
            <h3 className="food-name">
              Seafood and Chicken Paella with Chorizo 63
            </h3>
            <p>
              Fresh chorizo, sliced dark meat chicken, and a seafood trio of{" "}
              <br />
              shrimp, mussels, and cockles come together on a bed of <br />
              saffron-infused arborio rice for this sumptuous Spanish recipe
            </p>
          </li>
        </div>
        <div className="right-side-salad">
          <li>
            <h3 className="food-name">Roasted Branzino with Caper Butter 34</h3>
            <p>
              whole Mediterranean sea bass with lemon, dill and butter then
              roasted <br />
              to low perfection. Served with a side of grilled asparagus and
              fingerling potatoes.
            </p>
          </li>
          <li>
            <h3 className="food-name">Kale-Artichoke Stuffed Shells 21</h3>
            <p>
              Italian cannellini beans and Calabrian chiles slow simmered in
              house made sauce
            </p>
          </li>
          <li>
            <h3 className="food-name">Seared Salmon with Pistachio Pesto 40</h3>
            <p>
              Wild caught Salmon roasted with nutty pistachios, cool mint, spicy{" "}
              <br />
              ginger and chile, bright lime zest, and salty Pecorino Romano
              cheese
            </p>
          </li>
        </div>
      </div>
      <Footer/>
    </>
  );
}
