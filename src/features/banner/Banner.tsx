import React, { FC } from "react";

const Banner: FC = () => {
  return (
    <div className="sm:text-center lg:text-left">
      <h1 className=" tracking-tight font-extrabold text-4xl sm:text-5xl">
        <span className="block">Lorem, ipsum.</span>
        <span className="block text-green-500">dolor sit amet.</span>
      </h1>
      <p className="mt-3 text-base text-gray-500 md:text-xl sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 md:mt-5 md:text-6xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores sequi,
        alias molestias rem explicabo nesciunt quaerat exercitationem dolorum
        accusamus vitae blanditiis, ex eveniet quam mollitia dolorem rerum ipsum
        quis eius.
      </p>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Banner;
