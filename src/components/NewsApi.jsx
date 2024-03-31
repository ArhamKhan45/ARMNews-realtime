import React from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const NewsApi = ({ category }) => {
  // console.log(category);
  const { data, error, isLoading } = useSWR(
    `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
      import.meta.env.VITE_NEWS_API_KEY
    }`,
    fetcher
  );

  return { data, error };
};

export default NewsApi;
