"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = process.env.PORT || 5002;
var _default = {
  init: async () => {
    (await (0, _app.default)()).listen({
      port
    }).then(() => console.log(`Server is running on port :${port}`));
  }
};
exports.default = _default;