import React from "react";
import NewsBoard from "./NewsBoard";

function Home({ category, keyword }) {
  return (
    <div>
      <NewsBoard category={category} keyword={keyword} />
    </div>
  );
}

export default Home;
