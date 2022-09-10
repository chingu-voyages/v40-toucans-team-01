import ExploreRecipesNav from './ExploreRecipesNav';
import ExploreRecipesCard from './ExploreRecipesCard';

export default function ExploreRecipes() {
  return (
    <div data-class="featured-categories-inner">
      <h2
        data-class="featured-categories__title"
        className="text-center text-[24px] mb-[30px] md:text-[30px] xmd:text-[34px]"
      >
        Explore Recipes
      </h2>
      <ExploreRecipesNav />
      <div
        data-class="results-grid"
        className="grid grid-cols-2 gap-4 msm:gap-x-8 md:grid-cols-4 md:gap-4 "
      >
        <ExploreRecipesCard
          title="1-Bowl Cowgirl Cookies (Vegan + Gluten-Free)"
          src="https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-500x750.jpg"
          srcSet="https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-500x750.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-200x300.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-683x1024.jpg 683w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-768x1152.jpg 768w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-1024x1536.jpg 1024w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-1365x2048.jpg 1365w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-373x560.jpg 373w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-600x900.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-680x1020.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12.jpg 1456w"
        />
        <ExploreRecipesCard
          title="Vegan Panna Cotta with Mixed Berries"
          src="https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Vegan-Panna-Cotta-1-pan-6-ingredients-quick-and-easy-perfectly-indulgent-minimalistbaker-recipe-plantbased-pannacotta-16-500x750.jpg"
          srcSet="https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Vegan-Panna-Cotta-1-pan-6-ingredients-quick-and-easy-perfectly-indulgent-minimalistbaker-recipe-plantbased-pannacotta-16-500x750.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Vegan-Panna-Cotta-1-pan-6-ingredients-quick-and-easy-perfectly-indulgent-minimalistbaker-recipe-plantbased-pannacotta-16-200x300.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Vegan-Panna-Cotta-1-pan-6-ingredients-quick-and-easy-perfectly-indulgent-minimalistbaker-recipe-plantbased-pannacotta-16-683x1024.jpg 683w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Vegan-Panna-Cotta-1-pan-6-ingredients-quick-and-easy-perfectly-indulgent-minimalistbaker-recipe-plantbased-pannacotta-16-768x1152.jpg 768w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Vegan-Panna-Cotta-1-pan-6-ingredients-quick-and-easy-perfectly-indulgent-minimalistbaker-recipe-plantbased-pannacotta-16-1024x1536.jpg 1024w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Vegan-Panna-Cotta-1-pan-6-ingredients-quick-and-easy-perfectly-indulgent-minimalistbaker-recipe-plantbased-pannacotta-16-1365x2048.jpg 1365w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Vegan-Panna-Cotta-1-pan-6-ingredients-quick-and-easy-perfectly-indulgent-minimalistbaker-recipe-plantbased-pannacotta-16-373x560.jpg 373w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Vegan-Panna-Cotta-1-pan-6-ingredients-quick-and-easy-perfectly-indulgent-minimalistbaker-recipe-plantbased-pannacotta-16-600x900.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Vegan-Panna-Cotta-1-pan-6-ingredients-quick-and-easy-perfectly-indulgent-minimalistbaker-recipe-plantbased-pannacotta-16-680x1020.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Vegan-Panna-Cotta-1-pan-6-ingredients-quick-and-easy-perfectly-indulgent-minimalistbaker-recipe-plantbased-pannacotta-16.jpg 1456w"
        />
        <ExploreRecipesCard
          title="34 Vegan Ice Cream Recipes + Tips"
          src="https://minimalistbaker.com/wp-content/uploads/2015/09/AMAZING-5-Ingredient-Vanilla-Coconut-Ice-Cream-Incredibly-simple-perfectly-sweet-INSANELY-creamy-vegan-glutenfree-icecream-dessert-recipe-vanilla-coconuticecream-coconut-500x750.jpg"
          srcSet="https://minimalistbaker.com/wp-content/uploads/2015/09/AMAZING-5-Ingredient-Vanilla-Coconut-Ice-Cream-Incredibly-simple-perfectly-sweet-INSANELY-creamy-vegan-glutenfree-icecream-dessert-recipe-vanilla-coconuticecream-coconut-500x750.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2015/09/AMAZING-5-Ingredient-Vanilla-Coconut-Ice-Cream-Incredibly-simple-perfectly-sweet-INSANELY-creamy-vegan-glutenfree-icecream-dessert-recipe-vanilla-coconuticecream-coconut-200x300.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2015/09/AMAZING-5-Ingredient-Vanilla-Coconut-Ice-Cream-Incredibly-simple-perfectly-sweet-INSANELY-creamy-vegan-glutenfree-icecream-dessert-recipe-vanilla-coconuticecream-coconut-683x1024.jpg 683w, https://minimalistbaker.com/wp-content/uploads/2015/09/AMAZING-5-Ingredient-Vanilla-Coconut-Ice-Cream-Incredibly-simple-perfectly-sweet-INSANELY-creamy-vegan-glutenfree-icecream-dessert-recipe-vanilla-coconuticecream-coconut-768x1152.jpg 768w, https://minimalistbaker.com/wp-content/uploads/2015/09/AMAZING-5-Ingredient-Vanilla-Coconut-Ice-Cream-Incredibly-simple-perfectly-sweet-INSANELY-creamy-vegan-glutenfree-icecream-dessert-recipe-vanilla-coconuticecream-coconut-1024x1536.jpg 1024w, https://minimalistbaker.com/wp-content/uploads/2015/09/AMAZING-5-Ingredient-Vanilla-Coconut-Ice-Cream-Incredibly-simple-perfectly-sweet-INSANELY-creamy-vegan-glutenfree-icecream-dessert-recipe-vanilla-coconuticecream-coconut-1365x2048.jpg 1365w, https://minimalistbaker.com/wp-content/uploads/2015/09/AMAZING-5-Ingredient-Vanilla-Coconut-Ice-Cream-Incredibly-simple-perfectly-sweet-INSANELY-creamy-vegan-glutenfree-icecream-dessert-recipe-vanilla-coconuticecream-coconut-373x560.jpg 373w, https://minimalistbaker.com/wp-content/uploads/2015/09/AMAZING-5-Ingredient-Vanilla-Coconut-Ice-Cream-Incredibly-simple-perfectly-sweet-INSANELY-creamy-vegan-glutenfree-icecream-dessert-recipe-vanilla-coconuticecream-coconut-600x900.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2015/09/AMAZING-5-Ingredient-Vanilla-Coconut-Ice-Cream-Incredibly-simple-perfectly-sweet-INSANELY-creamy-vegan-glutenfree-icecream-dessert-recipe-vanilla-coconuticecream-coconut-680x1020.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2015/09/AMAZING-5-Ingredient-Vanilla-Coconut-Ice-Cream-Incredibly-simple-perfectly-sweet-INSANELY-creamy-vegan-glutenfree-icecream-dessert-recipe-vanilla-coconuticecream-coconut.jpg 1456w"
        />
        <ExploreRecipesCard
          title="German Chocolate Cake Energy Bites"
          src="https://minimalistbaker.com/wp-content/uploads/2022/05/German-Chocolate-Cake-ENERGY-BITES-9-ingredients-rich-sweet-and-SO-classic-minimalistbaker-recipe-plantbased-germanchocolatecake-9-500x750.jpg"
          srcSet="https://minimalistbaker.com/wp-content/uploads/2022/05/German-Chocolate-Cake-ENERGY-BITES-9-ingredients-rich-sweet-and-SO-classic-minimalistbaker-recipe-plantbased-germanchocolatecake-9-500x750.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/05/German-Chocolate-Cake-ENERGY-BITES-9-ingredients-rich-sweet-and-SO-classic-minimalistbaker-recipe-plantbased-germanchocolatecake-9-200x300.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/05/German-Chocolate-Cake-ENERGY-BITES-9-ingredients-rich-sweet-and-SO-classic-minimalistbaker-recipe-plantbased-germanchocolatecake-9-683x1024.jpg 683w, https://minimalistbaker.com/wp-content/uploads/2022/05/German-Chocolate-Cake-ENERGY-BITES-9-ingredients-rich-sweet-and-SO-classic-minimalistbaker-recipe-plantbased-germanchocolatecake-9-768x1152.jpg 768w, https://minimalistbaker.com/wp-content/uploads/2022/05/German-Chocolate-Cake-ENERGY-BITES-9-ingredients-rich-sweet-and-SO-classic-minimalistbaker-recipe-plantbased-germanchocolatecake-9-1024x1536.jpg 1024w, https://minimalistbaker.com/wp-content/uploads/2022/05/German-Chocolate-Cake-ENERGY-BITES-9-ingredients-rich-sweet-and-SO-classic-minimalistbaker-recipe-plantbased-germanchocolatecake-9-1365x2048.jpg 1365w, https://minimalistbaker.com/wp-content/uploads/2022/05/German-Chocolate-Cake-ENERGY-BITES-9-ingredients-rich-sweet-and-SO-classic-minimalistbaker-recipe-plantbased-germanchocolatecake-9-373x560.jpg 373w, https://minimalistbaker.com/wp-content/uploads/2022/05/German-Chocolate-Cake-ENERGY-BITES-9-ingredients-rich-sweet-and-SO-classic-minimalistbaker-recipe-plantbased-germanchocolatecake-9-600x900.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/05/German-Chocolate-Cake-ENERGY-BITES-9-ingredients-rich-sweet-and-SO-classic-minimalistbaker-recipe-plantbased-germanchocolatecake-9-680x1020.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/05/German-Chocolate-Cake-ENERGY-BITES-9-ingredients-rich-sweet-and-SO-classic-minimalistbaker-recipe-plantbased-germanchocolatecake-9.jpg 1456w"
        />
        <ExploreRecipesCard
          title="Vegan Tiramisu Pudding Cups"
          src="https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-500x750.jpg"
          srcSet="https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-500x750.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-200x300.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-683x1024.jpg 683w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-768x1152.jpg 768w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-1024x1536.jpg 1024w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-1365x2048.jpg 1365w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-373x560.jpg 373w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-600x900.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-680x1020.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7.jpg 1456w"
        />
        <ExploreRecipesCard
          title="5-Minute Pineapple Sorbet (Dole Whip Dupe!)"
          src="https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Pineapple-Sorbet-Vegan-naturally-sweetened-3-ingredients-and-5-minutes-minimalistbaker-recipe-pineapple-sorbet-dolewhip-8-500x750.jpg"
          srcSet="https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Pineapple-Sorbet-Vegan-naturally-sweetened-3-ingredients-and-5-minutes-minimalistbaker-recipe-pineapple-sorbet-dolewhip-8-500x750.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Pineapple-Sorbet-Vegan-naturally-sweetened-3-ingredients-and-5-minutes-minimalistbaker-recipe-pineapple-sorbet-dolewhip-8-200x300.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Pineapple-Sorbet-Vegan-naturally-sweetened-3-ingredients-and-5-minutes-minimalistbaker-recipe-pineapple-sorbet-dolewhip-8-683x1024.jpg 683w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Pineapple-Sorbet-Vegan-naturally-sweetened-3-ingredients-and-5-minutes-minimalistbaker-recipe-pineapple-sorbet-dolewhip-8-768x1152.jpg 768w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Pineapple-Sorbet-Vegan-naturally-sweetened-3-ingredients-and-5-minutes-minimalistbaker-recipe-pineapple-sorbet-dolewhip-8-1024x1536.jpg 1024w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Pineapple-Sorbet-Vegan-naturally-sweetened-3-ingredients-and-5-minutes-minimalistbaker-recipe-pineapple-sorbet-dolewhip-8-1365x2048.jpg 1365w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Pineapple-Sorbet-Vegan-naturally-sweetened-3-ingredients-and-5-minutes-minimalistbaker-recipe-pineapple-sorbet-dolewhip-8-373x560.jpg 373w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Pineapple-Sorbet-Vegan-naturally-sweetened-3-ingredients-and-5-minutes-minimalistbaker-recipe-pineapple-sorbet-dolewhip-8-600x900.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Pineapple-Sorbet-Vegan-naturally-sweetened-3-ingredients-and-5-minutes-minimalistbaker-recipe-pineapple-sorbet-dolewhip-8-680x1020.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/03/CREAMY-Pineapple-Sorbet-Vegan-naturally-sweetened-3-ingredients-and-5-minutes-minimalistbaker-recipe-pineapple-sorbet-dolewhip-8.jpg 1456w"
        />
        <ExploreRecipesCard
          title="35 Easy No-Bake Desserts (Plant-Based!)"
          src="https://minimalistbaker.com/wp-content/uploads/2021/01/INCREDIBLE-No-Bake-Mint-Chocolate-Brownie-Bars-Vegan-gluten-free-just-10-ingredients-minimalistbaker-recipe-plantbased-glutenfree-mint-chocolate-13-500x750.jpg"
          srcSet="https://minimalistbaker.com/wp-content/uploads/2021/01/INCREDIBLE-No-Bake-Mint-Chocolate-Brownie-Bars-Vegan-gluten-free-just-10-ingredients-minimalistbaker-recipe-plantbased-glutenfree-mint-chocolate-13-500x750.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2021/01/INCREDIBLE-No-Bake-Mint-Chocolate-Brownie-Bars-Vegan-gluten-free-just-10-ingredients-minimalistbaker-recipe-plantbased-glutenfree-mint-chocolate-13-200x300.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2021/01/INCREDIBLE-No-Bake-Mint-Chocolate-Brownie-Bars-Vegan-gluten-free-just-10-ingredients-minimalistbaker-recipe-plantbased-glutenfree-mint-chocolate-13-683x1024.jpg 683w, https://minimalistbaker.com/wp-content/uploads/2021/01/INCREDIBLE-No-Bake-Mint-Chocolate-Brownie-Bars-Vegan-gluten-free-just-10-ingredients-minimalistbaker-recipe-plantbased-glutenfree-mint-chocolate-13-768x1152.jpg 768w, https://minimalistbaker.com/wp-content/uploads/2021/01/INCREDIBLE-No-Bake-Mint-Chocolate-Brownie-Bars-Vegan-gluten-free-just-10-ingredients-minimalistbaker-recipe-plantbased-glutenfree-mint-chocolate-13-1024x1536.jpg 1024w, https://minimalistbaker.com/wp-content/uploads/2021/01/INCREDIBLE-No-Bake-Mint-Chocolate-Brownie-Bars-Vegan-gluten-free-just-10-ingredients-minimalistbaker-recipe-plantbased-glutenfree-mint-chocolate-13-1365x2048.jpg 1365w, https://minimalistbaker.com/wp-content/uploads/2021/01/INCREDIBLE-No-Bake-Mint-Chocolate-Brownie-Bars-Vegan-gluten-free-just-10-ingredients-minimalistbaker-recipe-plantbased-glutenfree-mint-chocolate-13-373x560.jpg 373w, https://minimalistbaker.com/wp-content/uploads/2021/01/INCREDIBLE-No-Bake-Mint-Chocolate-Brownie-Bars-Vegan-gluten-free-just-10-ingredients-minimalistbaker-recipe-plantbased-glutenfree-mint-chocolate-13-600x900.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2021/01/INCREDIBLE-No-Bake-Mint-Chocolate-Brownie-Bars-Vegan-gluten-free-just-10-ingredients-minimalistbaker-recipe-plantbased-glutenfree-mint-chocolate-13-680x1020.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2021/01/INCREDIBLE-No-Bake-Mint-Chocolate-Brownie-Bars-Vegan-gluten-free-just-10-ingredients-minimalistbaker-recipe-plantbased-glutenfree-mint-chocolate-13.jpg 1456w"
        />
        <ExploreRecipesCard
          title="The Best Vegan Gluten-Free Zucchini Bread"
          src="https://minimalistbaker.com/wp-content/uploads/2022/04/The-BEST-Gluten-Free-Zucchini-Bread-Vegan-1-bowl-subtly-spiced-SO-classic-minimalistbaker-recipe-glutenfree-zucchinibread-vegan-9-500x750.jpg"
          srcSet="https://minimalistbaker.com/wp-content/uploads/2022/04/The-BEST-Gluten-Free-Zucchini-Bread-Vegan-1-bowl-subtly-spiced-SO-classic-minimalistbaker-recipe-glutenfree-zucchinibread-vegan-9-500x750.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-BEST-Gluten-Free-Zucchini-Bread-Vegan-1-bowl-subtly-spiced-SO-classic-minimalistbaker-recipe-glutenfree-zucchinibread-vegan-9-200x300.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-BEST-Gluten-Free-Zucchini-Bread-Vegan-1-bowl-subtly-spiced-SO-classic-minimalistbaker-recipe-glutenfree-zucchinibread-vegan-9-683x1024.jpg 683w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-BEST-Gluten-Free-Zucchini-Bread-Vegan-1-bowl-subtly-spiced-SO-classic-minimalistbaker-recipe-glutenfree-zucchinibread-vegan-9-768x1152.jpg 768w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-BEST-Gluten-Free-Zucchini-Bread-Vegan-1-bowl-subtly-spiced-SO-classic-minimalistbaker-recipe-glutenfree-zucchinibread-vegan-9-1024x1536.jpg 1024w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-BEST-Gluten-Free-Zucchini-Bread-Vegan-1-bowl-subtly-spiced-SO-classic-minimalistbaker-recipe-glutenfree-zucchinibread-vegan-9-1365x2048.jpg 1365w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-BEST-Gluten-Free-Zucchini-Bread-Vegan-1-bowl-subtly-spiced-SO-classic-minimalistbaker-recipe-glutenfree-zucchinibread-vegan-9-373x560.jpg 373w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-BEST-Gluten-Free-Zucchini-Bread-Vegan-1-bowl-subtly-spiced-SO-classic-minimalistbaker-recipe-glutenfree-zucchinibread-vegan-9-600x900.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-BEST-Gluten-Free-Zucchini-Bread-Vegan-1-bowl-subtly-spiced-SO-classic-minimalistbaker-recipe-glutenfree-zucchinibread-vegan-9-680x1020.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-BEST-Gluten-Free-Zucchini-Bread-Vegan-1-bowl-subtly-spiced-SO-classic-minimalistbaker-recipe-glutenfree-zucchinibread-vegan-9.jpg 1456w"
        />
      </div>
      <div data-class="more-link-container" className="text-center mt-5">
        <a
          id="all-recipes"
          href="#all-recipes"
          className="text-[18px] text-[#D56638] font-bold font-bakerOrator lowercase tracking-wide no-underline bg-transparent a-transition"
        >
          go to all recipes
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