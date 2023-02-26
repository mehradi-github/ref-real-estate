import React, { Fragment } from "react";
import Banner from "./features/banner/Banner";
import Cards from "./features/cards/Cards";
import Discount from "./features/luxury/Discount";
import Luxury from "./features/luxury/Luxury";
import Navbar from "./features/navbar/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <Cards imageIds={[42, 308, 380]} isLocation={false} />
      <Luxury />
      <Cards imageIds={[381, 384, 386]} isLocation={true} />
      <Discount />
    </Fragment>
  );
}

export default App;
