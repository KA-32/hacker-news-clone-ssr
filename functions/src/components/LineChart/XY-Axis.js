"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Axis = _interopRequireDefault(require("./Axis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var XYAxis = function XYAxis(_ref) {
  var xScale = _ref.xScale,
      yScale = _ref.yScale,
      height = _ref.height;
  var xSettings = {
    scale: xScale,
    orient: "bottom",
    transform: "translate(0, ".concat(height, ")")
  };
  var ySettings = {
    scale: yScale,
    orient: "left",
    transform: "translate(0, 0)",
    ticks: 6
  };
  return /*#__PURE__*/_react["default"].createElement("g", {
    className: "axis-group"
  }, /*#__PURE__*/_react["default"].createElement(_Axis["default"], xSettings), /*#__PURE__*/_react["default"].createElement(_Axis["default"], ySettings));
};

var _default = XYAxis;
exports["default"] = _default;