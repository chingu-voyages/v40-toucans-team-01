export default function SearchBar() {
  return (
    <form
      role="search"
      method="get"
      data-class="search-form"
      action="https://minimalistbaker.com/"
      className="grid-in-search max-w-full border border-solid border-[#2A2B2A] relative truncate block mt-0 mb-[30px] md:mb-10"
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
          className="border-0 border-none pr-11 w-full box-border bg-white rounded-none placeholder:text-[#2A2B2A] leading-6 py-3.5 px-4 overflow-visible m-0 font-bakerMono uppercase tracking-[.35em] text-[0.88rem]"
        />
      </label>
      <button
        type="submit"
        data-class="search-submit"
        className="bg-transparent border-0 border-none p-0 m-0 min-w-0 w-11 h-11 leading-[0] text-center absolute top-[50%] right-0 overflow-visible mt-[-22px]"
      >
        <svg
          data-class="svg-icon"
          className="fill-[#2A2B2A] w-5 h-5 mx-auto my-0"
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
  );
}
