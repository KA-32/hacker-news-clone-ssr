import React from "react";
import { hydrate } from "react-dom";

import getNews from "../src/getNews";

import App from "./App";

getNews(0).then((news) => {
  hydrate(<App news={news.hits} />, document.getElementById("#root"));
});
