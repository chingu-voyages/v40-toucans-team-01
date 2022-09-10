import RecipeCard from './RecipeCard';

export default function RecipeRoundups() {
  return (
    <div
      data-class="recipe-roundups"
      className="mx-auto mt-10 pt-10 border-t border-solid border-[#2A2B2A] md:mt-[60px] md:pt-[60px]"
    >
      <div
        data-class="recipe-roundups__title-container"
        className="mb-5 md:flex md:justify-between md:items-center md:mb-10"
      >
        <h2 className="text-[24px] md:text-[30px] md:mb-0 xmd:text-[34px]">
          RECIPE ROUND-UPS
        </h2>
        <div
          data-class="more-link-container top"
          className="hidden text-center md:block"
        >
          <a
            className="text-[#2A2B2A] text-[18px] font-bakerOrator lowercase tracking-wide no-underline font-bold bg-transparent a-transition"
            href="#"
          >
            show me everything
            <svg
              data-class="svg-icon"
              className="ml-4 align-middle inline-block a-transition"
              width="24"
              height="24"
              aria-hidden="true"
              role="img"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 11"
            >
              <g>
                <polygon points="22.64 4.485 22.64 5.735 0 5.735 0 4.485"></polygon>
                <polygon points="18.5 10.22 17.65 9.31 22.16 5.11 17.65 .92 18.5 0 24 5.11"></polygon>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div
        data-class="recipe-roundups__grid"
        className="grid gap-4 grid-cols-1 xsm:grid-cols-2 md:grid-cols-4"
      >
        <RecipeCard
          title="Plant-Based Recipes for Pizza Night"
          src="https://minimalistbaker.com/wp-content/uploads/2018/02/PERFECT-Gluten-Free-Pizza-Crust-Fluffy-crispy-easy-to-make-10-ingredients-vegan-glutenfree-pizza-recipe-plantbased-minimalistbaker-19.jpg"
          srcSet="https://minimalistbaker.com/wp-content/uploads/2018/02/PERFECT-Gluten-Free-Pizza-Crust-Fluffy-crispy-easy-to-make-10-ingredients-vegan-glutenfree-pizza-recipe-plantbased-minimalistbaker-19.jpg 1456w, https://minimalistbaker.com/wp-content/uploads/2018/02/PERFECT-Gluten-Free-Pizza-Crust-Fluffy-crispy-easy-to-make-10-ingredients-vegan-glutenfree-pizza-recipe-plantbased-minimalistbaker-19-600x900.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2018/02/PERFECT-Gluten-Free-Pizza-Crust-Fluffy-crispy-easy-to-make-10-ingredients-vegan-glutenfree-pizza-recipe-plantbased-minimalistbaker-19-200x300.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2018/02/PERFECT-Gluten-Free-Pizza-Crust-Fluffy-crispy-easy-to-make-10-ingredients-vegan-glutenfree-pizza-recipe-plantbased-minimalistbaker-19-768x1152.jpg 768w, https://minimalistbaker.com/wp-content/uploads/2018/02/PERFECT-Gluten-Free-Pizza-Crust-Fluffy-crispy-easy-to-make-10-ingredients-vegan-glutenfree-pizza-recipe-plantbased-minimalistbaker-19-683x1024.jpg 683w, https://minimalistbaker.com/wp-content/uploads/2018/02/PERFECT-Gluten-Free-Pizza-Crust-Fluffy-crispy-easy-to-make-10-ingredients-vegan-glutenfree-pizza-recipe-plantbased-minimalistbaker-19-680x1020.jpg 680w"
          categoryIcons={['VG', 'V', 'DF']}
        />

        <RecipeCard
          title="The ULTIMATE Vegan Meal Prep Guide"
          src="https://minimalistbaker.com/wp-content/uploads/2021/11/EASY-Vegan-Picadillo-Cuban-inspired-1-pot-30-minutes-SO-hearty-minimalistbaker-plantbased-recipe-picadillo-6-500x750.jpg"
          srcSet="https://minimalistbaker.com/wp-content/uploads/2021/11/EASY-Vegan-Picadillo-Cuban-inspired-1-pot-30-minutes-SO-hearty-minimalistbaker-plantbased-recipe-picadillo-6-500x750.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2021/11/EASY-Vegan-Picadillo-Cuban-inspired-1-pot-30-minutes-SO-hearty-minimalistbaker-plantbased-recipe-picadillo-6-200x300.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2021/11/EASY-Vegan-Picadillo-Cuban-inspired-1-pot-30-minutes-SO-hearty-minimalistbaker-plantbased-recipe-picadillo-6-683x1024.jpg 683w, https://minimalistbaker.com/wp-content/uploads/2021/11/EASY-Vegan-Picadillo-Cuban-inspired-1-pot-30-minutes-SO-hearty-minimalistbaker-plantbased-recipe-picadillo-6-768x1152.jpg 768w, https://minimalistbaker.com/wp-content/uploads/2021/11/EASY-Vegan-Picadillo-Cuban-inspired-1-pot-30-minutes-SO-hearty-minimalistbaker-plantbased-recipe-picadillo-6-1024x1536.jpg 1024w, https://minimalistbaker.com/wp-content/uploads/2021/11/EASY-Vegan-Picadillo-Cuban-inspired-1-pot-30-minutes-SO-hearty-minimalistbaker-plantbased-recipe-picadillo-6-1365x2048.jpg 1365w, https://minimalistbaker.com/wp-content/uploads/2021/11/EASY-Vegan-Picadillo-Cuban-inspired-1-pot-30-minutes-SO-hearty-minimalistbaker-plantbased-recipe-picadillo-6-373x560.jpg 373w, https://minimalistbaker.com/wp-content/uploads/2021/11/EASY-Vegan-Picadillo-Cuban-inspired-1-pot-30-minutes-SO-hearty-minimalistbaker-plantbased-recipe-picadillo-6-600x900.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2021/11/EASY-Vegan-Picadillo-Cuban-inspired-1-pot-30-minutes-SO-hearty-minimalistbaker-plantbased-recipe-picadillo-6-680x1020.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2021/11/EASY-Vegan-Picadillo-Cuban-inspired-1-pot-30-minutes-SO-hearty-minimalistbaker-plantbased-recipe-picadillo-6.jpg 1456w"
          categoryIcons={['GF', 'VG', 'V', 'DF', 'NS']}
        />

        <RecipeCard
          title="45 Back-to-School Recipes (Plant-Based!)"
          src="https://minimalistbaker.com/wp-content/uploads/2021/01/EASY-1-Pot-Vegan-Mac-n-Cheese-Creamy-cheesy-SO-comforting-minimalistbaker-recipe-pasta-plantbased-macncheese-3-500x750.jpg"
          srcSet="https://minimalistbaker.com/wp-content/uploads/2021/01/EASY-1-Pot-Vegan-Mac-n-Cheese-Creamy-cheesy-SO-comforting-minimalistbaker-recipe-pasta-plantbased-macncheese-3-500x750.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2021/01/EASY-1-Pot-Vegan-Mac-n-Cheese-Creamy-cheesy-SO-comforting-minimalistbaker-recipe-pasta-plantbased-macncheese-3-200x300.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2021/01/EASY-1-Pot-Vegan-Mac-n-Cheese-Creamy-cheesy-SO-comforting-minimalistbaker-recipe-pasta-plantbased-macncheese-3-683x1024.jpg 683w, https://minimalistbaker.com/wp-content/uploads/2021/01/EASY-1-Pot-Vegan-Mac-n-Cheese-Creamy-cheesy-SO-comforting-minimalistbaker-recipe-pasta-plantbased-macncheese-3-768x1152.jpg 768w, https://minimalistbaker.com/wp-content/uploads/2021/01/EASY-1-Pot-Vegan-Mac-n-Cheese-Creamy-cheesy-SO-comforting-minimalistbaker-recipe-pasta-plantbased-macncheese-3-1024x1536.jpg 1024w, https://minimalistbaker.com/wp-content/uploads/2021/01/EASY-1-Pot-Vegan-Mac-n-Cheese-Creamy-cheesy-SO-comforting-minimalistbaker-recipe-pasta-plantbased-macncheese-3-1365x2048.jpg 1365w, https://minimalistbaker.com/wp-content/uploads/2021/01/EASY-1-Pot-Vegan-Mac-n-Cheese-Creamy-cheesy-SO-comforting-minimalistbaker-recipe-pasta-plantbased-macncheese-3-373x560.jpg 373w, https://minimalistbaker.com/wp-content/uploads/2021/01/EASY-1-Pot-Vegan-Mac-n-Cheese-Creamy-cheesy-SO-comforting-minimalistbaker-recipe-pasta-plantbased-macncheese-3-600x900.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2021/01/EASY-1-Pot-Vegan-Mac-n-Cheese-Creamy-cheesy-SO-comforting-minimalistbaker-recipe-pasta-plantbased-macncheese-3-680x1020.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2021/01/EASY-1-Pot-Vegan-Mac-n-Cheese-Creamy-cheesy-SO-comforting-minimalistbaker-recipe-pasta-plantbased-macncheese-3.jpg 1456w"
          categoryIcons={['VG', 'V', 'DF']}
        />

        <RecipeCard
          title="15 Best Vegan Taco Recipes"
          src="https://minimalistbaker.com/wp-content/uploads/2021/08/30-MINUTE-Breakfast-Tacos-with-Vegan-Chorizo-Fresh-flavor-packed-easy-to-make-and-perfect-for-meal-prep-minimalistbaker-recipe-plantbased-glutenfree-tacos-breakfast-6-500x750.jpg"
          srcSet="https://minimalistbaker.com/wp-content/uploads/2021/08/30-MINUTE-Breakfast-Tacos-with-Vegan-Chorizo-Fresh-flavor-packed-easy-to-make-and-perfect-for-meal-prep-minimalistbaker-recipe-plantbased-glutenfree-tacos-breakfast-6-500x750.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2021/08/30-MINUTE-Breakfast-Tacos-with-Vegan-Chorizo-Fresh-flavor-packed-easy-to-make-and-perfect-for-meal-prep-minimalistbaker-recipe-plantbased-glutenfree-tacos-breakfast-6-200x300.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2021/08/30-MINUTE-Breakfast-Tacos-with-Vegan-Chorizo-Fresh-flavor-packed-easy-to-make-and-perfect-for-meal-prep-minimalistbaker-recipe-plantbased-glutenfree-tacos-breakfast-6-683x1024.jpg 683w, https://minimalistbaker.com/wp-content/uploads/2021/08/30-MINUTE-Breakfast-Tacos-with-Vegan-Chorizo-Fresh-flavor-packed-easy-to-make-and-perfect-for-meal-prep-minimalistbaker-recipe-plantbased-glutenfree-tacos-breakfast-6-768x1152.jpg 768w, https://minimalistbaker.com/wp-content/uploads/2021/08/30-MINUTE-Breakfast-Tacos-with-Vegan-Chorizo-Fresh-flavor-packed-easy-to-make-and-perfect-for-meal-prep-minimalistbaker-recipe-plantbased-glutenfree-tacos-breakfast-6-1024x1536.jpg 1024w, https://minimalistbaker.com/wp-content/uploads/2021/08/30-MINUTE-Breakfast-Tacos-with-Vegan-Chorizo-Fresh-flavor-packed-easy-to-make-and-perfect-for-meal-prep-minimalistbaker-recipe-plantbased-glutenfree-tacos-breakfast-6-1365x2048.jpg 1365w, https://minimalistbaker.com/wp-content/uploads/2021/08/30-MINUTE-Breakfast-Tacos-with-Vegan-Chorizo-Fresh-flavor-packed-easy-to-make-and-perfect-for-meal-prep-minimalistbaker-recipe-plantbased-glutenfree-tacos-breakfast-6-373x560.jpg 373w, https://minimalistbaker.com/wp-content/uploads/2021/08/30-MINUTE-Breakfast-Tacos-with-Vegan-Chorizo-Fresh-flavor-packed-easy-to-make-and-perfect-for-meal-prep-minimalistbaker-recipe-plantbased-glutenfree-tacos-breakfast-6-600x900.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2021/08/30-MINUTE-Breakfast-Tacos-with-Vegan-Chorizo-Fresh-flavor-packed-easy-to-make-and-perfect-for-meal-prep-minimalistbaker-recipe-plantbased-glutenfree-tacos-breakfast-6-680x1020.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2021/08/30-MINUTE-Breakfast-Tacos-with-Vegan-Chorizo-Fresh-flavor-packed-easy-to-make-and-perfect-for-meal-prep-minimalistbaker-recipe-plantbased-glutenfree-tacos-breakfast-6.jpg 1456w"
          categoryIcons={['GF', 'VG', 'V', 'DF', 'NS']}
        />
      </div>

      <div
        data-class="more-link-container bottom"
        className="mt-4 mb-[30px] text-center md:hidden"
      >
        <a
          href="#"
          className="text-[#2A2B2A] text-[18px] font-bakerOrator lowercase tracking-wide no-underline font-bold bg-transparent a-transition"
        >
          show me everything
          <svg
            data-class="svg-icon"
            className="ml-4 align-middle inline-block a-transition"
            width="24"
            height="24"
            aria-hidden="true"
            role="img"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 11"
          >
            <g>
              <polygon points="22.64 4.485 22.64 5.735 0 5.735 0 4.485"></polygon>
              <polygon points="18.5 10.22 17.65 9.31 22.16 5.11 17.65 .92 18.5 0 24 5.11"></polygon>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}
