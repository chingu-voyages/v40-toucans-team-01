import { Disclosure, Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../assets/logo.png";
import magnifyingGlassSearch from "../assets/magnifyingGlassSearch.png";

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
          <div className="container mx-auto  border-b-2 border-black max-w-screen-lg">
            <div className=" flex items-center justify-around h-16">
              <div className="flex items-center  sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="items-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-black",
                          "px-3 py-2 rounded-md text-sm font-medium"
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
                <img src={logo} style={{ height: "5vh" }} />
              </div>
              <div className="flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="flex items-center">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {rightNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-black",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="sm:visible md:invisible lg:invisible">
                    <img
                      src={magnifyingGlassSearch}
                      style={{ width: "4vw", height: "3vh" }}
                    />
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
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
