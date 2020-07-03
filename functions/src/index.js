"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _getNews = _interopRequireDefault(require("../src/getNews"));

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _getNews["default"])(0).then(function (news) {
  (0, _reactDom.hydrate)( /*#__PURE__*/_react["default"].createElement(_App["default"], {
    news: news.hits
  }), document.getElementById("#root"));
});