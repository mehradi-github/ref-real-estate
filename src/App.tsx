import React, { Fragment } from "react";
import Banner from "./features/banner/Banner";
import Cards from "./features/cards/Cards";
import Navbar from "./features/navbar/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <Cards />
    </Fragment>
  );
}

export default App;
