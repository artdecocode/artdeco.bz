"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (ctx, next) => {
  ctx.setTitle('Hello world');
  ctx.Content = _react.default.createElement("div", null, "Hello World");
  await next();
};

exports.default = _default;