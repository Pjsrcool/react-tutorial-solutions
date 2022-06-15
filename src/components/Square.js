"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Square = function Square(props) {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: props.highlightWinSquares,
    onClick: props.updateStateOnClick
  }, props.value);
};

var _default = Square;
exports.default = _default;