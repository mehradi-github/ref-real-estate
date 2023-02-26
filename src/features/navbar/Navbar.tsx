import React, { FC } from "react";

import { HomeIcon } from "@heroicons/react/24/solid";
const Navbar: FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4">
                <HomeIcon className="h-8 w-8" />
                <span className="font-semibold text-gray-500">Real Estate</span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a
                className="py-4 px-2 text-gray-500 font-semibold border-green-500 border-b-4"
                href="#"
              >
                Home
              </a>
              <a
                className="py-4 px-2  text-gray-500 font-semibold hover:text-green-500 transition duration-500  "
                href="#"
              >
                Services
              </a>
              <a
                className="py-4 px-2  text-gray-500 font-semibold hover:text-green-500 transition duration-500  "
                href="#"
              >
                About
              </a>
              <a
                className="py-4 px-2  text-gray-500 font-semibold hover:text-green-500 transition duration-500  "
                href="#"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
