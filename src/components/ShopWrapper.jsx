export default function ShopWrapper({ children }) {
  return (
    <div
      data-class="shop-feature"
      className="bg-[url(https://minimalistbaker.com/wp-content/uploads/2020/04/shop-bg.jpg)] pt-[133px] pb-80px px-0 bg-cover bg-center md:pt-[173px] md:pb-[120px] md:px-0 xmd:pt-[213px] xmd:pb-[160px] xmd:px-0"
    >
      <div
        data-class="wrap"
        className="max-w-[1200px] my-0 mx-auto px-4 after:content-[''] after:table after:clear-both"
      >
        {children}
      </div>
    </div>
  );
}
