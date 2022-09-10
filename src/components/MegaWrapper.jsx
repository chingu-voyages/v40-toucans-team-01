export default function MegaWrapper({ children }) {
  return (
    <div
      data-class="mega"
      className="bg-[#FBF8F3] relative py-10 px-0 md:py-[60px] md:px-0"
    >
      <div
        data-class="wrap"
        className="max-w-[1200px] px-[16px] mx-auto my-0 after:content-[''] after:table after:clear-both"
      >
        {children}
      </div>
    </div>
  );
}
