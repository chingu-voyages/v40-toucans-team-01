export default function SubscribeWrapper({ children }) {
  return (
    <div
      data-class="subscribe-section"
      className="pt-10 pb-0 px-0 bg-[#FBF8F3] xmd:pt-[60px]"
    >
      <div
        data-class="wrap"
        className="max-w-[1200px] px-4 my-0 mx-auto after:content-[''] after:table after:clear-both"
      >
        {children}
      </div>
    </div>
  );
}
