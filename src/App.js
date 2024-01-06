import React from "react";
import Header from "./pages/Header";
import "swiper/css";

import "./App.css";

import Banner from "./pages/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/Main";
const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Main />
    </>
  );
};

export default App;
