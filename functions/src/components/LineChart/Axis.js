"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _d3Selection = require("d3-selection");

var _d3Axis = require("d3-axis");

var _d3Transition = require("d3-transition");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Axis = function Axis(props) {
  var orient = props.orient,
      transform = props.transform;
  var myRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    renderAxis(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var renderAxis = function renderAxis() {
    var scale = props.scale,
        orient = props.orient,
        ticks = props.ticks;
    var node = myRef.current;
    var axis;

    if (orient === "bottom") {
      axis = (0, _d3Axis.axisBottom)(scale);
    }

    if (orient === "left") {
      axis = (0, _d3Axis.axisLeft)(scale).ticks(ticks);
    }

    (0, _d3Selection.select)(node).call(axis);
  };

  (0, _react.useEffect)(function () {
    var scale = props.scale,
        orient = props.orient,
        ticks = props.ticks;
    var t = (0, _d3Transition.transition)().duration(1000);

    if (orient === "bottom") {
      var node = myRef.current;
      var axis = (0, _d3Axis.axisBottom)(scale);
      (0, _d3Selection.select)(node).call(axis);
    }

    if (orient === "left") {
      var _axis = (0, _d3Axis.axisLeft)(scale).ticks(ticks);

      (0, _d3Selection.selectAll)(".".concat(orient)).transition(t).call(_axis);
    }
  }, [props, props.scale, props.orient, props.ticks]);
  return /*#__PURE__*/_react["default"].createElement("g", {
    ref: myRef,
    transform: transform,
    className: "".concat(orient, " axis")
  });
};

var _default = Axis;
exports["default"] = _default;