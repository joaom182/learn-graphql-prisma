"use strict";

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __exportStar = void 0 && (void 0).__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = exports.relationResolvers = exports.crudResolvers = void 0;

const crudResolversImport = __importStar(require("./resolvers/crud/resolvers-crud.index"));

const relationResolversImport = __importStar(require("./resolvers/relations/resolvers.index"));

__exportStar(require("./enums"), exports);

__exportStar(require("./models"), exports);

__exportStar(require("./resolvers/crud"), exports);

__exportStar(require("./resolvers/relations"), exports);

__exportStar(require("./resolvers/inputs"), exports);

__exportStar(require("./resolvers/outputs"), exports);

__exportStar(require("./enhance"), exports);

__exportStar(require("./scalars"), exports);

exports.crudResolvers = Object.values(crudResolversImport);
exports.relationResolvers = Object.values(relationResolversImport);
exports.resolvers = [...exports.crudResolvers, ...exports.relationResolvers];