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

var __param = void 0 && (void 0).__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpsertQuestionResolver = void 0;

const TypeGraphQL = __importStar(require("type-graphql"));

const graphql_fields_1 = __importDefault(require("graphql-fields"));

const UpsertQuestionArgs_1 = require("./args/UpsertQuestionArgs");

const Question_1 = require("../../../models/Question");

const helpers_1 = require("../../../helpers");

let UpsertQuestionResolver = class UpsertQuestionResolver {
  async upsertQuestion(ctx, info, args) {
    const {
      _count
    } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
    return (0, helpers_1.getPrismaFromContext)(ctx).question.upsert({ ...args,
      ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))
    });
  }

};

__decorate([TypeGraphQL.Mutation(_returns => Question_1.Question, {
  nullable: false
}), __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object, UpsertQuestionArgs_1.UpsertQuestionArgs]), __metadata("design:returntype", Promise)], UpsertQuestionResolver.prototype, "upsertQuestion", null);

UpsertQuestionResolver = __decorate([TypeGraphQL.Resolver(_of => Question_1.Question)], UpsertQuestionResolver);
exports.UpsertQuestionResolver = UpsertQuestionResolver;