"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _d3Selection = require("d3-selection");

var _d3Transition = require("d3-transition");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Line = /*#__PURE__*/function (_React$Component) {
  _inherits(Line, _React$Component);

  var _super = _createSuper(Line);

  function Line() {
    var _this;

    _classCallCheck(this, Line);

    _this = _super.call(this);
    _this.ref = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  _createClass(Line, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var node = this.ref.current;
      var _this$props = this.props,
          data = _this$props.data,
          lineGenerator = _this$props.lineGenerator;
      var initialData = data.map(function (d) {
        return {
          name: d.id,
          value: 0
        };
      });
      (0, _d3Selection.select)(node).append("path").datum(initialData).attr("id", "line").attr("stroke", "black").attr("stroke-width", 2).attr("fill", "none").attr("d", lineGenerator);
      this.updateChart();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateChart();
    }
  }, {
    key: "updateChart",
    value: function updateChart() {
      var _this$props2 = this.props,
          lineGenerator = _this$props2.lineGenerator,
          data = _this$props2.data;
      var t = (0, _d3Transition.transition)().duration(1000);
      var line = (0, _d3Selection.select)("#line");
      line.datum(data).transition(t).attr("d", lineGenerator);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: "line-group",
        ref: this.ref
      });
    }
  }]);

  return Line;
}(_react["default"].Component);

var _default = Line;
exports["default"] = _default;