import { useEffect, useState } from 'react';
import CategoryIcons from './CategoryIcons';

export default function RecipeCard({ title, src, srcSet, categoryIcons }) {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    setIcons([...categoryIcons]);
  }, [categoryIcons]);

  return (
    <article data-class="post-summary primary" className="text-center mb-8">
      <a
        data-class="post-summary__image"
        className="block mb-2 text-[#D56638] font-bold underline bg-transparent a-transition md:mb-3"
        href="#"
        tabindex="-1"
        aria-hidden="true"
      >
        <img
          width="500"
          height="750"
          decoding="async"
          src={src}
          data-src="https://minimalistbaker.com/wp-content/uploads/2018/02/PERFECT-Gluten-Free-Pizza-Crust-Fluffy-crispy-easy-to-make-10-ingredients-vegan-glutenfree-pizza-recipe-plantbased-minimalistbaker-19.jpg"
          data-class="attachment-be_archive size-be_archive wp-image-30776 lazyloaded"
          alt="Picking up a slice of gluten-free and vegan pizza made using our Gluten-Free Pizza Crust recipe"
          data-srcset="https://minimalistbaker.com/wp-content/uploads/2018/02/PERFECT-Gluten-Free-Pizza-Crust-Fluffy-crispy-easy-to-make-10-ingredients-vegan-glutenfree-pizza-recipe-plantbased-minimalistbaker-19.jpg 1456w, https://minimalistbaker.com/wp-content/uploads/2018/02/PERFECT-Gluten-Free-Pizza-Crust-Fluffy-crispy-easy-to-make-10-ingredients-vegan-glutenfree-pizza-recipe-plantbased-minimalistbaker-19-600x900.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2018/02/PERFECT-Gluten-Free-Pizza-Crust-Fluffy-crispy-easy-to-make-10-ingredients-vegan-glutenfree-pizza-recipe-plantbased-minimalistbaker-19-200x300.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2018/02/PERFECT-Gluten-Free-Pizza-Crust-Fluffy-crispy-easy-to-make-10-ingredients-vegan-glutenfree-pizza-recipe-plantbased-minimalistbaker-19-768x1152.jpg 768w, https://minimalistbaker.com/wp-content/uploads/2018/02/PERFECT-Gluten-Free-Pizza-Crust-Fluffy-crispy-easy-to-make-10-ingredients-vegan-glutenfree-pizza-recipe-plantbased-minimalistbaker-19-683x1024.jpg 683w, https://minimalistbaker.com/wp-content/uploads/2018/02/PERFECT-Gluten-Free-Pizza-Crust-Fluffy-crispy-easy-to-make-10-ingredients-vegan-glutenfree-pizza-recipe-plantbased-minimalistbaker-19-680x1020.jpg 680w"
          sizes="(max-width: 500px) 100vw, 500px"
          data-pin-description="PERFECT Gluten Free Pizza Crust! Fluffy, crispy, easy to make, 10 ingredients! #vegan #glutenfree #pizza #recipe #plantbased #minimalistbaker"
          srcSet={srcSet}
        />
        <noscript>Script support is not available in your browser!</noscript>
      </a>
      <div data-class="post-summary__content">
        <CategoryIcons
          icons={icons}
          containerClass="mb-3.5 md:mb-3"
          categoryClass="shrink-0"
        />
      </div>
      <h3
        data-class="post-summary__title"
        className="text-[19px] m-0 tracking-wide text-center msm:text-[20px] md:text-[21px]"
      >
        <a
          href="#"
          className="text-[#212121] no-underline font-bold bg-transparent a-transition hover:text-[#D56638]"
        >
          {title}
        </a>
      </h3>
    </article>
  );
}
