"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _NewsFeed = _interopRequireDefault(require("./components/NewsFeed/NewsFeed"));

var _LineChart = _interopRequireDefault(require("./components/LineChart/LineChart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import loaderGif from "./assets/loader.gif";
// import "./App.css";
function App(_ref) {
  var news = _ref.news;

  var _useState = (0, _react.useState)(news),
      _useState2 = _slicedToArray(_useState, 2),
      newsFeed = _useState2[0],
      setNewsFeed = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      chartData = _useState4[0],
      setChartData = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      currentPage = _useState6[0],
      setCurrentPage = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      upvotes = _useState8[0],
      setUpvote = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isLoaderVisible = _useState10[0],
      setLoaderVisiblity = _useState10[1];

  (0, _react.useEffect)(function () {
    // getNewsFeed(0);
    var upvotes = localStorage.getItem("upvotes");

    try {
      var parsedJson = JSON.parse(upvotes);
      setUpvote(parsedJson);
    } catch (err) {
      console.log(err);
    }
  }, []);

  var getChartValues = function getChartValues() {
    var chartValues = newsFeed.map(function (value) {
      var chartVal = {};
      chartVal.id = value.objectID;
      chartVal.votes = upvotes && upvotes[value.objectID] ? upvotes[value.objectID] : 10;
      return chartVal;
    });
    return chartValues; // setChartData(chartValues);
  }; // useEffect(() => {
  // }, [newsFeed, upvotes]);


  var getNewsFeed = function getNewsFeed(page) {
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

  var next = function next() {
    getNewsFeed(currentPage + 1);
  };

  var previous = function previous() {
    if (currentPage > 0) {
      getNewsFeed(currentPage - 1);
    }
  };

  var handleHideBtnClick = function handleHideBtnClick(data) {
    console.log('Handle hide');
    setNewsFeed(data);
  };

  var handleUpvote = function handleUpvote(data) {
    console.log('Handle upvote');
    setUpvote(data);
  };

  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "main"
  }, /*#__PURE__*/_react["default"].createElement(_NewsFeed["default"], {
    upvotes: upvotes,
    data: news,
    next: next,
    previous: previous,
    hideStory: handleHideBtnClick,
    handleUpvote: handleUpvote
  }), isLoaderVisible && /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: loaderGif,
    alt: "Loading indicator"
  })), /*#__PURE__*/_react["default"].createElement(_LineChart["default"], {
    data: getChartValues()
  }));
}

var _default = App;
exports["default"] = _default;