import React, { Fragment } from "react";
import Banner from "./features/banner/Banner";
import Cards from "./features/cards/Cards";
import Luxury from "./features/luxury/Luxury";
import Navbar from "./features/navbar/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <Cards />
      <Luxury />
    </Fragment>
  );
}

export default App;
