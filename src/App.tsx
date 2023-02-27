import React, { Fragment } from "react";
import {
  Banner,
  Cards,
  Discount,
  Luxury,
  Navbar,
  Title,
} from "./features/sections";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <Title title="Recent Properties" />
      <Cards imageIds={[42, 308, 380]} isLocation={false} />
      <Luxury />
      <Title title="Locations" />
      <Cards imageIds={[381, 384, 386]} isLocation={true} />
      <Discount />
      <Title title="What clients about us?" />
    </Fragment>
  );
}

export default App;
