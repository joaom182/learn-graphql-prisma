"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("reflect-metadata");

require("./configs/envs");

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_server.default.init();