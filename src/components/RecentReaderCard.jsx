import CategoryIcons from './CategoryIcons';
import { useEffect, useState } from 'react';

export default function RecentReaderCard({
  title,
  counter,
  src,
  srcSet,
  categoryIcons
}) {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    setIcons([...categoryIcons]);
  }, [categoryIcons]);

  return (
    <div
      data-class="popular-post"
      className="group flex flex-col flex-nowrap items-center relative pt-4 pb-8 px-4 max-w-[310px] mx-auto popular-post-top-margin-md bg-white hover:bg-[#003811] md:flex-row md:mb-2.5 md:max-w-none md:p-0 md:!mt-0"
    >
      <a
        href="#"
        className="block-link a-default a-transition hover:no-underline"
      >
        {title}
      </a>
      <div className="relative md:w-[130px] md:shrink-0">
        <span className="circle group-hover:bg-[#003811] md:block"></span>
        <a
          data-class="popular-post__image"
          href="#"
          tabIndex="-1"
          aria-hidden="true"
          className="a-default a-transition"
        >
          <img
            width="400"
            height="400"
            decoding="async"
            src={src}
            data-src="https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-400x400.jpg"
            data-class="attachment-be_thumbnail_medium size-be_thumbnail_medium wp-image-96952 lazyloaded"
            alt="Spoonful of vegan tiramisu pudding next to a dessert cup"
            data-srcset="https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-400x400.jpg 400w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-200x200.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-1000x1000.jpg 1000w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-600x600.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-500x500.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-680x680.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-100x100.jpg 100w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-300x300.jpg 300w, https://minimalistbaker.com/wp-content/uploads/2022/07/CREAMY-vegan-pudding-infused-with-the-flavors-of-tiramisu-An-EASY-decadent-no-bake-dessert-made-with-just-7-simple-ingredients.-minimalistbaker-recipe-plantbased-tiramisu-pudding-7-340x340.jpg 340w"
            sizes="(max-width: 400px) 100vw, 400px"
            data-pin-description="CREAMY vegan pudding infused with the flavors of tiramisu! An EASY, decadent, no-bake dessert made with just 7 simple ingredients. #minimalistbaker #recipe #plantbased #tiramisu #pudding"
            srcSet={srcSet}
          />
          <noscript>Script support is not available in your browser!</noscript>
        </a>
      </div>
      <div
        data-class="popular-post__counter"
        className="text-[32px] group-hover:text-white font-bold tracking-wide py-0 px-[30px] md:py-4"
      >
        {counter}
      </div>
      <div
        data-class="popular-post__title"
        className="md:grow md:py-4 md:pr-4 md:pl-0"
      >
        <h3 className="md:text-[24px] md:mb-0">
          <a
            className="font-normal no-underline text-[#212121] group-hover:text-white"
            href="#"
          >
            {title}
          </a>
        </h3>
      </div>
      <div
        data-class="popular-post__key-categories"
        className="md:py-4 md:pr-4 md:pl-0"
      >
        <CategoryIcons icons={icons} containerClass="mb-0" />
      </div>
    </div>
  );
}
