import React, { FC, Fragment } from "react";

const Cards: FC = () => {
  return (
    <Fragment>
      <div className="mt-5 flex justify-center">
        <h2 className="text-3xl text-gray-500 mb-2">Recent Properties</h2>
      </div>

      <div className="">
        <div>
          <img src="https://picsum.photos/700/500" alt="" />
          <div>
            <div>Lorem, ipsum</div>
            <p>
              loreEsse ipsum tempor reprehenderit velit Lorem cupidatat. Laborum
              tempor consequat fugiat Lorem labore labore aliquip officia Lorem
              labore proident id mollit aliqua. Ut velit duis sint dolore et
              velit esse magna consectetur cillum deserunt ad irure qui. Non ad
              consequat dolore officia ad tempor ea cupidatat proident magna
              Lorem excepteur.
            </p>
          </div>
          <div>
            <span>$450,000</span>
          </div>
          <div>
            <span>7 Beds</span>
            <span>5 Baths</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Cards;
