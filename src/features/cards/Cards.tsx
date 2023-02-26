import React, { FC, Fragment } from "react";

const card = (id: number) => (
  <div className="rounded shadow-lg ">
    <img
      className="w-full"
      src={`https://picsum.photos/id/${id}/700/500`}
      alt=""
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Lorem, ipsum</div>
      <p className="text-gray-700 ">
        loreEsse ipsum tempor reprehenderit velit Lorem cupidatat. Laborum
        tempor consequat fugiat Lorem labore labore aliquip officia Lorem labore
        proident id mollit aliqua. Ut velit duis sint dolore et velit esse magna
        consectetur cillum deserunt ad irure qui. Non ad consequat dolore
        officia ad tempor ea cupidatat proident magna Lorem excepteur.
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="text-green-300 font-bold text-sm px-3 py-1 mr-2 m-b-2 inline-block">
        $4,500,000
      </span>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        7 Beds
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        5 Baths
      </span>
    </div>
    <div className="px-6 pt-4 pb-10">
      <button className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2">
        View Property
      </button>
    </div>
  </div>
);
const Cards: FC = () => {
  return (
    <Fragment>
      <div className="mt-5 flex justify-center">
        <h2 className="text-3xl text-gray-500 mb-2">Recent Properties</h2>
      </div>
      <div className="grid  sm:grid-cols-1   md:grid-cols-3 p-10 gap-5">
        {[42, 308, 380].map((i) => card(i))}
      </div>
    </Fragment>
  );
};
export default Cards;
