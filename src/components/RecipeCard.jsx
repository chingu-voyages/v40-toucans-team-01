import React from 'react';
import drinks from "../assets/drinks.png";
import drinksKey from "../assets/drinksKey.png";
import eggplant from "../assets/eggplant.png";
import tomato from "../assets/tomato.png";
import dessert from "../assets/desserts.png";

function RecipeCard() {
    return (
        <section class="recipeRoundupContainer">
            <h2>RECIPE ROUND-UPS</h2>
            <div class="recipesContainer md:flex justify-center">
                <div class="recipe">
                    <img class="w-16 md:w-32 lg:w-48" src={drinks} alt="refreshing drinks" />
                    <div class="key">
                        <img class="w-16 md:w-32 lg:w-48" src={drinksKey} alt="drinks recipe key" />
                    </div>
                    <h3>28 Refreshing Drinks for Summer</h3>
                </div>

                <div class="recipe">
                    <img class="w-16 md:w-32 lg:w-48" src={eggplant} alt="eggplant recipes" />
                    <div class="key">
                        <img class="w-16 md:w-32 lg:w-48" src={drinksKey}  alt="eggplant recipe key" />
                    </div>
                    <h3>20 Delicious Plant-Based Eggplant Recipes</h3>
                </div>

                <div class="recipe">
                    <img class="w-16 md:w-32 lg:w-48" src={tomato} alt="tomato recipes" />
                    <div class="key">
                        <img class="w-16 md:w-32 lg:w-48" src={drinksKey} alt="tomato recipe key" />
                    </div>
                    <h3>16 Vibrant Fresh Tomato Recipes (Plant-Based)</h3>
                </div>

                <div class="recipe">
                    <img class="w-16 md:w-32 lg:w-48" src={dessert} alt="dessert recipes" />
                    <div class="key">
                        <img class="w-16 md:w-32 lg:w-48" src={drinksKey} alt="dessert recipe key" />
                    </div>
                    <h3>35 Easy No-Bake Desserts (Plant-Based!)</h3>
                </div>
            </div>
        </section>

    );
}

export default RecipeCard;
