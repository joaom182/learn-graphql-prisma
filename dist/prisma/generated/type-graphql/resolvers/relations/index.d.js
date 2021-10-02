"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resolvers = require("./resolvers.index");

Object.keys(_resolvers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _resolvers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _resolvers[key];
    }
  });
});

var _args = require("./args.index");

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