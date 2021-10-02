"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _args = require("./User/args");

Object.keys(_args).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _args[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _args[key];
    }
  });
});