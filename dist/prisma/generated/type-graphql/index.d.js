"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _enums = require("./enums");

Object.keys(_enums).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _enums[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _enums[key];
    }
  });
});

var _models = require("./models");

Object.keys(_models).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _models[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _models[key];
    }
  });
});

var _crud = require("./resolvers/crud");

Object.keys(_crud).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _crud[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _crud[key];
    }
  });
});

var _relations = require("./resolvers/relations");

Object.keys(_relations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _relations[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _relations[key];
    }
  });
});

var _inputs = require("./resolvers/inputs");

Object.keys(_inputs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _inputs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _inputs[key];
    }
  });
});

var _outputs = require("./resolvers/outputs");

Object.keys(_outputs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _outputs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _outputs[key];
    }
  });
});

var _enhance = require("./enhance");

Object.keys(_enhance).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _enhance[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _enhance[key];
    }
  });
});

var _scalars = require("./scalars");

Object.keys(_scalars).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _scalars[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _scalars[key];
    }
  });
});