import React, { FC } from "react";

const Discount: FC = () => {
  return (
    <div
      className="py-20"
      style={{
        background: `linear-gradient(315deg, #D1FAE5 0% , #10B981 74%)`,
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-2">
          loreExcepteur esse amet ea eu laboris.
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">
          Aliqua ipsum esse anim fugiat quis aliqua culpa.
        </h3>
        <button className="bg-white rounded-2xl uppercase border-2 px-8 py-4 font-bold tracking-wider">
          Enquire
        </button>
      </div>
    </div>
  );
};
export default Discount;
