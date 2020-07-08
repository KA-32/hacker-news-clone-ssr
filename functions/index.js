"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrApp = void 0;

var functions = _interopRequireWildcard(require("firebase-functions"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _express = _interopRequireDefault(require("express"));

var _App = _interopRequireDefault(require("./src/App"));

var _getNews = _interopRequireDefault(require("./src/getNews"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])();

var getHtml = function getHtml(html) {
  return "<!DOCTYPE html>\n <html lang=\"en\">\n   <head>\n     <meta charset=\"utf-8\" />\n     <link rel=\"icon\" href=\"%PUBLIC_URL%/favicon.ico\" />\n     <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n     <meta name=\"theme-color\" content=\"#000000\" />\n     <meta\n       name=\"description\"\n       content=\"Web site created using create-react-app\"\n     />\n     <link rel=\"apple-touch-icon\" href=\"%PUBLIC_URL%/logo192.png\" />\n     \n     <link rel=\"manifest\" href=\"%PUBLIC_URL%/manifest.json\" />\n     <title>Hacker News</title>\n   </head>\n   <body>\n     <noscript>You need to enable JavaScript to run this app.</noscript>\n     <div id=\"root\">".concat(html, "</div>\n     <script type=\"text/javaScript\" src=\"bundle.js\"></script>\n   </body>\n </html>\n ");
};

app.get('/', function (req, res) {
  console.log('root');
});
app.get("**", function (req, res) {
  (0, _getNews["default"])(0).then(function (news) {
    var html = (0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_App["default"], {
      news: news.hits
    }));
    var finalHtml = getHtml(html);
    res.set('Cache-Control', 'public, max-age=0, s-maxage=0, no-cache');
    res.send(finalHtml);
  });
}); //cloud function.

var ssrApp = functions.https.onRequest(app);
exports.ssrApp = ssrApp;