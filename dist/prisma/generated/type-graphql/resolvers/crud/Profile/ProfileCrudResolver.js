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
exports.ProfileCrudResolver = void 0;

const TypeGraphQL = __importStar(require("type-graphql"));

const graphql_fields_1 = __importDefault(require("graphql-fields"));

const AggregateProfileArgs_1 = require("./args/AggregateProfileArgs");

const CreateManyProfileArgs_1 = require("./args/CreateManyProfileArgs");

const CreateProfileArgs_1 = require("./args/CreateProfileArgs");

const DeleteManyProfileArgs_1 = require("./args/DeleteManyProfileArgs");

const DeleteProfileArgs_1 = require("./args/DeleteProfileArgs");

const FindFirstProfileArgs_1 = require("./args/FindFirstProfileArgs");

const FindManyProfileArgs_1 = require("./args/FindManyProfileArgs");

const FindUniqueProfileArgs_1 = require("./args/FindUniqueProfileArgs");

const GroupByProfileArgs_1 = require("./args/GroupByProfileArgs");

const UpdateManyProfileArgs_1 = require("./args/UpdateManyProfileArgs");

const UpdateProfileArgs_1 = require("./args/UpdateProfileArgs");

const UpsertProfileArgs_1 = require("./args/UpsertProfileArgs");

const helpers_1 = require("../../../helpers");

const Profile_1 = require("../../../models/Profile");

const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");

const AggregateProfile_1 = require("../../outputs/AggregateProfile");

const ProfileGroupBy_1 = require("../../outputs/ProfileGroupBy");

let ProfileCrudResolver = class ProfileCrudResolver {
  async profile(ctx, info, args) {
    const {
      _count
    } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
    return (0, helpers_1.getPrismaFromContext)(ctx).profile.findUnique({ ...args,
      ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))
    });
  }

  async findFirstProfile(ctx, info, args) {
    const {
      _count
    } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
    return (0, helpers_1.getPrismaFromContext)(ctx).profile.findFirst({ ...args,
      ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))
    });
  }

  async profiles(ctx, info, args) {
    const {
      _count
    } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
    return (0, helpers_1.getPrismaFromContext)(ctx).profile.findMany({ ...args,
      ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))
    });
  }

  async createProfile(ctx, info, args) {
    const {
      _count
    } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
    return (0, helpers_1.getPrismaFromContext)(ctx).profile.create({ ...args,
      ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))
    });
  }

  async createManyProfile(ctx, info, args) {
    const {
      _count
    } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
    return (0, helpers_1.getPrismaFromContext)(ctx).profile.createMany({ ...args,
      ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))
    });
  }

  async deleteProfile(ctx, info, args) {
    const {
      _count
    } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
    return (0, helpers_1.getPrismaFromContext)(ctx).profile.delete({ ...args,
      ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))
    });
  }

  async updateProfile(ctx, info, args) {
    const {
      _count
    } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
    return (0, helpers_1.getPrismaFromContext)(ctx).profile.update({ ...args,
      ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))
    });
  }

  async deleteManyProfile(ctx, info, args) {
    const {
      _count
    } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
    return (0, helpers_1.getPrismaFromContext)(ctx).profile.deleteMany({ ...args,
      ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))
    });
  }

  async updateManyProfile(ctx, info, args) {
    const {
      _count
    } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
    return (0, helpers_1.getPrismaFromContext)(ctx).profile.updateMany({ ...args,
      ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))
    });
  }

  async upsertProfile(ctx, info, args) {
    const {
      _count
    } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
    return (0, helpers_1.getPrismaFromContext)(ctx).profile.upsert({ ...args,
      ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))
    });
  }

  async aggregateProfile(ctx, info, args) {
    return (0, helpers_1.getPrismaFromContext)(ctx).profile.aggregate({ ...args,
      ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info))
    });
  }

  async groupByProfile(ctx, info, args) {
    const {
      _count,
      _avg,
      _sum,
      _min,
      _max
    } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
    return (0, helpers_1.getPrismaFromContext)(ctx).profile.groupBy({ ...args,
      ...Object.fromEntries(Object.entries({
        _count,
        _avg,
        _sum,
        _min,
        _max
      }).filter(([_, v]) => v != null))
    });
  }

};

__decorate([TypeGraphQL.Query(_returns => Profile_1.Profile, {
  nullable: true
}), __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object, FindUniqueProfileArgs_1.FindUniqueProfileArgs]), __metadata("design:returntype", Promise)], ProfileCrudResolver.prototype, "profile", null);

__decorate([TypeGraphQL.Query(_returns => Profile_1.Profile, {
  nullable: true
}), __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object, FindFirstProfileArgs_1.FindFirstProfileArgs]), __metadata("design:returntype", Promise)], ProfileCrudResolver.prototype, "findFirstProfile", null);

__decorate([TypeGraphQL.Query(_returns => [Profile_1.Profile], {
  nullable: false
}), __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object, FindManyProfileArgs_1.FindManyProfileArgs]), __metadata("design:returntype", Promise)], ProfileCrudResolver.prototype, "profiles", null);

__decorate([TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
  nullable: false
}), __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object, CreateProfileArgs_1.CreateProfileArgs]), __metadata("design:returntype", Promise)], ProfileCrudResolver.prototype, "createProfile", null);

__decorate([TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
  nullable: false
}), __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object, CreateManyProfileArgs_1.CreateManyProfileArgs]), __metadata("design:returntype", Promise)], ProfileCrudResolver.prototype, "createManyProfile", null);

__decorate([TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
  nullable: true
}), __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object, DeleteProfileArgs_1.DeleteProfileArgs]), __metadata("design:returntype", Promise)], ProfileCrudResolver.prototype, "deleteProfile", null);

__decorate([TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
  nullable: true
}), __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object, UpdateProfileArgs_1.UpdateProfileArgs]), __metadata("design:returntype", Promise)], ProfileCrudResolver.prototype, "updateProfile", null);

__decorate([TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
  nullable: false
}), __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object, DeleteManyProfileArgs_1.DeleteManyProfileArgs]), __metadata("design:returntype", Promise)], ProfileCrudResolver.prototype, "deleteManyProfile", null);

__decorate([TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
  nullable: false
}), __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object, UpdateManyProfileArgs_1.UpdateManyProfileArgs]), __metadata("design:returntype", Promise)], ProfileCrudResolver.prototype, "updateManyProfile", null);

__decorate([TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
  nullable: false
}), __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object, UpsertProfileArgs_1.UpsertProfileArgs]), __metadata("design:returntype", Promise)], ProfileCrudResolver.prototype, "upsertProfile", null);

__decorate([TypeGraphQL.Query(_returns => AggregateProfile_1.AggregateProfile, {
  nullable: false
}), __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object, AggregateProfileArgs_1.AggregateProfileArgs]), __metadata("design:returntype", Promise)], ProfileCrudResolver.prototype, "aggregateProfile", null);

__decorate([TypeGraphQL.Query(_returns => [ProfileGroupBy_1.ProfileGroupBy], {
  nullable: false
}), __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object, GroupByProfileArgs_1.GroupByProfileArgs]), __metadata("design:returntype", Promise)], ProfileCrudResolver.prototype, "groupByProfile", null);

ProfileCrudResolver = __decorate([TypeGraphQL.Resolver(_of => Profile_1.Profile)], ProfileCrudResolver);
exports.ProfileCrudResolver = ProfileCrudResolver;