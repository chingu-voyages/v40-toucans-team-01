import RecipeCard from '../components/RecipeCard';

export default function ReaderFavorites() {
  return (
    <div
      data-class="mega"
      className="bg-[#FBF8F3] relative mb-[53px] md:py-[60px]"
    >
      <div data-class="wrap" className="max-w-[1200px] px-[16px] mx-auto">
        <div
          data-class="mega-inner"
          className="grid grid-areas-layout grid-cols-layout gap-x-16"
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
          <form
            role="search"
            method="get"
            data-class="search-form"
            action="https://minimalistbaker.com/"
            className="grid-in-search max-w-full border border-solid border-[#2A2B2A] relative truncate block mt-0 md:mb-10"
          >
            <label>
              <span
                data-class="screen-reader-text"
                className="!absolute clip-search h-px w-px border-0 border-none truncate clip-path-search -m-px !break-normal p-0"
              >
                Search for
              </span>
              <input
                type="search"
                data-class="search-field slick-search-box-input"
                placeholder="search minimalist baker"
                value=""
                name="s"
                title="Search for"
                className="border-0 border-none pr-11 w-full box-border bg-white rounded-none placeholder:text-[#2A2B2A] leading-6 py-3.5 px-4 overflow-visible m-0 font-bakerMono uppercase tracking-[.35em] md:text-[14px]"
              />
            </label>
            <button
              type="submit"
              data-class="search-submit"
              className="bg-transparent border-0 border-none p-0 m-0 min-w-0 w-11 h-11 leading-[0] text-center absolute top-[50%] right-0 overflow-visible mt-[-22px]"
            >
              <svg
                data-class="svg-icon"
                className="fill-[#2A2B2A] w-5 h-5"
                width="16"
                height="16"
                aria-hidden="true"
                role="img"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 29 32"
              >
                <path d="M28.4501243,12.4 C28.4444806,18.6921406 23.342143,23.7900024 17.05,23.79 C15.5266386,23.8233305 14.0186342,23.4798216 12.66,22.79 L5,30.56 C4.41199697,31.0967002 3.65517844,31.4114519 2.86,31.45 C2.10217663,31.4281398 1.38353748,31.1083454 0.86,30.56 C-0.257531922,29.3984916 -0.257531922,27.5615084 0.86,26.4 L8,19.22 C5.00152809,15.2629568 4.91442496,9.81873792 7.78477557,5.7677983 C10.6551262,1.71685869 15.8203741,-0.0057325508 20.5476637,1.51142193 C25.2749532,3.02857642 28.4730951,7.43527534 28.4501243,12.4 Z M24,12.4 C24,8.57818953 20.9018105,5.48 17.08,5.48 C13.2581895,5.48 10.16,8.57818953 10.16,12.4 C10.16,16.2218104 13.2581896,19.3199999 17.08,19.3199999 C20.9018104,19.3199999 24,16.2218104 24,12.4 L24,12.4 Z"></path>
              </svg>
            </button>
          </form>
          <div
            data-class="recipe-key is-style-long"
            className="bg-white grid-in-recipe-key max-w-none px-8 pt-[42px] pb-4 md:mb-[60px]"
          >
            <h4 className="text-center mb-6 uppercase md:text-[22px]">
              Recipe Key
            </h4>
            <div
              data-class="recipe-key__items"
              className="flex flex-row flex-wrap justify-center"
            >
              <div data-class="recipe-key__item" className="recipe-key-item">
                <a
                  href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=gluten-free"
                  data-class="recipe-key__circle GF"
                  className="recipe-key-circle !text-[#2A2B2A] bg-[#FFDED6]"
                >
                  GF
                </a>
                <a
                  href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=gluten-free"
                  data-class="recipe-key__label"
                  className="recipe-key-label"
                >
                  Gluten-Free
                </a>
              </div>
              <div
                data-class="recipe-key__item"
                className="recipe-key-item ml-3.5"
              >
                <a
                  href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegan"
                  data-class="recipe-key__circle VG"
                  className="recipe-key-circle bg-[#F74639]"
                >
                  VG
                </a>
                <a
                  href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegan"
                  data-class="recipe-key__label"
                  className="recipe-key-label"
                >
                  Vegan
                </a>
              </div>
              <div
                data-class="recipe-key__item"
                className="recipe-key-item ml-3.5"
              >
                <a
                  href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegetarian"
                  data-class="recipe-key__circle V"
                  className="recipe-key-circle bg-[#D56638]"
                >
                  V
                </a>
                <a
                  href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegetarian"
                  data-class="recipe-key__label"
                  className="recipe-key-label"
                >
                  Vegetarian
                </a>
              </div>
              <div
                data-class="recipe-key__item"
                className="recipe-key-item ml-3.5"
              >
                <a
                  href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=dairy-free"
                  data-class="recipe-key__circle DF"
                  className="recipe-key-circle bg-[#003811]"
                >
                  DF
                </a>
                <a
                  href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=dairy-free"
                  data-class="recipe-key__label"
                  className="recipe-key-label"
                >
                  Dairy-Free
                </a>
              </div>
              <div
                data-class="recipe-key__item"
                className="recipe-key-item ml-3.5"
              >
                <a
                  href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=refined-sugar-free"
                  data-class="recipe-key__circle NS"
                  className="recipe-key-circle bg-[#2A2B2A]"
                >
                  NS
                </a>
                <a
                  href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=refined-sugar-free"
                  data-class="recipe-key__label"
                  className="recipe-key-label"
                >
                  Naturally Sweetened
                </a>
              </div>
            </div>
          </div>
          <div
            data-class="popular-recipes"
            className="grid-in-popular-recipes border-t border-solid border-[#2A2B2A] md:pt-[60px]"
          >
            <div
              data-class="popular-recipes__title-container"
              className="flex flex-row flex-nowrap justify-between mb-10"
            >
              <h2 className="uppercase leading-[1.1] text-center mb-1 xmd:text-[34px]">
                Recent Reader Favorites
              </h2>
              <span>
                <svg
                  data-class="svg-icon"
                  className="inline-block"
                  width="27"
                  height="27"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28 27"
                >
                  <polygon
                    fill="#D56638"
                    points="13.928 0 18.228 8.721 27.852 10.121 20.888 16.91 22.532 26.495 13.924 21.969 5.316 26.495 6.96 16.91 -.004 10.121 9.621 8.721"
                  ></polygon>
                </svg>
                <svg
                  data-class="svg-icon"
                  className="inline-block"
                  width="27"
                  height="27"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28 27"
                >
                  <polygon
                    fill="#D56638"
                    points="13.928 0 18.228 8.721 27.852 10.121 20.888 16.91 22.532 26.495 13.924 21.969 5.316 26.495 6.96 16.91 -.004 10.121 9.621 8.721"
                  ></polygon>
                </svg>
                <svg
                  data-class="svg-icon"
                  className="inline-block"
                  width="27"
                  height="27"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28 27"
                >
                  <polygon
                    fill="#D56638"
                    points="13.928 0 18.228 8.721 27.852 10.121 20.888 16.91 22.532 26.495 13.924 21.969 5.316 26.495 6.96 16.91 -.004 10.121 9.621 8.721"
                  ></polygon>
                </svg>
                <svg
                  data-class="svg-icon"
                  className="inline-block"
                  width="27"
                  height="27"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28 27"
                >
                  <polygon
                    fill="#D56638"
                    points="13.928 0 18.228 8.721 27.852 10.121 20.888 16.91 22.532 26.495 13.924 21.969 5.316 26.495 6.96 16.91 -.004 10.121 9.621 8.721"
                  ></polygon>
                </svg>
                <svg
                  data-class="svg-icon"
                  className="inline-block"
                  width="27"
                  height="27"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28 27"
                >
                  <polygon
                    fill="#D56638"
                    points="13.928 0 18.228 8.721 27.852 10.121 20.888 16.91 22.532 26.495 13.924 21.969 5.316 26.495 6.96 16.91 -.004 10.121 9.621 8.721"
                  ></polygon>
                </svg>
              </span>
            </div>
            <div data-class="popular-posts__grid">
              <div className="popular-post md:popular-post-md">
                <a
                  href="https://minimalistbaker.com/vegan-tiramisu-pudding/"
                  className="block-link a-default a-transition"
                >
                  Vegan Tiramisu Pudding Cups
                </a>
                <div className="relative md:w-[130px] md:shrink-0">
                  <span className="circle md:block"></span>
                  <a
                    data-class="popular-post__image"
                    href="https://minimalistbaker.com/vegan-tiramisu-pudding/"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="a-default a-transition"
                  >
                    <img
                      width="400"
                      height="400"
                      decoding="async"
                      src="https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-400x400.jpg"
                      data-src="https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-400x400.jpg"
                      className="attachment-be_thumbnail_medium size-be_thumbnail_medium wp-image-96952 lazyloaded"
                      alt="Spoonful of vegan tiramisu pudding next to a dessert cup"
                      data-srcset="https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-340x340.jpg 340w"
                      sizes="(max-width: 400px) 100vw, 400px"
                      data-pin-description="CREAMY vegan pudding infused with the flavors of tiramisu! An EASY, decadent, no-bake dessert made with just 7 simple ingredients. #minimalistbaker #recipe #plantbased #tiramisu #pudding"
                      srcSet="https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-340x340.jpg 340w"
                    />
                    <noscript>
                      "
                      <img
                        width="400"
                        height="400"
                        decoding="async"
                        src="https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-400x400.jpg"
                        className="lazyload attachment-be_thumbnail_medium size-be_thumbnail_medium wp-image-96952"
                        alt="Spoonful of vegan tiramisu pudding next to a dessert cup"
                        srcSet="https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-340x340.jpg 340w"
                        sizes="(max-width: 400px) 100vw, 400px"
                        data-pin-description="CREAMY vegan pudding infused with the flavors of tiramisu! An EASY, decadent, no-bake dessert made with just 7 simple ingredients. #minimalistbaker #recipe #plantbased #tiramisu #pudding"
                      />
                      "
                    </noscript>
                  </a>
                </div>
                <div
                  data-class="popular-post__counter"
                  className="text-[32px] font-bold tracking-wide py-0 px-[30px] md:py-4"
                >
                  01
                </div>
                <div
                  data-class="popular-post__title"
                  className="md:grow md:py-4 md:pr-4 md:pl-0"
                >
                  <h3 className="md:text-[24px] md:mb-0">
                    <a
                      className="font-normal no-underline text-[#212121]"
                      href="https://minimalistbaker.com/vegan-tiramisu-pudding/"
                    >
                      Vegan Tiramisu Pudding Cups
                    </a>
                  </h3>
                </div>
                <div
                  data-class="popular-post__key-categories"
                  className="md:py-4 md:pr-4 md:pl-0"
                >
                  <div data-class="entry-key-categories" className="flex mb-0">
                    <a
                      data-class="entry-key-categories__circle GF"
                      className="favorite-key-circle GF md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=gluten-free"
                    >
                      GF
                    </a>
                    <a
                      data-class="entry-key-categories__circle VG"
                      className="favorite-key-circle VG md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegan"
                    >
                      VG
                    </a>
                    <a
                      data-class="entry-key-categories__circle V"
                      className="favorite-key-circle V md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegetarian"
                    >
                      V
                    </a>
                    <a
                      data-class="entry-key-categories__circle DF"
                      className="favorite-key-circle DF md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=dairy-free"
                    >
                      DF
                    </a>
                    <a
                      data-class="entry-key-categories__circle NS"
                      className="favorite-key-circle NS md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=refined-sugar-free"
                    >
                      NS
                    </a>
                  </div>
                </div>
              </div>
              <div className="popular-post md:popular-post-md">
                <a
                  href="https://minimalistbaker.com/1-bowl-cowgirl-cookies-vegan-gluten-free/"
                  className="block-link a-default a-transition"
                >
                  1-Bowl Cowgirl Cookies (Vegan + Gluten-Free)
                </a>
                <div className="relative md:w-[130px] md:shrink-0">
                  <span className="circle md:block"></span>
                  <a
                    data-class="popular-post__image"
                    href="https://minimalistbaker.com/1-bowl-cowgirl-cookies-vegan-gluten-free/"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="a-default a-transition"
                  >
                    <img
                      width="400"
                      height="400"
                      decoding="async"
                      src="https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-400x400.jpg"
                      data-src="https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-400x400.jpg"
                      data-class="attachment-be_thumbnail_medium size-be_thumbnail_medium wp-image-96165 lazyloaded"
                      alt="Stack of gluten-free cowgirl cookies"
                      data-srcset="https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-340x340.jpg 340w"
                      sizes="(max-width: 400px) 100vw, 400px"
                      data-pin-description="The ULTIMATE “Cowgirl” Cookies! Full of goodies, gluten-free, vegan, just 1 bowl and 20 minutes! #minimalistbaker #recipe #cowgirl #cookies"
                      srcSet="https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-340x340.jpg 340w"
                    ></img>
                    <noscript>
                      "
                      <img
                        width="400"
                        height="400"
                        decoding="async"
                        src="https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-400x400.jpg"
                        data-src="https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-400x400.jpg"
                        data-class="attachment-be_thumbnail_medium size-be_thumbnail_medium wp-image-96165 lazyloaded"
                        alt="Stack of gluten-free cowgirl cookies"
                        data-srcset="https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-340x340.jpg 340w"
                        sizes="(max-width: 400px) 100vw, 400px"
                        data-pin-description="The ULTIMATE “Cowgirl” Cookies! Full of goodies, gluten-free, vegan, just 1 bowl and 20 minutes! #minimalistbaker #recipe #cowgirl #cookies"
                        srcset="https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-340x340.jpg 340w"
                      ></img>
                      "
                    </noscript>
                  </a>
                </div>
                <div
                  data-class="popular-post__counter"
                  className="text-[32px] font-bold tracking-wide py-0 px-[30px] md:py-4"
                >
                  02
                </div>
                <div
                  data-class="popular-post__title"
                  className="md:grow md:py-4 md:pr-4 md:pl-0"
                >
                  <h3 className="md:text-[24px] md:mb-0">
                    <a
                      className="font-normal no-underline text-[#212121]"
                      href="https://minimalistbaker.com/1-bowl-cowgirl-cookies-vegan-gluten-free/"
                    >
                      1-Bowl Cowgirl Cookies (Vegan + Gluten-Free)
                    </a>
                  </h3>
                </div>
                <div
                  data-class="popular-post__key-categories"
                  className="md:py-4 md:pr-4 md:pl-0"
                >
                  <div data-class="entry-key-categories" className="flex mb-0">
                    <a
                      data-class="entry-key-categories__circle GF"
                      className="favorite-key-circle GF md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=gluten-free"
                    >
                      GF
                    </a>
                    <a
                      data-class="entry-key-categories__circle VG"
                      className="favorite-key-circle VG md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegan"
                    >
                      VG
                    </a>
                    <a
                      data-class="entry-key-categories__circle V"
                      className="favorite-key-circle V md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegetarian"
                    >
                      V
                    </a>
                    <a
                      data-class="entry-key-categories__circle DF"
                      className="favorite-key-circle DF md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=dairy-free"
                    >
                      DF
                    </a>
                    <a
                      data-class="entry-key-categories__circle NS"
                      className="favorite-key-circle NS md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=refined-sugar-free"
                    >
                      NS
                    </a>
                  </div>
                </div>
              </div>
              <div className="popular-post md:popular-post-md">
                <a
                  href="https://minimalistbaker.com/creamy-sesame-noodle-salad-30-minutes/"
                  className="block-link a-default a-transition"
                >
                  Creamy Sesame Noodle Salad (30 Minutes!)
                </a>
                <div className="relative md:w-[130px] md:shrink-0">
                  <span className="circle md:block"></span>
                  <a
                    data-class="popular-post__image"
                    href="https://minimalistbaker.com/creamy-sesame-noodle-salad-30-minutes/"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="a-default a-transition"
                  >
                    <img
                      width="400"
                      height="400"
                      decoding="async"
                      src="https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-400x400.jpg"
                      data-src="https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-400x400.jpg"
                      data-class="attachment-be_thumbnail_medium size-be_thumbnail_medium wp-image-95901 lazyloaded"
                      alt="Swirling cold sesame noodle salad on a fork above a bowl"
                      data-srcset="https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-340x340.jpg 340w"
                      sizes="(max-width: 400px) 100vw, 400px"
                      data-pin-description="EASY Sesame Noodle Salad! Creamy, satisfying, perfect for picnics, and just 30 minutes required! #minimalistbaker #recipe #plantbased #glutenfree #noodles #sesame"
                      srcSet="https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-340x340.jpg 340w"
                    ></img>
                    <noscript>
                      "
                      <img
                        width="400"
                        height="400"
                        decoding="async"
                        src="https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-400x400.jpg"
                        data-src="https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-400x400.jpg"
                        data-class="attachment-be_thumbnail_medium size-be_thumbnail_medium wp-image-95901 lazyloaded"
                        alt="Swirling cold sesame noodle salad on a fork above a bowl"
                        data-srcset="https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-340x340.jpg 340w"
                        sizes="(max-width: 400px) 100vw, 400px"
                        data-pin-description="EASY Sesame Noodle Salad! Creamy, satisfying, perfect for picnics, and just 30 minutes required! #minimalistbaker #recipe #plantbased #glutenfree #noodles #sesame"
                        srcSet="https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/05/EASY-Sesame-Noodle-Salad-Creamy-satisfying-perfect-for-picnics-and-just-30-minutes-required-minimalistbaker-recipe-plantbased-glutenfree-noodles-sesame-9-340x340.jpg 340w"
                      ></img>
                      "
                    </noscript>
                  </a>
                </div>
                <div
                  data-class="popular-post__counter"
                  className="text-[32px] font-bold tracking-wide py-0 px-[30px] md:py-4"
                >
                  03
                </div>
                <div
                  data-class="popular-post__title"
                  className="md:grow md:py-4 md:pr-4 md:pl-0"
                >
                  <h3 className="md:text-[24px] md:mb-0">
                    <a
                      className="font-normal no-underline text-[#212121]"
                      href="https://minimalistbaker.com/creamy-sesame-noodle-salad-30-minutes/"
                    >
                      Creamy Sesame Noodle Salad (30 Minutes!)
                    </a>
                  </h3>
                </div>
                <div
                  data-class="popular-post__key-categories"
                  className="md:py-4 md:pr-4 md:pl-0"
                >
                  <div data-class="entry-key-categories" className="flex mb-0">
                    <a
                      data-class="entry-key-categories__circle GF"
                      className="favorite-key-circle GF md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=gluten-free"
                    >
                      GF
                    </a>
                    <a
                      data-class="entry-key-categories__circle VG"
                      className="favorite-key-circle VG md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegan"
                    >
                      VG
                    </a>
                    <a
                      data-class="entry-key-categories__circle V"
                      className="favorite-key-circle V md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegetarian"
                    >
                      V
                    </a>
                    <a
                      data-class="entry-key-categories__circle DF"
                      className="favorite-key-circle DF md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=dairy-free"
                    >
                      DF
                    </a>
                    <a
                      data-class="entry-key-categories__circle NS"
                      className="favorite-key-circle NS md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=refined-sugar-free"
                    >
                      NS
                    </a>
                  </div>
                </div>
              </div>
              <div className="popular-post md:popular-post-md">
                <a
                  href="https://minimalistbaker.com/creamy-vegan-strawberry-milkshake/"
                  className="block-link a-default a-transition"
                >
                  Creamy Vegan Strawberry Milkshake (4 Ingredients!)
                </a>
                <div className="relative md:w-[130px] md:shrink-0">
                  <span className="circle md:block"></span>
                  <a
                    data-class="popular-post__image"
                    href="https://minimalistbaker.com/creamy-vegan-strawberry-milkshake/"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="a-default a-transition"
                  >
                    <img
                      width="400"
                      height="400"
                      decoding="async"
                      src="https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-400x400.jpg"
                      data-src="https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-400x400.jpg"
                      data-class="attachment-be_thumbnail_medium size-be_thumbnail_medium wp-image-94884 lazyloaded"
                      alt="Metal straw in an overflowing glass with our strawberry milkshake recipe"
                      data-srcset="https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-340x340.jpg 340w"
                      sizes="(max-width: 400px) 100vw, 400px"
                      data-pin-description="The ULTIMATE Vegan Strawberry Milkshake! Creamy, naturally sweetened, just 4 ingredients! #minimalistbaker #recipe #plantbased #milkshake"
                      srcSet="https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-340x340.jpg 340w"
                    ></img>
                    <noscript>
                      "
                      <img
                        width="400"
                        height="400"
                        decoding="async"
                        src="https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-400x400.jpg"
                        data-src="https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-400x400.jpg"
                        data-class="attachment-be_thumbnail_medium size-be_thumbnail_medium wp-image-94884 lazyloaded"
                        alt="Metal straw in an overflowing glass with our strawberry milkshake recipe"
                        data-srcset="https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-340x340.jpg 340w"
                        sizes="(max-width: 400px) 100vw, 400px"
                        data-pin-description="The ULTIMATE Vegan Strawberry Milkshake! Creamy, naturally sweetened, just 4 ingredients! #minimalistbaker #recipe #plantbased #milkshake"
                        srcSet="https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/04/The-ULTIMATE-Vegan-Strawberry-Milkshake-Creamy-naturally-sweetened-just-4-ingredients-minimalistbaker-recipe-plantbased-milkshake-9-340x340.jpg 340w"
                      ></img>
                      "
                    </noscript>
                  </a>
                </div>
                <div
                  data-class="popular-post__counter"
                  className="text-[32px] font-bold tracking-wide py-0 px-[30px] md:py-4"
                >
                  04
                </div>
                <div
                  data-class="popular-post__title"
                  className="md:grow md:py-4 md:pr-4 md:pl-0"
                >
                  <h3 className="md:text-[24px] md:mb-0">
                    <a
                      className="font-normal no-underline text-[#212121]"
                      href="https://minimalistbaker.com/creamy-vegan-strawberry-milkshake/"
                    >
                      Creamy Vegan Strawberry Milkshake (4 Ingredients!)
                    </a>
                  </h3>
                </div>
                <div
                  data-class="popular-post__key-categories"
                  className="md:py-4 md:pr-4 md:pl-0"
                >
                  <div data-class="entry-key-categories" className="flex mb-0">
                    <a
                      data-class="entry-key-categories__circle GF"
                      className="favorite-key-circle GF md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=gluten-free"
                    >
                      GF
                    </a>
                    <a
                      data-class="entry-key-categories__circle VG"
                      className="favorite-key-circle VG md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegan"
                    >
                      VG
                    </a>
                    <a
                      data-class="entry-key-categories__circle V"
                      className="favorite-key-circle V md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegetarian"
                    >
                      V
                    </a>
                    <a
                      data-class="entry-key-categories__circle DF"
                      className="favorite-key-circle DF md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=dairy-free"
                    >
                      DF
                    </a>
                    <a
                      data-class="entry-key-categories__circle NS"
                      className="favorite-key-circle NS md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=refined-sugar-free"
                    >
                      NS
                    </a>
                  </div>
                </div>
              </div>
              <div className="popular-post md:popular-post-md">
                <a
                  href="https://minimalistbaker.com/1-bowl-gluten-free-vegan-blueberry-muffins/"
                  className="block-link a-default a-transition"
                >
                  1-Bowl Gluten-Free Blueberry Muffins (Vegan)
                </a>
                <div className="relative md:w-[130px] md:shrink-0">
                  <span className="circle md:block"></span>
                  <a
                    data-class="popular-post__image"
                    href="https://minimalistbaker.com/1-bowl-gluten-free-vegan-blueberry-muffins/"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="a-default a-transition"
                  >
                    <img
                      width="400"
                      height="400"
                      decoding="async"
                      src="https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-400x400.jpg"
                      data-src="https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-400x400.jpg"
                      data-class="attachment-be_thumbnail_medium size-be_thumbnail_medium wp-image-95190 ls-is-cached lazyloaded"
                      alt="Stack of gluten-free blueberry muffins on a plate"
                      data-srcset="https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-340x340.jpg 340w"
                      sizes="(max-width: 400px) 100vw, 400px"
                      data-pin-description="CLASSIC Vegan and Gluten-free Blueberry Muffins! 1-Bowl, fluffy, moist, blueberry perfection! #minimalistbaker #recipe #plantbased #blueberrymuffins"
                      srcSet="https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-340x340.jpg 340w"
                    ></img>
                    <noscript>
                      "
                      <img
                        width="400"
                        height="400"
                        decoding="async"
                        src="https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-400x400.jpg"
                        data-src="https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-400x400.jpg"
                        data-class="attachment-be_thumbnail_medium size-be_thumbnail_medium wp-image-95190 ls-is-cached lazyloaded"
                        alt="Stack of gluten-free blueberry muffins on a plate"
                        data-srcset="https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-340x340.jpg 340w"
                        sizes="(max-width: 400px) 100vw, 400px"
                        data-pin-description="CLASSIC Vegan and Gluten-free Blueberry Muffins! 1-Bowl, fluffy, moist, blueberry perfection! #minimalistbaker #recipe #plantbased #blueberrymuffins"
                        srcSet="https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/07/CLASSIC-Vegan-and-Gluten-free-Blueberry-Muffins-1-Bowl-fluffy-moist-blueberry-perfection-minimalistbaker-recipe-plantbased-blueberrymuffins-17-340x340.jpg 340w"
                      ></img>
                      "
                    </noscript>
                  </a>
                </div>
                <div
                  data-class="popular-post__counter"
                  className="text-[32px] font-bold tracking-wide py-0 px-[30px] md:py-4"
                >
                  05
                </div>
                <div
                  data-class="popular-post__title"
                  className="md:grow md:py-4 md:pr-4 md:pl-0"
                >
                  <h3 className="md:text-[24px] md:mb-0">
                    <a
                      className="font-normal no-underline text-[#212121]"
                      href="https://minimalistbaker.com/1-bowl-gluten-free-vegan-blueberry-muffins/"
                    >
                      1-Bowl Gluten-Free Blueberry Muffins (Vegan)
                    </a>
                  </h3>
                </div>
                <div
                  data-class="popular-post__key-categories"
                  className="md:py-4 md:pr-4 md:pl-0"
                >
                  <div data-class="entry-key-categories" className="flex mb-0">
                    <a
                      data-class="entry-key-categories__circle GF"
                      className="favorite-key-circle GF md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=gluten-free"
                    >
                      GF
                    </a>
                    <a
                      data-class="entry-key-categories__circle VG"
                      className="favorite-key-circle VG md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegan"
                    >
                      VG
                    </a>
                    <a
                      data-class="entry-key-categories__circle V"
                      className="favorite-key-circle V md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegetarian"
                    >
                      V
                    </a>
                    <a
                      data-class="entry-key-categories__circle DF"
                      className="favorite-key-circle DF md:ml-3.5 md:favorite-key-circle-md"
                      href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=dairy-free"
                    >
                      DF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-class="home-mega-sidebar"
            className="grid-in-sidebar max-w-[300px] mt-[60px] mx-auto xmd:mt-0"
          ></div>
        </div>
      </div>
      <RecipeCard />
    </div>
  );
}
