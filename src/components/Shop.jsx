export default function Shop() {
  return (
    <div data-class="shop-feature-inner">
      <div
        data-class="shop-feature__overlay"
        className="py-10 px-[30px] my-0 mx-4 relative text-center bg-[#FBF8F3] md:max-w-[500px] md:mx-auto"
      >
        <span
          data-class="shop-feature__brandmark-container"
          className="flex justify-center items-center bg-[#FBF8F3] h-[106px] w-[106px] rounded-full absolute top-[-53px] right-[calc(50%_-_53px)]"
        >
          <span
            data-class="shop-feature__brandmark"
            className="bg-[url('/src/assets/brandmark.svg')] bg-contain bg-center bg-no-repeat block w-[47px] h-[44px]"
          ></span>
        </span>

        <h2
          data-class="shop-feature__title is-style-alt"
          className="mb-5 text-[38px] font-bakerOrator tracking-[0.035em] font-normal lowercase md:text-[42px] xmd:text-[46px] "
        >
          Shop
        </h2>
        <div
          data-class="shop-feature__description"
          className="text-[18px] mb-6 relative"
        >
          Curious what equipment and pantry staples we love? Check out our shop,
          where we share our go-to and recommend appliances, ingredients, tools,
          and more!
        </div>
        <hr className="mb-6 h-0.5 bg-[#2A2B2A] max-w-[100px] border-none w-full box-content overflow-visible mx-auto"></hr>
        <a
          id="shop"
          data-class="shop-feature__more-link"
          className="font-bakerOrator lowercase no-underline text-[#D56638] font-bold bg-transparent a-transition"
          href="#shop"
        >
          Shop Our Recommendations{' '}
          <svg
            data-class="svg-icon"
            className="ml-0 align-middle inline-block a-transition"
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
