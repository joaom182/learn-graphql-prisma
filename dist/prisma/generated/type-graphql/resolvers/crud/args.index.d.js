"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _args = require("./Post/args");

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

var _args2 = require("./Profile/args");

Object.keys(_args2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _args2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _args2[key];
    }
  });
});

var _args3 = require("./Question/args");

Object.keys(_args3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _args3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _args3[key];
    }
  });
});

var _args4 = require("./User/args");

Object.keys(_args4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _args4[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _args4[key];
    }
  });
});