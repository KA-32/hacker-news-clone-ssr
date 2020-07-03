import React, { useEffect, useState } from "react";

import NewsFeed from "./components/NewsFeed/NewsFeed";
import LineChart from "./components/LineChart/LineChart";

// import loaderGif from "./assets/loader.gif";

// import "./App.css";

function App({ news }) {
  const [newsFeed, setNewsFeed] = useState(news);
  const [chartData, setChartData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [upvotes, setUpvote] = useState({});
  const [isLoaderVisible, setLoaderVisiblity] = useState(false);

  useEffect(() => {
    // getNewsFeed(0);
    let upvotes = localStorage.getItem("upvotes");
    try {
      let parsedJson = JSON.parse(upvotes);
      setUpvote(parsedJson);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getChartValues = () => {
    let chartValues = newsFeed.map((value) => {
      let chartVal = {};
      chartVal.id = value.objectID;
      chartVal.votes =
        upvotes && upvotes[value.objectID] ? upvotes[value.objectID] : 10;
      return chartVal;
    });
    return chartValues;
    // setChartData(chartValues);
  };

  // useEffect(() => {

  // }, [newsFeed, upvotes]);

  const getNewsFeed = (page) => {
    // setLoaderVisiblity(true);
    // const newsFeedResponse = await fetch(
    //   `https://hn.algolia.com/api/v1/search_by_date?page=${page}&tags=story`
    // );
    // if (newsFeedResponse.ok) {
    //   let jsonData = await newsFeedResponse.json();
    //   setLoaderVisiblity(false);
    //   setCurrentPage(page);
    //   setNewsFeed(jsonData.hits);
    // }
    setLoaderVisiblity(false);
    setCurrentPage(0);
    setNewsFeed(news);
  };

  const next = () => {
    getNewsFeed(currentPage + 1);
  };

  const previous = () => {
    if (currentPage > 0) {
      getNewsFeed(currentPage - 1);
    }
  };

  const handleHideBtnClick = (data) => {
    console.log('Handle hide');
    setNewsFeed(data);
  };

  const handleUpvote = (data) => {
    console.log('Handle upvote');
    setUpvote(data);
  };

  return (
    <section className="main">
      <NewsFeed
        upvotes={upvotes}
        data={news}
        next={next}
        previous={previous}
        hideStory={handleHideBtnClick}
        handleUpvote={handleUpvote}
      />
      {isLoaderVisible && (
        <div className="loader">
          <img src={loaderGif} alt="Loading indicator" />
        </div>
      )}
      <LineChart data={getChartValues()} />
    </section>
  );
}

export default App;
