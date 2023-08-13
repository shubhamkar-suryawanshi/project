import CarouselComp from "../Components/CarouselComp";
import Editorial from "../Components/Editorial";
import Categories from "../Components/Categories";
import HomeBlogComp from "../Components/HomeBlogComp";
import NewsLetter from "../Components/NewsLetter";
import React from "react";

function Home() {
  return (
    <React.Fragment>
      <CarouselComp />
      <Editorial />
      <Categories />
      <HomeBlogComp />
      <NewsLetter />
    </React.Fragment>
  );
}

export default Home;
