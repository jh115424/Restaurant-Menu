import MenuDinnerMainCourse from "./MenuDinnerMainCourse";
import "./menuDinnerSalad.css";

export default function MenuDinnerSalad() {
  return (
    <>
      <div className="salad-name-container">
        <h1 className="salad-title">SALADS</h1>
      </div>

      <div className="salad-body-container">
        <div className="left-side-salad">
          <li>
            <h3 className="food-name">Ampelofasolia Salata 13</h3>
            <p>
              House made salad of cooked green beans with a lot of chopped{" "}
              <br />
              parsley, dressed with a garlic vinaigrette, and served either hot
              or at room temperature
            </p>
          </li>
          <li>
            <h3 className="food-name">Patatosalata 12</h3>
            <p>
              Gently boiled and sliced dressed with lemon juice, and tossed with{" "}
              <br /> olive oil, grated onion, or sliced scallion, chopped
              parsley and dill
            </p>
          </li>
          <li>
            <h3 className="food-name"> Horiatiki (Greek Salad) 11</h3>
            <p>
              A classic Greek salad with tomatoes, cucumbers, red onion, feta
              cheese,<br></br> and olives. Served with in-house made dressing.
            </p>
          </li>
          <li>
            <h3 className="food-name">Maroulosalata (Greek Romaine Salad) 9</h3>
            <p>
              Shredded romaine lettuce mixed with thinly sliced scallions,
              chopped <br />
              herbs, usually a mix of parsley, dill, and mint, and dressed with
              olive oil,
              <br /> a squeeze of lemon, and salt and pepper
            </p>
          </li>
        </div>
        <div className="right-side-salad">
          <li>
            <h3 className="food-name">Melitzanosalata 14</h3>
            <p>
              Roasted eggplant is mashed with grated onion, lemon juice,
              <br></br>
              and a generous amount of olive oil to make it creamy and smooth
            </p>
          </li>
          <li>
            <h3 className="food-name">Dakos (Cretan salad) 16</h3>
            <p>
              barley rusks (paximadia) are briefly softened with water or <br />
              tomato juice and then topped with chopped tomatoes, feta <br />
              or mizithra cheese, and olive oil
            </p>
          </li>
          <li>
            <h3 className="food-name">
              Karpouzi Salata (Watermelon Feta Salad) 9
            </h3>
            <p>
              refreshing summer salad that combines the sweetness of watermelon{" "}
              <br />
              with the saltiness of feta cheese and the freshness of mint leaves
            </p>
          </li>
          <li>
            <h3 className="food-name">
              Melitzanosalata Agioritiki (Athenian Eggplant Salad) 17
            </h3>
            <p>
              House made salad with roasted eggplant, onion, fresh <br />
              chopped parsley, tomato, and topped with fresh imported feta
            </p>
          </li>
        </div>
      </div>
      <hr className="line"></hr>
      <MenuDinnerMainCourse />
    </>
  );
}
