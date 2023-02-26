import { url } from "inspector";
import React, { FC } from "react";

const Luxury: FC = () => {
  return (
    <div
      className="py-20 h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('https://picsum.photos/id/206/1600/700')`,
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-2">
          loreExcepteur esse amet ea eu laboris.
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">
          Aliqua ipsum esse anim fugiat quis aliqua culpa.
        </h3>
        <button className="text-white uppercase border-2 px-8 py-4 font-bold tracking-wider">
          Explore Locations
        </button>
      </div>
    </div>
  );
};
export default Luxury;
