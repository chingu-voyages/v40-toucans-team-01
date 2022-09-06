import React from "react";
function Footer() {
  return (
    <footer
      className="text-center text-gray-800"
      style={{ backgroundColor: "#fbf8f3" }}
    >
      <div className="container mx-auto pt-10 justify-evenly items-center max-w-screen-sm pb-5">
        <div className="flex flex-col md:flex-row justify-between pb-5">
          <div >
            <a  href="#">
              Recipes
            </a>
          </div>
          <div >
            <a  href="#">
              Cookbook
            </a>
          </div>
          <div >
            <a  href="#">
              Shop
            </a>
          </div>

          <div >
            <a  href="#">
              Jobs
            </a>
          </div>
          <div >
            <a  href="#">
              About
            </a>
          </div>
        </div>
      

      <div className="container mx-auto justify-center items-center pb-5">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="py-3 md:py-0 px-4 text-sm">
            <a  href="#">
              ©MINIMALISTBAKER.COM
            </a>
          </div>

          <div className="py-3 md:py-0 px-4 text-sm">
            <a  href="#">
              PRIVACY POLICY
            </a>
          </div>
          <div className="py-3 md:py-0 px-4 text-sm">
            <a  href="#">
              TERMS
            </a>
          </div>
        </div>
      </div>
      </div>
      <div className="text-center text-gray-500 bg-zinc-50 p-4 text-sm">
        AN ELITE CAFEMEDIA FOOD PUBLISHER
      </div>
    </footer>
  );
}

export default Footer;
