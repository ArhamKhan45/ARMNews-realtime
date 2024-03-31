import React from "react";
import NewsCard from "./NewsCard";
import NewsApi from "./NewsApi";

function NewsBoard({ category, keyword }) {
  // console.log(category);
  const { data } = NewsApi({ category });
  // console.log(data);
  let showdata;

  function showfunction(data) {
    // console.log(data);
    return data.map((item, index) => {
      return (
        <NewsCard
          key={index}
          author={item.author}
          content={item.content}
          title={item.title}
          description={item.description}
          img={item.urlToImage}
          url={item.url}
        />
      );
    });
  }

  if (data && data.status == "error") {
    showdata = (
      <h1>Cannot fetch data. API key has Expired bus kr bhaiya kl aana </h1>
    );
  }
  if (data && data.status == "ok") {
    if (keyword) {
      // filter by keyword
      // console.log("hello");
      const filteredData = data.articles.filter((item) => {
        return item.title.includes(keyword);
      });
      if (filteredData) {
        showdata = showfunction(filteredData);
      }
    } else {
      if (data && data.articles) {
        showdata = showfunction(data.articles);
      }
    }
  }
  return (
    <div className="container-fluid">
      <div className="row mt-2">
        <p className="col-8 text-center  mx-auto fs-5 h-auto fw-bold">
          Latest
          <span className=" bg-danger text-white py-2 px-1 rounded-3 ms-1 d-inline-block">
            News
          </span>
        </p>
      </div>

      <div className="row">{showdata}</div>
    </div>
  );
}

export default NewsBoard;
