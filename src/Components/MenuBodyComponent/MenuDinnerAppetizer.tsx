import "./menuDinnerAppetizer.css";
import MenuDinnerSalad from "./MenuDinnerSalad";

export default function MenuDinnerAppetizer() {
  return (
    <>
      <div className="menu-body-container">
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
                Grandma's homemade yogurt sauce with cucumber, garlic, and dill,
                served with warm house made Pita bread
              </p>
            </li>
            <li>
              <h3 className="food-name">Dolmades 8</h3>
              <p>
                Traditional stuffed grape leaves with lamb, beef or rice and
                herbs
              </p>
            </li>
            <li>
              <h3 className="food-name">Melitzanosalata 10</h3>
              <p>
                Charred eggplant dip with garlic, olive oil, and lemon juice.
                Served with<br></br>warm house made Pita bread
              </p>
            </li>
          </div>
          <div className="right-side-appetizers">
            <li>
              <h3 className="food-name">Keftedes (Greek Meatballs) 14</h3>
              <p>
                Traditional Greek meatballs made with pasture raised ground beef
                or lamb, finely chopped onions, breadcrumbs, fresh parsley,
                mint, and a medley of spices such as oregano, cumin, and
                cinnamon. Served with a side of tangy tomato.
              </p>
            </li>
            <li>
              <h3 className="food-name">Spanakopita (Greek Spinach Pie) 16</h3>
              <p>
                A traditional Greek spinach pie with a crispy phyllo pastry
                crust, layered with fresh spinach, onion and garlic.
              </p>
            </li>
            <li>
              <h3 className="food-name">
                Kolokithokeftedes (Zucchini Fritters) 9
              </h3>
              <p>
                Crispy zucchini fritters made with fresh zucchini, fresh herbs,
                flour or breadcrumbs, eggs, salt, pepper, and olive oil.
              </p>
            </li>
            <li>
              <h3 className="food-name">
                Tomato Keftedes (Tomato Fritters) 11
              </h3>
              <p>
                Crispy tomato fritters made with fresh tomatoes, fresh herbs,
                mint, feta, eggs, salt, pepper, and olive oil.
              </p>
            </li>
          </div>
        </div>
        <hr className="line"></hr>
        <MenuDinnerSalad />
      </div>
    </>
  );
}
