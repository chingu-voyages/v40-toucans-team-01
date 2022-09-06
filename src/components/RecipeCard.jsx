import React from "react";
import drinks from "../assets/drinks.png";
import eggplant from "../assets/eggplant.png";
import tomato from "../assets/tomato.png";
import dessert from "../assets/desserts.png";
import CategoryIcons from "./CategoryIcons";

export default function RecipeCard() {
  return (
    <section className="container mx-auto pt-10 pb-5 px-5">
      <div className="border-t border-solid border-[#2A2B2A] p-5"></div>
      <h2 className="text-3xl">RECIPE ROUND-UPS</h2>
      <div className="recipesContainer grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-5">
        <div className="recipe flex flex-col items-center justify-center my-3">
          <img
            className="object-cover max-w-full h-auto"
            src={drinks}
            alt="refreshing drinks"
          />
          <div className="key pt-3">
            <CategoryIcons  VG={true} V={true} DF={true} />
          </div>
          <h3 className="text-center">28 Refreshing Drinks for Summer</h3>
        </div>

        <div className="recipe flex flex-col items-center justify-center my-3">
          <img
            className="object-cover max-w-full h-auto"
            src={eggplant}
            alt="eggplant recipes"
          />
          <div className="key pt-3">
            <CategoryIcons  VG={true} V={true} DF={true} NS={true}/>
          </div>
          <h3 className="text-center">20 Delicious Plant-Based Eggplant Recipes</h3>
        </div>

        <div className="recipe flex flex-col items-center justify-center  my-3">
          <img
            className="object-cover max-w-full h-auto"
            src={tomato}
            alt="tomato recipes"
          />
          <div className="key pt-3">
            <CategoryIcons  GF={true} VG={true} V={true} DF={true} NS={true} />
          </div>
          <h3 className="text-center">16 Vibrant Fresh Tomato Recipes (Plant-Based)</h3>
        </div>

        <div className="recipe flex flex-col items-center justify-center  my-3">
          <img
            className="object-cover max-w-full h-auto"
            src={dessert}
            alt="dessert recipes"
          />
          <div className="key pt-3">
            <CategoryIcons  VG={true} V={true} DF={true} />
          </div>
          <h3 className="text-center">35 Easy No-Bake Desserts (Plant-Based!)</h3>
        </div>
      </div>
    </section>
  );
}
