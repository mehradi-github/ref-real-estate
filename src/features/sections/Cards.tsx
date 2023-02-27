import React, { FC, Fragment } from "react";
interface Iprop {
  imageIds: number[];
  isLocation: boolean;
}
const Cards: FC<Iprop> = ({ imageIds, isLocation }) => {
  const card = (id: number, hasFotter: boolean) => (
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
          tempor consequat fugiat Lorem labore labore aliquip officia Lorem
          labore proident id mollit aliqua. Ut velit duis sint dolore et velit
          esse magna consectetur cillum deserunt ad irure qui. Non ad consequat
          dolore officia ad tempor ea cupidatat proident magna Lorem excepteur.
        </p>
      </div>
      {isLocation ? (
        ""
      ) : (
        <Fragment>
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
        </Fragment>
      )}
    </div>
  );
  return (
    <div className="grid  sm:grid-cols-1   md:grid-cols-3 p-10 gap-5">
      {imageIds.map((i) => card(i, isLocation))}
    </div>
  );
};
export default Cards;
