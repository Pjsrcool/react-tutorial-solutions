"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Board = _interopRequireDefault(require("./Board"));

require("../index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Game = /*#__PURE__*/function (_React$Component) {
  _inherits(Game, _React$Component);

  var _super = _createSuper(Game);

  function Game() {
    var _this;

    _classCallCheck(this, Game);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "initialize", function () {
      return {
        history: [{
          squares: Array(9).fill(null),
          location: {
            col: 0,
            row: 0
          },
          active: false,
          moveNumber: 0
        }],
        xIsNext: true,
        stepNumber: 0,
        toggle: false
      };
    });

    _defineProperty(_assertThisInitialized(_this), "state", _this.initialize());

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      _this.setState(_this.initialize());
    });

    _defineProperty(_assertThisInitialized(_this), "jumpTo", function (step) {
      var history = _this.state.history;
      history.forEach(function (item) {
        item.active = false;
      });
      history[step].active = true;

      _this.setState({
        history: history,
        stepNumber: step,
        xIsNext: step % 2 === 0
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (i) {
      /**
       * If we jumped to some previous step, and then make
       * a new move from that point, we throw away all "future"
       * history that will now become irrelevant.
       *
       * slice(startingPoint, endPoint)
       *
       * startingPoint - Array index from where the "slicing" starts.
       * endPoint - All array indices less than endPoint will be included in "slicing"
       */
      var history = _this.state.history.slice(0, _this.state.stepNumber + 1);

      var current = history[history.length - 1];
      var squares = current.squares.slice();
      var columns = 3;
      /**
       * Calculate location of square when clicked
       */

      var col = Math.floor(i % columns) + 1;
      var row = Math.floor(i / columns) + 1;

      if (_this.calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = _this.state.xIsNext ? "X" : "O";
      /**
       * concat() method does not mutate the Array
       * unlike Array.push().
       */

      _this.setState(function (prevState) {
        return {
          history: history.concat([{
            squares: squares,
            location: {
              col: col,
              row: row
            },
            active: false,
            moveNumber: history.length
          }]),
          xIsNext: !prevState.xIsNext,
          stepNumber: history.length
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleMoves", function () {
      var toggle = !_this.state.toggle;

      _this.setState({
        toggle: toggle
      });
    });

    _defineProperty(_assertThisInitialized(_this), "calculateWinner", function (squares) {
      var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
      var result = {
        status: "",
        win: {}
      };

      for (var i = 0; i < lines.length; i++) {
        var _lines$i = _slicedToArray(lines[i], 3),
            a = _lines$i[0],
            b = _lines$i[1],
            c = _lines$i[2];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          result = {
            status: "win",
            win: {
              player: squares[a],
              squares: [a, b, c]
            }
          };
          return result;
        }
      }

      var tempSq = squares.filter(function (item) {
        return item === null;
      });

      if (tempSq.length === 0) {
        result = {
          status: "draw",
          win: {}
        };
        return result;
      }

      return null;
    });

    return _this;
  }

  _createClass(Game, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var history = this.state.history;
      var current = history[this.state.stepNumber];
      var result = this.calculateWinner(current.squares);
      var gameStatus = result && result.status ? result.status : null;
      var moves = history.map(function (move, index) {
        var desc = index ? "Go to move #" + index : "Go to game start";
        var active = "";

        if (move.active) {
          active = "active";
        } else {
          active = "normal";
        }

        return /*#__PURE__*/_react.default.createElement("li", {
          key: index
        }, /*#__PURE__*/_react.default.createElement("button", {
          className: active,
          key: "".concat(move.location.col, "_").concat(move.location.row),
          onClick: function onClick() {
            return _this2.jumpTo(index);
          }
        }, "".concat(desc, " (").concat(move.location.col, ", ").concat(move.location.row, ")")));
      });
      /**
       * If this.state.toggle is "true", sort in
       * "decending order" and vice versa.
       */

      moves.sort(function (a, b) {
        if (_this2.state.toggle) {
          return b.key - a.key;
        } else {
          return a.key - b.key;
        }
      });
      var status;

      if (gameStatus === "win") {
        status = "Winner: ".concat(result.win.player);
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "game"
      },
      /** If there is a draw, hide the game board and show 
       "Play again" button */
      gameStatus === "draw" ? /*#__PURE__*/_react.default.createElement("div", {
        className: "draw"
      }, /*#__PURE__*/_react.default.createElement("h2", null, "Draw!"), /*#__PURE__*/_react.default.createElement("button", {
        onClick: function onClick() {
          return _this2.reset();
        }
      }, "Play again")) :
      /*#__PURE__*/

      /** Otherwise, show the game board */
      _react.default.createElement("div", {
        className: "game-board"
      }, /*#__PURE__*/_react.default.createElement(_Board.default, {
        squares: current.squares,
        winningSquares: gameStatus === "win" ? result.win.squares : [],
        onClick: function onClick(i, col, row) {
          return _this2.handleClick(i, col, row);
        }
      }),
      /** Depending upon the state of the game, either show 
       "Play again" button or "Reset game" button */
      gameStatus === "win" ? /*#__PURE__*/_react.default.createElement("div", {
        className: "win"
      }, /*#__PURE__*/_react.default.createElement("h2", null, "\"".concat(result.win.player, "\" is winner!")), /*#__PURE__*/_react.default.createElement("button", {
        onClick: function onClick() {
          return _this2.reset();
        }
      }, "Play again")) : /*#__PURE__*/_react.default.createElement("div", {
        className: "reset"
      }, /*#__PURE__*/_react.default.createElement("button", {
        onClick: function onClick() {
          return _this2.reset();
        }
      }, "Reset game"))), /*#__PURE__*/_react.default.createElement("div", {
        className: "game-info"
      }, /*#__PURE__*/_react.default.createElement("div", null, status),
      /** Show the toggle button only if there are two or more moves to sort */
      history.length > 1 ? /*#__PURE__*/_react.default.createElement("button", {
        onClick: function onClick() {
          return _this2.toggleMoves();
        }
      }, "Toggle moves") : "", /*#__PURE__*/_react.default.createElement("ol", null, moves)));
    }
  }]);

  return Game;
}(_react.default.Component);

var _default = Game;
exports.default = _default;