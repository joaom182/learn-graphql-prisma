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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyArgsTypesEnhanceMap = exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyResolversEnhanceMap = void 0;

const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));

const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));

const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));

const models = __importStar(require("./models"));

const outputTypes = __importStar(require("./resolvers/outputs"));

const inputTypes = __importStar(require("./resolvers/inputs"));

const argsTypes = __importStar(require("./resolvers/crud/args.index"));

const crudResolversMap = {
  Post: crudResolvers.PostCrudResolver,
  Profile: crudResolvers.ProfileCrudResolver,
  User: crudResolvers.UserCrudResolver,
  Question: crudResolvers.QuestionCrudResolver
};
const relationResolversMap = {
  Post: relationResolvers.PostRelationsResolver,
  Profile: relationResolvers.ProfileRelationsResolver,
  User: relationResolvers.UserRelationsResolver
};
const actionResolversMap = {
  Post: {
    post: actionResolvers.FindUniquePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    posts: actionResolvers.FindManyPostResolver,
    createPost: actionResolvers.CreatePostResolver,
    createManyPost: actionResolvers.CreateManyPostResolver,
    deletePost: actionResolvers.DeletePostResolver,
    updatePost: actionResolvers.UpdatePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    upsertPost: actionResolvers.UpsertPostResolver,
    aggregatePost: actionResolvers.AggregatePostResolver,
    groupByPost: actionResolvers.GroupByPostResolver
  },
  Profile: {
    profile: actionResolvers.FindUniqueProfileResolver,
    findFirstProfile: actionResolvers.FindFirstProfileResolver,
    profiles: actionResolvers.FindManyProfileResolver,
    createProfile: actionResolvers.CreateProfileResolver,
    createManyProfile: actionResolvers.CreateManyProfileResolver,
    deleteProfile: actionResolvers.DeleteProfileResolver,
    updateProfile: actionResolvers.UpdateProfileResolver,
    deleteManyProfile: actionResolvers.DeleteManyProfileResolver,
    updateManyProfile: actionResolvers.UpdateManyProfileResolver,
    upsertProfile: actionResolvers.UpsertProfileResolver,
    aggregateProfile: actionResolvers.AggregateProfileResolver,
    groupByProfile: actionResolvers.GroupByProfileResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Question: {
    question: actionResolvers.FindUniqueQuestionResolver,
    findFirstQuestion: actionResolvers.FindFirstQuestionResolver,
    questions: actionResolvers.FindManyQuestionResolver,
    createQuestion: actionResolvers.CreateQuestionResolver,
    createManyQuestion: actionResolvers.CreateManyQuestionResolver,
    deleteQuestion: actionResolvers.DeleteQuestionResolver,
    updateQuestion: actionResolvers.UpdateQuestionResolver,
    deleteManyQuestion: actionResolvers.DeleteManyQuestionResolver,
    updateManyQuestion: actionResolvers.UpdateManyQuestionResolver,
    upsertQuestion: actionResolvers.UpsertQuestionResolver,
    aggregateQuestion: actionResolvers.AggregateQuestionResolver,
    groupByQuestion: actionResolvers.GroupByQuestionResolver
  }
};
const resolversInfo = {
  Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
  Profile: ["profile", "findFirstProfile", "profiles", "createProfile", "createManyProfile", "deleteProfile", "updateProfile", "deleteManyProfile", "updateManyProfile", "upsertProfile", "aggregateProfile", "groupByProfile"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Question: ["question", "findFirstQuestion", "questions", "createQuestion", "createManyQuestion", "deleteQuestion", "updateQuestion", "deleteManyQuestion", "updateManyQuestion", "upsertQuestion", "aggregateQuestion", "groupByQuestion"]
};
const relationResolversInfo = {
  Post: ["author"],
  Profile: ["user"],
  User: ["posts", "profile"]
};
const modelsInfo = {
  Post: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
  Profile: ["id", "bio", "userId"],
  User: ["id", "email", "name"],
  Question: ["id", "content"]
};
const inputsInfo = {
  PostWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "author", "authorId"],
  PostOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "author", "authorId"],
  PostWhereUniqueInput: ["id"],
  PostOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId", "_count", "_avg", "_max", "_min", "_sum"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
  ProfileWhereInput: ["AND", "OR", "NOT", "id", "bio", "user", "userId"],
  ProfileOrderByWithRelationInput: ["id", "bio", "user", "userId"],
  ProfileWhereUniqueInput: ["id", "userId"],
  ProfileOrderByWithAggregationInput: ["id", "bio", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  ProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "bio", "userId"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "password", "posts", "profile"],
  UserOrderByWithRelationInput: ["id", "email", "name", "password", "posts", "profile"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "email", "name", "password", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name", "password"],
  QuestionWhereInput: ["AND", "OR", "NOT", "id", "content"],
  QuestionOrderByWithRelationInput: ["id", "content"],
  QuestionWhereUniqueInput: ["id"],
  QuestionOrderByWithAggregationInput: ["id", "content", "_count", "_avg", "_max", "_min", "_sum"],
  QuestionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "content"],
  PostCreateInput: ["createdAt", "updatedAt", "title", "content", "published", "author"],
  PostUpdateInput: ["createdAt", "updatedAt", "title", "content", "published", "author"],
  PostCreateManyInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
  PostUpdateManyMutationInput: ["createdAt", "updatedAt", "title", "content", "published"],
  ProfileCreateInput: ["bio", "user"],
  ProfileUpdateInput: ["bio", "user"],
  ProfileCreateManyInput: ["id", "bio", "userId"],
  ProfileUpdateManyMutationInput: ["bio"],
  UserCreateInput: ["email", "name", "password", "posts", "profile"],
  UserUpdateInput: ["email", "name", "password", "posts", "profile"],
  UserCreateManyInput: ["id", "email", "name", "password"],
  UserUpdateManyMutationInput: ["email", "name", "password"],
  QuestionCreateInput: ["content"],
  QuestionUpdateInput: ["content"],
  QuestionCreateManyInput: ["id", "content"],
  QuestionUpdateManyMutationInput: ["content"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  UserRelationFilter: ["is", "isNot"],
  PostCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
  PostAvgOrderByAggregateInput: ["id", "authorId"],
  PostMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
  PostMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
  PostSumOrderByAggregateInput: ["id", "authorId"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  ProfileCountOrderByAggregateInput: ["id", "bio", "userId"],
  ProfileAvgOrderByAggregateInput: ["id", "userId"],
  ProfileMaxOrderByAggregateInput: ["id", "bio", "userId"],
  ProfileMinOrderByAggregateInput: ["id", "bio", "userId"],
  ProfileSumOrderByAggregateInput: ["id", "userId"],
  PostListRelationFilter: ["every", "some", "none"],
  ProfileRelationFilter: ["is", "isNot"],
  PostOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "name", "password"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "email", "name", "password"],
  UserMinOrderByAggregateInput: ["id", "email", "name", "password"],
  UserSumOrderByAggregateInput: ["id"],
  QuestionCountOrderByAggregateInput: ["id", "content"],
  QuestionAvgOrderByAggregateInput: ["id"],
  QuestionMaxOrderByAggregateInput: ["id", "content"],
  QuestionMinOrderByAggregateInput: ["id", "content"],
  QuestionSumOrderByAggregateInput: ["id"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutProfileInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  PostUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProfileUpdateOneWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  UserCreateWithoutPostsInput: ["email", "name", "password", "profile"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["email", "name", "password", "profile"],
  UserCreateWithoutProfileInput: ["email", "name", "password", "posts"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["email", "name", "password", "posts"],
  PostCreateWithoutAuthorInput: ["createdAt", "updatedAt", "title", "content", "published"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  ProfileCreateWithoutUserInput: ["bio"],
  ProfileCreateOrConnectWithoutUserInput: ["where", "create"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
  ProfileUpsertWithoutUserInput: ["update", "create"],
  ProfileUpdateWithoutUserInput: ["bio"],
  PostCreateManyAuthorInput: ["id", "createdAt", "updatedAt", "title", "content", "published"],
  PostUpdateWithoutAuthorInput: ["createdAt", "updatedAt", "title", "content", "published"]
};
const outputsInfo = {
  AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
  PostGroupBy: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProfile: ["_count", "_avg", "_sum", "_min", "_max"],
  ProfileGroupBy: ["id", "bio", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "name", "password", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateQuestion: ["_count", "_avg", "_sum", "_min", "_max"],
  QuestionGroupBy: ["id", "content", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  PostCountAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId", "_all"],
  PostAvgAggregate: ["id", "authorId"],
  PostSumAggregate: ["id", "authorId"],
  PostMinAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
  PostMaxAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
  ProfileCountAggregate: ["id", "bio", "userId", "_all"],
  ProfileAvgAggregate: ["id", "userId"],
  ProfileSumAggregate: ["id", "userId"],
  ProfileMinAggregate: ["id", "bio", "userId"],
  ProfileMaxAggregate: ["id", "bio", "userId"],
  UserCount: ["posts"],
  UserCountAggregate: ["id", "email", "name", "password", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "email", "name", "password"],
  UserMaxAggregate: ["id", "email", "name", "password"],
  QuestionCountAggregate: ["id", "content", "_all"],
  QuestionAvgAggregate: ["id"],
  QuestionSumAggregate: ["id"],
  QuestionMinAggregate: ["id", "content"],
  QuestionMaxAggregate: ["id", "content"]
};
const argsInfo = {
  FindUniquePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePostArgs: ["data"],
  CreateManyPostArgs: ["data", "skipDuplicates"],
  DeletePostArgs: ["where"],
  UpdatePostArgs: ["data", "where"],
  DeleteManyPostArgs: ["where"],
  UpdateManyPostArgs: ["data", "where"],
  UpsertPostArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueProfileArgs: ["where"],
  FindFirstProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProfileArgs: ["data"],
  CreateManyProfileArgs: ["data", "skipDuplicates"],
  DeleteProfileArgs: ["where"],
  UpdateProfileArgs: ["data", "where"],
  DeleteManyProfileArgs: ["where"],
  UpdateManyProfileArgs: ["data", "where"],
  UpsertProfileArgs: ["where", "create", "update"],
  AggregateProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueQuestionArgs: ["where"],
  FindFirstQuestionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyQuestionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateQuestionArgs: ["data"],
  CreateManyQuestionArgs: ["data", "skipDuplicates"],
  DeleteQuestionArgs: ["where"],
  UpdateQuestionArgs: ["data", "where"],
  DeleteManyQuestionArgs: ["where"],
  UpdateManyQuestionArgs: ["data", "where"],
  UpsertQuestionArgs: ["where", "create", "update"],
  AggregateQuestionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByQuestionArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

function applyResolversEnhanceMap(resolversEnhanceMap) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName];
    const actionResolversConfig = actionResolversMap[modelName];

    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName];

      for (const resolverActionName of resolverActionNames) {
        const actionTarget = actionResolversConfig[resolverActionName].prototype;

        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
          allActionsDecorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
        }
      }
    }

    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");

    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[resolverActionName];
      const actionTarget = actionResolversConfig[resolverActionName].prototype;

      for (const decorator of decorators) {
        decorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
        decorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
      }
    }
  }
}

exports.applyResolversEnhanceMap = applyResolversEnhanceMap;

function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];

    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName];

      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
        }
      }
    }

    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");

    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[relationResolverActionName];

      for (const decorator of decorators) {
        decorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
      }
    }
  }
}

exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;

function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }

  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;

      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }

    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");

    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName];

      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

function applyModelsEnhanceMap(modelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey;
    const modelConfig = modelsEnhanceMap[modelName];
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
  }
}

exports.applyModelsEnhanceMap = applyModelsEnhanceMap;

function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey;
    const typeConfig = outputTypesEnhanceMap[outputTypeName];
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
  }
}

exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;

function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey;
    const typeConfig = inputTypesEnhanceMap[inputTypeName];
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
  }
}

exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;

function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey;
    const typeConfig = argsTypesEnhanceMap[argsTypeName];
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
  }
}

exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;