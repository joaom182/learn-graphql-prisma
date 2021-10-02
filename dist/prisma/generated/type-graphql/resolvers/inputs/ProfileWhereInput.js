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

var ProfileWhereInput_1;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileWhereInput = void 0;

const TypeGraphQL = __importStar(require("type-graphql"));

const IntFilter_1 = require("../inputs/IntFilter");

const StringNullableFilter_1 = require("../inputs/StringNullableFilter");

const UserRelationFilter_1 = require("../inputs/UserRelationFilter");

let ProfileWhereInput = ProfileWhereInput_1 = class ProfileWhereInput {};

__decorate([TypeGraphQL.Field(_type => [ProfileWhereInput_1], {
  nullable: true
}), __metadata("design:type", Array)], ProfileWhereInput.prototype, "AND", void 0);

__decorate([TypeGraphQL.Field(_type => [ProfileWhereInput_1], {
  nullable: true
}), __metadata("design:type", Array)], ProfileWhereInput.prototype, "OR", void 0);

__decorate([TypeGraphQL.Field(_type => [ProfileWhereInput_1], {
  nullable: true
}), __metadata("design:type", Array)], ProfileWhereInput.prototype, "NOT", void 0);

__decorate([TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
  nullable: true
}), __metadata("design:type", IntFilter_1.IntFilter)], ProfileWhereInput.prototype, "id", void 0);

__decorate([TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
  nullable: true
}), __metadata("design:type", StringNullableFilter_1.StringNullableFilter)], ProfileWhereInput.prototype, "bio", void 0);

__decorate([TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
  nullable: true
}), __metadata("design:type", UserRelationFilter_1.UserRelationFilter)], ProfileWhereInput.prototype, "user", void 0);

__decorate([TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
  nullable: true
}), __metadata("design:type", IntFilter_1.IntFilter)], ProfileWhereInput.prototype, "userId", void 0);

ProfileWhereInput = ProfileWhereInput_1 = __decorate([TypeGraphQL.InputType({
  isAbstract: true
})], ProfileWhereInput);
exports.ProfileWhereInput = ProfileWhereInput;