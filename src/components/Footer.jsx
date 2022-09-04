import React from "react";
function Footer() {
  return (
    <footer className="text-center bg-orange-50 text-gray-800">
      <div className="container mx-auto pt-10">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="py-3 md:py-0 px-4 text-xl">
            <a className="" href="#">
              Recipes
            </a>
          </div>
          <div className="py-3 md:py-0 px-4 text-xl">
            <a className="" href="#">
              Cookbook
            </a>
          </div>
          <div className="py-3 md:py-0 px-4 text-xl">
            <a className="" href="#">
              Shop
            </a>
          </div>

          <div className="py-3 md:py-0 px-4 text-xl">
            <a className="" href="#">
              Jobs
            </a>
          </div>
          <div className="py-3 md:py-0 px-4 text-xl">
            <a className="" href="#">
              About
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-center">
        
          <div className="py-3 md:py-0 px-4">
            <a className="" href="#">
            ©MINIMALISTBAKER.COM 
            </a>
          </div>

          <div className="py-3 md:py-0 px-4">
            <a className="" href="#">
              PRIVACY POLICY
            </a>
          </div>
          <div className="py-3 md:py-0 px-4">
            <a className="" href="#">
              TERMS
            </a>
          </div>
        </div>
        </div>

      <div className="text-center text-gray-500 bg-zinc-50 p-4">
        AN ELITE CAFEMEDIA FOOD PUBLISHER
      </div>

    </footer>
  );
}

export default Footer;
