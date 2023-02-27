import React, { FC } from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer: FC = () => {
  return (
    <footer className="px-4 pt-40 divide-y">
      <div className="container flex flex-col justify-between mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a href="" className="flex justify-center ">
            <div className="flex w-12 h-12">
              <HomeIcon className="h-8 w-8 mr-2 text-gray-500" />
            </div>
            <span className=" font-semibold text-gray-500 text-2xl">
              Lorem, ipsum.
            </span>
          </a>
        </div>

        <div className=" grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-4 lg:w-2/3">
          <div className="space-y-3">
            <h3 className="text-green-500 uppercase tracking-wider">Product</h3>
            <ul className="space-y-1">
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Integration</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-green-500 uppercase tracking-wider">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Integration</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-green-500 uppercase tracking-wider">
              Developer
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Integration</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-green-500 uppercase tracking-wider">
              Social Media
            </h3>
            <div className="flex justify-start space-x-3">
              <FontAwesomeIcon
                icon={faGithub}
                className={"w-8 h-8 text-gray-500"}
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className={"w-8 h-8 text-gray-500"}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className={"w-8 h-8 text-gray-500"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-green-500 text-center py-6 text-sm">
        &#169; 1986 Company Co. All right reserved.{" "}
      </div>
    </footer>
  );
};
export default Footer;
