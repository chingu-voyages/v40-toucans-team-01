import RecentReaderCard from './RecentReaderCard';
import RecentReaderHeader from './RecentReaderHeader';
import RecipeKey from './RecipeKey';
import SearchBar from './SearchBar';

export default function ReaderFavorites() {
  return (
    <div
      data-class="mega-inner"
      className="xmd:grid xmd:grid-areas-layout xmd:grid-cols-layout xmd:gap-x-16"
    >
      <span
        data-class="mega__brandmark-container"
        className="flex justify-center items-center bg-[#FBF8F3] h-[106px] w-[106px] rounded-[50%] absolute bottom-[-53px] right-[calc(50%_-_53px)]"
      >
        <span
          data-class="mega__brandmark"
          className="bg-[url('/src/assets/brandmark.svg')] bg-contain bg-center bg-no-repeat block w-[47px] h-[44px]"
        ></span>
      </span>
      <SearchBar />
      <RecipeKey />

      <div
        data-class="popular-recipes"
        className="grid-in-popular-recipes border-t border-solid border-[#2A2B2A] pt-10 md:pt-[60px]"
      >
        <RecentReaderHeader />

        <div data-class="popular-posts__grid">
          <RecentReaderCard
            title="Vegan Tiramisu Pudding Cups"
            counter="01"
            categoryIcons={['GF', 'VG', 'V', 'DF', 'NS']}
            src="https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-400x400.jpg"
            srcSet="https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-340x340.jpg 340w"
          />
          <RecentReaderCard
            title="1-Bowl Cowgirl Cookies (Vegan + Gluten-Free)"
            counter="02"
            categoryIcons={['GF', 'VG', 'V', 'DF', 'NS']}
            src="https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-400x400.jpg"
            srcSet="https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-340x340.jpg 340w"
          />
          <RecentReaderCard
            title="Creamy Sesame Noodle Salad (30 Minutes!)"
            counter="03"
            categoryIcons={['GF', 'VG', 'V', 'DF', 'NS']}
            src="https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-400x400.jpg"
            srcSet="https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-340x340.jpg 340w"
          />
          <RecentReaderCard
            title="Creamy Vegan Strawberry Milkshake (4 Ingredients!)"
            counter="04"
            categoryIcons={['GF', 'VG', 'V', 'DF', 'NS']}
            src="https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-400x400.jpg"
            srcSet="https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-340x340.jpg 340w"
          />
          <RecentReaderCard
            title="1-Bowl Gluten-Free Blueberry Muffins (Vegan)"
            counter="05"
            categoryIcons={['GF', 'VG', 'V', 'DF']}
            src="https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-400x400.jpg"
            srcSet="https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-340x340.jpg 340w"
          />
        </div>
      </div>

      <div
        data-class="home-mega-sidebar"
        className="grid-in-sidebar max-w-[300px] mt-[60px] mx-auto xmd:mt-0"
      ></div>
    </div>
  );
}
