export default function ExploreRecipesCard({ title, src, srcSet }) {
  return (
    <article
      data-class="post-summary primary"
      className="clear-both ml-0 w-full float-left mb-8"
    >
      <a
        data-class="post-summary__image"
        className="block mb-2 text-[#D56638] no-underline font-bold bg-transparent a-transition md:mb-3"
        id={title}
        href={`#${title}`}
        tabindex="-1"
        aria-hidden="true"
      >
        <img
          width="500"
          height="750"
          decoding="async"
          src={src}
          data-src="https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-500x750.jpg"
          data-class="attachment-be_archive size-be_archive wp-image-96165 lazyloaded"
          alt="Stack of gluten-free cowgirl cookies"
          data-srcset="https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-500x750.jpg 500w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-200x300.jpg 200w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-683x1024.jpg 683w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-768x1152.jpg 768w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-1024x1536.jpg 1024w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-1365x2048.jpg 1365w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-373x560.jpg 373w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-600x900.jpg 600w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12-680x1020.jpg 680w, https://minimalistbaker.com/wp-content/uploads/2022/05/The-ULTIMATE-Cowgirl-Cookies-Full-of-goodies-gluten-free-vegan-just-1-bowl-and-20-minutes-minimalistbaker-recipe-cowgirl-cookies-12.jpg 1456w"
          sizes="(max-width: 500px) 100vw, 500px"
          data-pin-description="The ULTIMATE “Cowgirl” Cookies! Full of goodies, gluten-free, vegan, just 1 bowl and 20 minutes! #minimalistbaker #recipe #cowgirl #cookies"
          srcSet={srcSet}
        />
        <noscript>Script support is not available in your browser!</noscript>
      </a>
      <div class="post-summary__content">
        <h3
          class="post-summary__title"
          className="text-[19px] m-0 tracking-wide text-center msm:text-[20px] md:text-[21px]"
        >
          <a
            id={title}
            href={`#${title}`}
            className="text-[#212121] no-underline font-bold bg-transparent a-transition hover:text-[#D56638]"
          >
            {title}
          </a>
        </h3>
      </div>
    </article>
  );
}
