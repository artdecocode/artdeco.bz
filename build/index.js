"use strict";

var _start = _interopRequireDefault(require("./start"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async () => {
  try {
    const {
      url
    } = await (0, _start.default)();
    console.log(url); // eslint-disable-line no-console
  } catch (err) {
    console.error(err); // eslint-disable-line no-console
  }
})();