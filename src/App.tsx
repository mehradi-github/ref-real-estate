import React, { Fragment } from "react";
import Banner from "./features/banner/Banner";
import Navbar from "./features/navbar/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <main className="mt-10 px-4 md:mt-16">
        <Banner />
      </main>
    </Fragment>
  );
}

export default App;
