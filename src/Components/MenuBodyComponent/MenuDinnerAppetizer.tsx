import "./menuDinnerAppetizer.css";

export default function MenuDinnerAppetizer() {
  return (
    <>
      <div className="menu-body-container">
        <div className="div">
          <div className="menu-body-box">
            <h1 className="menu-name">
              Authentic<br></br>
              Mediterranean
            </h1>
            <h4 className="dinner">DINNER</h4>
          </div>
          <div className="appetizers-container">
            <h4 className="appetizer-title">APPETIZERS</h4>
          </div>
          <div className="appetizer-items-container">
            <div className="left-side-appetizers">
              <li>
                <h3 className="food-name">Tzatziki 18</h3>
                <p>
                  Grandma's homemade yogurt sauce with cucumber, garlic, and
                  dill, served with warm house made Pita bread
                </p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
            </div>
            <div className="right-side-appetizers">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
