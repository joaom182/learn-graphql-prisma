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

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserCountAggregate = void 0;

const TypeGraphQL = __importStar(require("type-graphql"));

let UserCountAggregate = class UserCountAggregate {};

__decorate([TypeGraphQL.Field(_type => TypeGraphQL.Int, {
  nullable: false
}), __metadata("design:type", Number)], UserCountAggregate.prototype, "id", void 0);

__decorate([TypeGraphQL.Field(_type => TypeGraphQL.Int, {
  nullable: false
}), __metadata("design:type", Number)], UserCountAggregate.prototype, "email", void 0);

__decorate([TypeGraphQL.Field(_type => TypeGraphQL.Int, {
  nullable: false
}), __metadata("design:type", Number)], UserCountAggregate.prototype, "name", void 0);

__decorate([TypeGraphQL.Field(_type => TypeGraphQL.Int, {
  nullable: false
}), __metadata("design:type", Number)], UserCountAggregate.prototype, "_all", void 0);

UserCountAggregate = __decorate([TypeGraphQL.ObjectType({
  isAbstract: true
})], UserCountAggregate);
exports.UserCountAggregate = UserCountAggregate;