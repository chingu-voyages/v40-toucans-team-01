import { Disclosure, Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../assets/logo.png";


const navigation = [
  { name: "All Recipes", href: "#", current: false },
  { name: "Vegan", href: "#", current: false },
  { name: "Gluten-Free", href: "#", current: false },
];

const rightNavigation = [
  { name: "About", href: "#", current: false },
  { name: "Shop", href: "#", current: false },
  { name: "Cookbook", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function navbar() {
  return (
    <Disclosure as="nav" className="bg-white mt-5 ">
      {({ open }) => (
        <>
          <div className="container mx-auto  border-b-2 border-black max-w-screen-xl">
            <div className=" flex items-center justify-around h-40">
              <div className="flex items-center  lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="items-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-10 w-10" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex lg:items-stretch lg:justify-start">
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-black",
                          "px-3 py-2 rounded-md text-lg font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <img src={logo} />
              </div>
              <div className="flex items-center lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                <Menu as="div" className="flex items-center">
                  <div className="hidden lg:block lg:ml-6">
                    <div className="flex space-x-4">
                      {rightNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-black",
                            "px-3 py-2 rounded-md text-lg font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="block lg:invisible">
                    <svg class="svg-icon open" width="30" height="30" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 32"><path d="M28.4501243,12.4 C28.4444806,18.6921406 23.342143,23.7900024 17.05,23.79 C15.5266386,23.8233305 14.0186342,23.4798216 12.66,22.79 L5,30.56 C4.41199697,31.0967002 3.65517844,31.4114519 2.86,31.45 C2.10217663,31.4281398 1.38353748,31.1083454 0.86,30.56 C-0.257531922,29.3984916 -0.257531922,27.5615084 0.86,26.4 L8,19.22 C5.00152809,15.2629568 4.91442496,9.81873792 7.78477557,5.7677983 C10.6551262,1.71685869 15.8203741,-0.0057325508 20.5476637,1.51142193 C25.2749532,3.02857642 28.4730951,7.43527534 28.4501243,12.4 Z M24,12.4 C24,8.57818953 20.9018105,5.48 17.08,5.48 C13.2581895,5.48 10.16,8.57818953 10.16,12.4 C10.16,16.2218104 13.2581896,19.3199999 17.08,19.3199999 C20.9018104,19.3199999 24,16.2218104 24,12.4 L24,12.4 Z"></path></svg>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-rose-100 mt-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? "bg-gray-900 text-white" : "text-black",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {rightNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? "bg-gray-900 text-white" : "text-black",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
