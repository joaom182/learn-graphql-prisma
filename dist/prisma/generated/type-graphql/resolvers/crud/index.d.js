"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resolversActions = require("./resolvers-actions.index");

Object.keys(_resolversActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _resolversActions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _resolversActions[key];
    }
  });
});

var _resolversCrud = require("./resolvers-crud.index");

Object.keys(_resolversCrud).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _resolversCrud[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _resolversCrud[key];
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