import fetch from "isomorphic-fetch";

const getNews = (page) => {
  let currentPage = page && parseInt(page) ? page : 0;
  return fetch(
    `https://hn.algolia.com/api/v1/search_by_date?page=${currentPage}&tags=story`
  ).then((res) => res.json());
};

export default getNews;
