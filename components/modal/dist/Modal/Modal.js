"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _MediaQueries = _interopRequireDefault(require("../utils/MediaQueries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Modal = function Modal(_ref) {
  var children = _ref.children,
      closeCb = _ref.closeCb,
      maskColor = _ref.maskColor,
      show = _ref.show,
      theme = _ref.theme,
      themeBody = _ref.themeBody,
      themeClose = _ref.themeClose,
      title = _ref.title,
      width = _ref.width;

  var _useState = (0, _react.useState)((0, _MediaQueries["default"])()),
      _useState2 = _slicedToArray(_useState, 2),
      device = _useState2[0],
      deviceSetter = _useState2[1];

  (0, _react.useEffect)(function () {
    if (show === true) {
      window.document.getElementsByTagName('html')[0].className += ' nwc--noscroll';
    } else {
      window.document.getElementsByTagName('html')[0].className -= ' nwc--noscroll';
    }
  }, [show]);
  if (show !== true) return false;
  var modalBody = {
    marginTop: 15,
    position: 'fixed',
    zIndex: 99999,
    maxHeight: '95%',
    overflow: 'scroll',
    textAlign: 'left',
    left: device === 'xs' || device === 'sm' ? '3%' : "".concat((100 - width) / 2, "%"),
    top: 0
  };
  var modalClose = {
    "float": 'right',
    width: 40,
    height: 40,
    lineHeight: '18px',
    marginTop: -7
  };
  var modalMask = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: maskColor,
    zIndex: 9999
  };
  return /*#__PURE__*/_react["default"].createElement("aside", {
    "data-test": "component-modal",
    id: "nwc--modal",
    className: theme
  }, /*#__PURE__*/_react["default"].createElement("section", {
    id: "nwc--modal-body",
    className: themeBody,
    style: _objectSpread({}, modalBody, {
      width: device === 'xs' || device === 'sm' ? '94%' : "".concat(width, "%")
    })
  }, (title !== null || closeCb !== null) && /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return closeCb();
    },
    style: modalClose,
    className: themeClose
  }, "\xD7"), /*#__PURE__*/_react["default"].createElement("span", {
    "data-test": "component-modal-title"
  }, title)), /*#__PURE__*/_react["default"].createElement("br", null), children, /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement("aside", {
    id: "nwc--modal-mask",
    style: modalMask,
    onClick: function onClick() {
      if (closeCb !== null) closeCb();
    }
  }));
};

Modal.defaultProps = {
  closeCb: null,
  maskColor: 'rgba(0,0,0,0.7)',
  show: false,
  theme: null,
  themeBody: 'bg--light shadow--lg radius--sm padding--md',
  themeClose: 'font--cta border--none padding--none font--24 radius--lg',
  title: null,
  width: 80
};
Modal.propTypes = {
  children: _propTypes.PropTypes.object.isRequired,
  closeCb: _propTypes.PropTypes.func,
  maskColor: _propTypes.PropTypes.string,
  show: _propTypes.PropTypes.bool,
  theme: _propTypes.PropTypes.string,
  themeBody: _propTypes.PropTypes.string,
  themeClose: _propTypes.PropTypes.string,
  title: _propTypes.PropTypes.string,
  width: _propTypes.PropTypes.number
};
var _default = Modal;
/**
 * @property {object} children - Vadlid JSX object that you want displayed in the modal
 * @property {func} closeCb - A callback to run when the close button or the modal mask is clicked
 * @property {string} maskColor - The color of the alpha mask, in rgba format (will be black if none supplied)
 * @property  {bool} show - If the modal should be shown or not
 * @property {string} theme - Classes to be applied to the wrapper of the modal
 * @property {string} themeBody - Classes to be applied to the body of the modal
 * @property {string} themeClose - Classes to be applied to the close button of the modal
 * @property {string} title - The title displayed on the modal
 * @property {number} width - Width, in percent, of the modal, mobile will also 94% unless you override with css
 */

exports["default"] = _default;

//# sourceMappingURL=Modal.js.map