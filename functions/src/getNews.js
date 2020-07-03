"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getNews = function getNews(page) {
  var currentPage = page && parseInt(page) ? page : 0;
  return (0, _isomorphicFetch["default"])("https://hn.algolia.com/api/v1/search_by_date?page=".concat(currentPage, "&tags=story")).then(function (res) {
    return res.json();
  });
};

var _default = getNews;
exports["default"] = _default;