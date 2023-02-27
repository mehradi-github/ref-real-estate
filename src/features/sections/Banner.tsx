import React, { FC } from "react";

const Banner: FC = () => {
  return (
    <main className="mt-10 px-4 md:mt-16">
      <div className="sm:text-center lg:text-left">
        <h1 className=" tracking-tight font-extrabold text-4xl sm:text-5xl">
          <span className="block">Lorem, ipsum.</span>
          <span className="block text-green-500">dolor sit amet.</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 md:text-xl sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 md:mt-5 md:text-6xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          sequi, alias molestias rem explicabo nesciunt quaerat exercitationem
          dolorum accusamus vitae blanditiis, ex eveniet quam mollitia dolorem
          rerum ipsum quis eius.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
          <div className="md:m-2">
            <a
              href="#"
              className="flex w-full justify-center rounded-md bg-green-500 text-white px-8 py-3"
            >
              View Properties
            </a>
          </div>
          <div className="md:m-2">
            <a
              href="#"
              className="flex w-full justify-center rounded-md bg-green-100 text-green-700 px-8 py-3 "
            >
              Explore Locations
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Banner;
