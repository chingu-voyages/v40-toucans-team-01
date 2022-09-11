import CategoryIcons from './CategoryIcons';

export default function RecipeKey() {
  return (
    <div
      data-class="recipe-key is-style-long"
      className="bg-white grid-in-recipe-key max-w-none px-8 pt-[42px] pb-4 mb-[40px] md:mb-[60px]"
    >
      <h4 className="text-center mb-6 uppercase md:text-[22px]">Recipe Key</h4>
      <div
        data-class="recipe-key__items"
        className="flex flex-wrap justify-center"
      >
        <CategoryIcons
          icons={['GF']}
          containerClass="mb-5 items-center"
          categoryClass="mr-1.5"
        >
          <a
            href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=gluten-free"
            data-class="recipe-key__label"
            className="recipe-key-label"
          >
            Gluten-Free
          </a>
        </CategoryIcons>
        <CategoryIcons
          icons={['VG']}
          containerClass="mb-5 items-center"
          categoryClass="mr-1.5"
        >
          <a
            href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegan"
            data-class="recipe-key__label"
            className="recipe-key-label"
          >
            Vegan
          </a>
        </CategoryIcons>
        <CategoryIcons
          icons={['V']}
          containerClass="mb-5 items-center"
          categoryClass="mr-1.5"
        >
          <a
            href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegetarian"
            data-class="recipe-key__label"
            className="recipe-key-label"
          >
            Vegetarian
          </a>
        </CategoryIcons>
        <CategoryIcons
          icons={['DF']}
          containerClass="mb-5 items-center"
          categoryClass="mr-1.5"
        >
          <a
            href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=dairy-free"
            data-class="recipe-key__label"
            className="recipe-key-label"
          >
            Dairy-Free
          </a>
        </CategoryIcons>
        <CategoryIcons
          icons={['NS']}
          containerClass="mb-5 items-center"
          categoryClass="mr-1.5"
        >
          <a
            href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=refined-sugar-free"
            data-class="recipe-key__label"
            className="recipe-key-label"
          >
            Naturally Sweetened
          </a>
        </CategoryIcons>
      </div>
    </div>
  );
}
