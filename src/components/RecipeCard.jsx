import React from "react";
import drinks from "../assets/drinks.png";
import eggplant from "../assets/eggplant.png";
import tomato from "../assets/tomato.png";
import dessert from "../assets/desserts.png";
import CategoryIcons from "./CategoryIcons";

export default function RecipeCard() {
  return (
    <section className="recipeRoundupContainer">
      <h2>RECIPE ROUND-UPS</h2>
      <div className="recipesContainer md:flex justify-center">
        <div className="recipe">
          <img
            className="w-16 md:w-32 lg:w-48"
            src={drinks}
            alt="refreshing drinks"
          />
          <div className="key">
            <CategoryIcons  VG={true} V={true} DF={true} />
          </div>
          <h3>28 Refreshing Drinks for Summer</h3>
        </div>

        <div className="recipe">
          <img
            className="w-16 md:w-32 lg:w-48"
            src={eggplant}
            alt="eggplant recipes"
          />
          <div className="key">
            <CategoryIcons  VG={true} V={true} DF={true} />
          </div>
          <h3>20 Delicious Plant-Based Eggplant Recipes</h3>
        </div>

        <div className="recipe">
          <img
            className="w-16 md:w-32 lg:w-48"
            src={tomato}
            alt="tomato recipes"
          />
          <div className="key">
            <CategoryIcons  VG={true} V={true} DF={true} />
          </div>
          <h3>16 Vibrant Fresh Tomato Recipes (Plant-Based)</h3>
        <CategoryIcons  VG={true} V={true} DF={true} />
          <h3>28 Refreshing Drinks for Summer</h3>
        </div>

        <div className="recipe">
          <img
            className="w-16 md:w-32 lg:w-48"
            src={dessert}
            alt="dessert recipes"
          />
          <div className="key">
            <CategoryIcons  VG={true} V={true} DF={true} />
          </div>
          <div className="recipe">
            <img
              className="w-16 md:w-32 lg:w-48"
              src={eggplant}
              alt="eggplant recipes"
            />
          <CategoryIcons  GF={true} VG={true} V={true} DF={true} NS={true}/>
          <h3>20 Delicious Plant-Based Eggplant Recipes</h3>
        </div>

        <div className="recipe">
          <img
            className="w-16 md:w-32 lg:w-48"
            src={tomato}
            alt="tomato recipes"
          />
            <CategoryIcons VG={true} V={true} DF={true}/>
          <h3>16 Vibrant Fresh Tomato Recipes (Plant-Based)</h3>
        </div>

        <div className="recipe">
          <img
            className="w-16 md:w-32 lg:w-48"
            src={dessert}
            alt="dessert recipes"
          />
                <CategoryIcons VG={true} V={true} DF={true}/>
          <h3>35 Easy No-Bake Desserts (Plant-Based!)</h3>
        </div>
        </div>
      </div>
    </section>
  );
}
