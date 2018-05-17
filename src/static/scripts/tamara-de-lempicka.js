(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = ({
  list
}) => {
  return React.createElement("div", {
    className: "row",
    id: "Tamara"
  }, React.createElement("div", {
    className: "col-xs-12"
  }, React.createElement("div", {
    id: "images"
  }, list.map(({
    url,
    title
  }, i) => {
    return React.createElement("div", {
      key: i,
      className: `preview-div s s${i}`
    }, React.createElement("img", {
      className: "preview",
      "data-i": i,
      src: url,
      alt: title
    }));
  }))));
};

exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _Tamara = _interopRequireDefault(require("../Components/Tamara.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env browser */

/* global items, ReactDOM */
const {
  hydrate,
  render
} = ReactDOM;
console.log(items);
render(React.createElement(_Tamara.default, {
  list: items
}), document.getElementById('tmr'));

},{"../Components/Tamara.jsx":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvemF2ci9hZGMvYXJ0ZGVjby5iei9zcmMvQ29tcG9uZW50cy9UYW1hcmEuanN4IiwiL1VzZXJzL3phdnIvYWRjL2FydGRlY28uYnovc3JjL3NjcmlwdHMvdGFtYXJhLWRlLWxlbXBpY2thLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztlQ0FlLENBQUM7QUFBRTtBQUFGLENBQUQsS0FBYztBQUMzQixTQUNFO0FBQUssZUFBVSxLQUFmO0FBQXFCLFFBQUc7QUFBeEIsS0FDRTtBQUFLLGVBQVU7QUFBZixLQUNFO0FBQUssUUFBRztBQUFSLEtBQ0csS0FBSyxHQUFMLENBQVMsQ0FBQztBQUFFLE9BQUY7QUFBTztBQUFQLEdBQUQsRUFBaUIsQ0FBakIsS0FBdUI7QUFDL0IsV0FDRTtBQUFLLFdBQUssQ0FBVjtBQUFhLGlCQUFZLGtCQUFpQixDQUFFO0FBQTVDLE9BQ0U7QUFBSyxpQkFBVSxTQUFmO0FBQXlCLGdCQUFRLENBQWpDO0FBQW9DLFdBQUssR0FBekM7QUFBOEMsV0FBSztBQUFuRCxNQURGLENBREY7QUFLRCxHQU5BLENBREgsQ0FERixDQURGLENBREY7QUFlRCxDOzs7Ozs7O0FDYkQ7Ozs7QUFIQTs7QUFDQTtBQUNBLE1BQU07QUFBRSxTQUFGO0FBQVc7QUFBWCxJQUFzQixRQUE1QjtBQUdBLFFBQVEsR0FBUixDQUFZLEtBQVo7QUFFQSxPQUFPLG9CQUFDLGVBQUQ7QUFBUSxRQUFNO0FBQWQsRUFBUCxFQUFnQyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBaEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCAoeyBsaXN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGlkPVwiVGFtYXJhXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiPlxuICAgICAgICA8ZGl2IGlkPVwiaW1hZ2VzXCI+XG4gICAgICAgICAge2xpc3QubWFwKCh7IHVybCwgdGl0bGUgfSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17YHByZXZpZXctZGl2IHMgcyR7aX1gfT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByZXZpZXdcIiBkYXRhLWk9e2l9IHNyYz17dXJsfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG4vKiBnbG9iYWwgaXRlbXMsIFJlYWN0RE9NICovXG5jb25zdCB7IGh5ZHJhdGUsIHJlbmRlciB9ID0gUmVhY3RET01cbmltcG9ydCBUYW1hcmEgZnJvbSAnLi4vQ29tcG9uZW50cy9UYW1hcmEuanN4J1xuXG5jb25zb2xlLmxvZyhpdGVtcylcblxucmVuZGVyKDxUYW1hcmEgbGlzdD17aXRlbXN9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG1yJykpXG4iXX0=
