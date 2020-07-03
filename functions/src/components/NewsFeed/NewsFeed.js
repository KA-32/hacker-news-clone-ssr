"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import withStyles from "isomorphic-style-loader/withStyles";
// import upvoteIcon from "../../assets/ic-upvote.png";
// import newsFeedCss from "./NewsFeed.css";
var NewsFeed = function NewsFeed(props) {
  var _useState = (0, _react.useState)(props.upvotes),
      _useState2 = _slicedToArray(_useState, 2),
      upvotes = _useState2[0],
      setUpvote = _useState2[1];

  (0, _react.useEffect)(function () {
    setUpvote(props.upvotes);
  }, [props.upvotes]);

  var handleHideBtnClick = function handleHideBtnClick(e) {
    var index;

    var newsFeedData = _toConsumableArray(props.data);

    for (var i = 0; i < props.data.length; i++) {
      if (props.data[i].objectID === e.currentTarget.dataset.id) {
        index = i;
        break;
      }
    }

    if (index || index === 0) {
      newsFeedData.splice(index, 1);
      props.hideStory(newsFeedData);
    }
  };

  var handlePrevClick = function handlePrevClick(e) {
    props.previous();
  };

  var handleNextClick = function handleNextClick(e) {
    props.next();
  };

  var handleUpvote = function handleUpvote(e) {
    var upvotesUpdate = _objectSpread({}, upvotes);

    if (upvotesUpdate[e.currentTarget.dataset.id] || upvotesUpdate[e.currentTarget.dataset.id] === 0) {
      upvotesUpdate[e.currentTarget.dataset.id]++;
    } else {
      //already initialised with 0. So increment by 1.
      upvotesUpdate[e.currentTarget.dataset.id] = 1;
    }

    setUpvote(upvotesUpdate);
    localStorage.setItem("upvotes", JSON.stringify(upvotesUpdate));
    props.handleUpvote(upvotesUpdate); //Store upvotes locally.
  };

  var renderRows = function renderRows() {
    return props.data.map(function (value, index) {
      return value.title && /*#__PURE__*/_react["default"].createElement("tr", {
        key: value.objectID,
        className: "news-feed-data-row"
      }, /*#__PURE__*/_react["default"].createElement("td", {
        className: "news-feed-data-item center"
      }, value.num_comments), /*#__PURE__*/_react["default"].createElement("td", {
        className: "news-feed-data-item center"
      }, upvotes ? !upvotes[value.objectID] || upvotes[value.objectID] === 0 ? 0 : upvotes[value.objectID] : 0), /*#__PURE__*/_react["default"].createElement("td", {
        className: "news-feed-data-item center"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "upvote",
        "data-id": value.objectID,
        onClick: handleUpvote
      })), /*#__PURE__*/_react["default"].createElement("td", {
        className: "news-feed-data-item left-align"
      }, /*#__PURE__*/_react["default"].createElement("h4", {
        className: "news-title"
      }, value.title), /*#__PURE__*/_react["default"].createElement("a", {
        href: value.url,
        className: "news-link"
      }, "(" + (value.url ? value.url : "") + ")"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "news-author"
      }, /*#__PURE__*/_react["default"].createElement("span", null, "By"), /*#__PURE__*/_react["default"].createElement("span", {
        className: "news-author-name"
      }, value.author)), /*#__PURE__*/_react["default"].createElement("span", {
        className: "news-last-updated-ts"
      }, value.created_at), /*#__PURE__*/_react["default"].createElement("button", {
        className: "news-hide",
        "data-id": value.objectID,
        onClick: handleHideBtnClick
      }, "[hide]")));
    });
  };

  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "main-container",
    role: "main"
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "news-feed-table"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
    className: "news-feed-header-row"
  }, /*#__PURE__*/_react["default"].createElement("th", {
    className: "news-feed-header-item fixed-width center"
  }, "Comments"), /*#__PURE__*/_react["default"].createElement("th", {
    className: "news-feed-header-item fixed-width center"
  }, "Vote Count"), /*#__PURE__*/_react["default"].createElement("th", {
    className: "news-feed-header-item fixed-width center"
  }, "Upvote"), /*#__PURE__*/_react["default"].createElement("th", {
    className: "news-feed-header-item left-align"
  }, "News Details"))), /*#__PURE__*/_react["default"].createElement("tbody", null, renderRows())), /*#__PURE__*/_react["default"].createElement("div", {
    className: "btn-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "prev",
    onClick: handlePrevClick
  }, "Previous"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "next",
    onClick: handleNextClick
  }, "Next")));
};

var _default = NewsFeed;
exports["default"] = _default;