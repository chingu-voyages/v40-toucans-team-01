export default function CategoryIcons({
  containerClass,
  categoryClass,
  icons,
  children
}) {
  return (
    <div data-class="iconsContainer" className={'flex justify-center ' + containerClass}>
      {icons?.includes('GF') && (
        <a
          className={
            'text-black bg-[#ffded6] hover:bg-[#ffb5a3] category-icon md:category-icon-md ' +
            categoryClass
          }
          href="#"
        >
          GF
        </a>
      )}

      {icons?.includes('VG') && (
        <a
          className={
            'text-white bg-[#f74639] hover:bg-[#f31a0a] category-icon md:category-icon-md ' +
            categoryClass
          }
          href="#"
        >
          VG
        </a>
      )}

      {icons?.includes('V') && (
        <a
          className={
            'text-white bg-[#d56638] hover:bg-[#b45026] category-icon md:category-icon-md ' +
            categoryClass
          }
          href="#"
        >
          V
        </a>
      )}

      {icons?.includes('DF') && (
        <a
          className={
            'text-white bg-[#003811] hover:bg-[#000502] category-icon md:category-icon-md ' +
            categoryClass
          }
          href="#"
        >
          DF
        </a>
      )}

      {icons?.includes('NS') && (
        <a
          className={
            'text-white bg-[#2a2b2a] hover:bg-[#111111] category-icon md:category-icon-md ' +
            categoryClass
          }
          href="#"
        >
          NS
        </a>
      )}
      {children}
    </div>
  );
}
