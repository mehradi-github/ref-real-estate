import React, { Fragment } from "react";
import { Banner, Cards, Discount, Luxury, Navbar } from "./features/sections";

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
