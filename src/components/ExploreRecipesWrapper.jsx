export default function ExploreRecipesWrapper({ children }) {
  return (
    <div data-class="featured-categories" className="py-10 px-0 md:py-[50px]">
      <div
        data-class="wrap"
        className="max-w-[1200px] my-0 mx-auto px-4 after:content-[''] after:table after:clear-both"
      >
        {children}
      </div>
    </div>
  );
}
