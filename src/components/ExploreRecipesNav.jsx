export default function ExploreRecipesNav() {
  return (
    <div
      data-class="category-navigation"
      className="flex flex-col flex-nowrap items-center mb-5 font-bakerOrator msm:flex-row msm:flex-wrap xmd:flex-row xmd:flex-nowrap xmd:mb-[30px]"
    >
      <div
        data-class="wp-block-button is-style-outline"
        className="mb-2 w-full msm:mb-4 msm:w-[calc(50%_-_4px)] xmd:ml-0"
      >
        <a
          id="sweet"
          href="#sweet"
          data-class="wp-block-button__link has-text-color has-orange-color active"
          className="bg-white text-[#D56638] border-2 border-solid border-[#D56638] rounded-[3px] text-[14px] font-bold tracking-[0.035em] py-4 px-8 lowercase shadow-none cursor-pointer inline-block text-center break-words box-border a-transition w-full leading-[1.1] target:text-white target:bg-[#D56638] hover:no-underline hover:bg-[#D56638] hover:text-white xmd:text-[17px]"
          data-category-id="10"
        >
          Sweet (dessert)
        </a>
      </div>
      <div
        data-class="wp-block-button is-style-outline"
        className="mb-2 w-full msm:ml-2 msm:mb-4 msm:w-[calc(50%_-_4px)]"
      >
        <a
          id="entree"
          href="#entree"
          data-class="wp-block-button__link has-text-color has-orange-color active"
          className="bg-white text-[#003811] border-2 border-solid border-[#003811] rounded-[3px] text-[14px] font-bold tracking-[0.035em] py-4 px-8 lowercase shadow-none cursor-pointer inline-block text-center break-words box-border a-transition w-full leading-[1.1] target:text-white target:bg-[#003811] hover:no-underline hover:bg-[#003811] hover:text-white xmd:text-[17px]"
          data-category-id="10"
        >
          Entree
        </a>
      </div>
      <div
        data-class="wp-block-button is-style-outline"
        className="mb-2 w-full msm:mb-4 msm:w-[calc(50%_-_4px)] xmd:ml-2"
      >
        <a
          id="snacks"
          href="#snacks"
          data-class="wp-block-button__link has-text-color has-orange-color active"
          className="bg-white text-[#F74639] border-2 border-solid border-[#F74639] rounded-[3px] text-[14px] font-bold tracking-[0.035em] py-4 px-8 lowercase shadow-none cursor-pointer inline-block text-center break-words box-border a-transition w-full leading-[1.1] target:text-white target:bg-[#F74639] hover:no-underline hover:bg-[#F74639] hover:text-white xmd:text-[17px]"
          data-category-id="10"
        >
          Snacks
        </a>
      </div>
      <div
        data-class="wp-block-button is-style-outline"
        className="mb-2 w-full msm:ml-2 msm:mb-4 msm:w-[calc(50%_-_4px)] xmd:ml-2"
      >
        <a
          id="help"
          href="#help"
          data-class="wp-block-button__link has-text-color has-orange-color active"
          className="bg-white text-[#2A2B2A] border-2 border-solid border-[#2A2B2A] rounded-[3px] text-[14px] font-bold tracking-[0.035em] py-4 px-8 lowercase shadow-none cursor-pointer inline-block text-center break-words box-border a-transition w-full leading-[1.1] target:text-white target:bg-[#2A2B2A] hover:no-underline hover:bg-[#2A2B2A] hover:text-white xmd:text-[17px]"
          data-category-id="10"
        >
          Helpful How-tos
        </a>
      </div>
    </div>
  );
}
