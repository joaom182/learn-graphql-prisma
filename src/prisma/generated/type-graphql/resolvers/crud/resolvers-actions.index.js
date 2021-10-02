"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUserResolver = exports.AggregateUserResolver = exports.UpsertUserResolver = exports.UpdateManyUserResolver = exports.DeleteManyUserResolver = exports.UpdateUserResolver = exports.DeleteUserResolver = exports.CreateManyUserResolver = exports.CreateUserResolver = exports.FindManyUserResolver = exports.FindFirstUserResolver = exports.FindUniqueUserResolver = exports.GroupByQuestionResolver = exports.AggregateQuestionResolver = exports.UpsertQuestionResolver = exports.UpdateManyQuestionResolver = exports.DeleteManyQuestionResolver = exports.UpdateQuestionResolver = exports.DeleteQuestionResolver = exports.CreateManyQuestionResolver = exports.CreateQuestionResolver = exports.FindManyQuestionResolver = exports.FindFirstQuestionResolver = exports.FindUniqueQuestionResolver = exports.GroupByProfileResolver = exports.AggregateProfileResolver = exports.UpsertProfileResolver = exports.UpdateManyProfileResolver = exports.DeleteManyProfileResolver = exports.UpdateProfileResolver = exports.DeleteProfileResolver = exports.CreateManyProfileResolver = exports.CreateProfileResolver = exports.FindManyProfileResolver = exports.FindFirstProfileResolver = exports.FindUniqueProfileResolver = exports.GroupByPostResolver = exports.AggregatePostResolver = exports.UpsertPostResolver = exports.UpdateManyPostResolver = exports.DeleteManyPostResolver = exports.UpdatePostResolver = exports.DeletePostResolver = exports.CreateManyPostResolver = exports.CreatePostResolver = exports.FindManyPostResolver = exports.FindFirstPostResolver = exports.FindUniquePostResolver = void 0;
var FindUniquePostResolver_1 = require("./Post/FindUniquePostResolver");
Object.defineProperty(exports, "FindUniquePostResolver", { enumerable: true, get: function () { return FindUniquePostResolver_1.FindUniquePostResolver; } });
var FindFirstPostResolver_1 = require("./Post/FindFirstPostResolver");
Object.defineProperty(exports, "FindFirstPostResolver", { enumerable: true, get: function () { return FindFirstPostResolver_1.FindFirstPostResolver; } });
var FindManyPostResolver_1 = require("./Post/FindManyPostResolver");
Object.defineProperty(exports, "FindManyPostResolver", { enumerable: true, get: function () { return FindManyPostResolver_1.FindManyPostResolver; } });
var CreatePostResolver_1 = require("./Post/CreatePostResolver");
Object.defineProperty(exports, "CreatePostResolver", { enumerable: true, get: function () { return CreatePostResolver_1.CreatePostResolver; } });
var CreateManyPostResolver_1 = require("./Post/CreateManyPostResolver");
Object.defineProperty(exports, "CreateManyPostResolver", { enumerable: true, get: function () { return CreateManyPostResolver_1.CreateManyPostResolver; } });
var DeletePostResolver_1 = require("./Post/DeletePostResolver");
Object.defineProperty(exports, "DeletePostResolver", { enumerable: true, get: function () { return DeletePostResolver_1.DeletePostResolver; } });
var UpdatePostResolver_1 = require("./Post/UpdatePostResolver");
Object.defineProperty(exports, "UpdatePostResolver", { enumerable: true, get: function () { return UpdatePostResolver_1.UpdatePostResolver; } });
var DeleteManyPostResolver_1 = require("./Post/DeleteManyPostResolver");
Object.defineProperty(exports, "DeleteManyPostResolver", { enumerable: true, get: function () { return DeleteManyPostResolver_1.DeleteManyPostResolver; } });
var UpdateManyPostResolver_1 = require("./Post/UpdateManyPostResolver");
Object.defineProperty(exports, "UpdateManyPostResolver", { enumerable: true, get: function () { return UpdateManyPostResolver_1.UpdateManyPostResolver; } });
var UpsertPostResolver_1 = require("./Post/UpsertPostResolver");
Object.defineProperty(exports, "UpsertPostResolver", { enumerable: true, get: function () { return UpsertPostResolver_1.UpsertPostResolver; } });
var AggregatePostResolver_1 = require("./Post/AggregatePostResolver");
Object.defineProperty(exports, "AggregatePostResolver", { enumerable: true, get: function () { return AggregatePostResolver_1.AggregatePostResolver; } });
var GroupByPostResolver_1 = require("./Post/GroupByPostResolver");
Object.defineProperty(exports, "GroupByPostResolver", { enumerable: true, get: function () { return GroupByPostResolver_1.GroupByPostResolver; } });
var FindUniqueProfileResolver_1 = require("./Profile/FindUniqueProfileResolver");
Object.defineProperty(exports, "FindUniqueProfileResolver", { enumerable: true, get: function () { return FindUniqueProfileResolver_1.FindUniqueProfileResolver; } });
var FindFirstProfileResolver_1 = require("./Profile/FindFirstProfileResolver");
Object.defineProperty(exports, "FindFirstProfileResolver", { enumerable: true, get: function () { return FindFirstProfileResolver_1.FindFirstProfileResolver; } });
var FindManyProfileResolver_1 = require("./Profile/FindManyProfileResolver");
Object.defineProperty(exports, "FindManyProfileResolver", { enumerable: true, get: function () { return FindManyProfileResolver_1.FindManyProfileResolver; } });
var CreateProfileResolver_1 = require("./Profile/CreateProfileResolver");
Object.defineProperty(exports, "CreateProfileResolver", { enumerable: true, get: function () { return CreateProfileResolver_1.CreateProfileResolver; } });
var CreateManyProfileResolver_1 = require("./Profile/CreateManyProfileResolver");
Object.defineProperty(exports, "CreateManyProfileResolver", { enumerable: true, get: function () { return CreateManyProfileResolver_1.CreateManyProfileResolver; } });
var DeleteProfileResolver_1 = require("./Profile/DeleteProfileResolver");
Object.defineProperty(exports, "DeleteProfileResolver", { enumerable: true, get: function () { return DeleteProfileResolver_1.DeleteProfileResolver; } });
var UpdateProfileResolver_1 = require("./Profile/UpdateProfileResolver");
Object.defineProperty(exports, "UpdateProfileResolver", { enumerable: true, get: function () { return UpdateProfileResolver_1.UpdateProfileResolver; } });
var DeleteManyProfileResolver_1 = require("./Profile/DeleteManyProfileResolver");
Object.defineProperty(exports, "DeleteManyProfileResolver", { enumerable: true, get: function () { return DeleteManyProfileResolver_1.DeleteManyProfileResolver; } });
var UpdateManyProfileResolver_1 = require("./Profile/UpdateManyProfileResolver");
Object.defineProperty(exports, "UpdateManyProfileResolver", { enumerable: true, get: function () { return UpdateManyProfileResolver_1.UpdateManyProfileResolver; } });
var UpsertProfileResolver_1 = require("./Profile/UpsertProfileResolver");
Object.defineProperty(exports, "UpsertProfileResolver", { enumerable: true, get: function () { return UpsertProfileResolver_1.UpsertProfileResolver; } });
var AggregateProfileResolver_1 = require("./Profile/AggregateProfileResolver");
Object.defineProperty(exports, "AggregateProfileResolver", { enumerable: true, get: function () { return AggregateProfileResolver_1.AggregateProfileResolver; } });
var GroupByProfileResolver_1 = require("./Profile/GroupByProfileResolver");
Object.defineProperty(exports, "GroupByProfileResolver", { enumerable: true, get: function () { return GroupByProfileResolver_1.GroupByProfileResolver; } });
var FindUniqueQuestionResolver_1 = require("./Question/FindUniqueQuestionResolver");
Object.defineProperty(exports, "FindUniqueQuestionResolver", { enumerable: true, get: function () { return FindUniqueQuestionResolver_1.FindUniqueQuestionResolver; } });
var FindFirstQuestionResolver_1 = require("./Question/FindFirstQuestionResolver");
Object.defineProperty(exports, "FindFirstQuestionResolver", { enumerable: true, get: function () { return FindFirstQuestionResolver_1.FindFirstQuestionResolver; } });
var FindManyQuestionResolver_1 = require("./Question/FindManyQuestionResolver");
Object.defineProperty(exports, "FindManyQuestionResolver", { enumerable: true, get: function () { return FindManyQuestionResolver_1.FindManyQuestionResolver; } });
var CreateQuestionResolver_1 = require("./Question/CreateQuestionResolver");
Object.defineProperty(exports, "CreateQuestionResolver", { enumerable: true, get: function () { return CreateQuestionResolver_1.CreateQuestionResolver; } });
var CreateManyQuestionResolver_1 = require("./Question/CreateManyQuestionResolver");
Object.defineProperty(exports, "CreateManyQuestionResolver", { enumerable: true, get: function () { return CreateManyQuestionResolver_1.CreateManyQuestionResolver; } });
var DeleteQuestionResolver_1 = require("./Question/DeleteQuestionResolver");
Object.defineProperty(exports, "DeleteQuestionResolver", { enumerable: true, get: function () { return DeleteQuestionResolver_1.DeleteQuestionResolver; } });
var UpdateQuestionResolver_1 = require("./Question/UpdateQuestionResolver");
Object.defineProperty(exports, "UpdateQuestionResolver", { enumerable: true, get: function () { return UpdateQuestionResolver_1.UpdateQuestionResolver; } });
var DeleteManyQuestionResolver_1 = require("./Question/DeleteManyQuestionResolver");
Object.defineProperty(exports, "DeleteManyQuestionResolver", { enumerable: true, get: function () { return DeleteManyQuestionResolver_1.DeleteManyQuestionResolver; } });
var UpdateManyQuestionResolver_1 = require("./Question/UpdateManyQuestionResolver");
Object.defineProperty(exports, "UpdateManyQuestionResolver", { enumerable: true, get: function () { return UpdateManyQuestionResolver_1.UpdateManyQuestionResolver; } });
var UpsertQuestionResolver_1 = require("./Question/UpsertQuestionResolver");
Object.defineProperty(exports, "UpsertQuestionResolver", { enumerable: true, get: function () { return UpsertQuestionResolver_1.UpsertQuestionResolver; } });
var AggregateQuestionResolver_1 = require("./Question/AggregateQuestionResolver");
Object.defineProperty(exports, "AggregateQuestionResolver", { enumerable: true, get: function () { return AggregateQuestionResolver_1.AggregateQuestionResolver; } });
var GroupByQuestionResolver_1 = require("./Question/GroupByQuestionResolver");
Object.defineProperty(exports, "GroupByQuestionResolver", { enumerable: true, get: function () { return GroupByQuestionResolver_1.GroupByQuestionResolver; } });
var FindUniqueUserResolver_1 = require("./User/FindUniqueUserResolver");
Object.defineProperty(exports, "FindUniqueUserResolver", { enumerable: true, get: function () { return FindUniqueUserResolver_1.FindUniqueUserResolver; } });
var FindFirstUserResolver_1 = require("./User/FindFirstUserResolver");
Object.defineProperty(exports, "FindFirstUserResolver", { enumerable: true, get: function () { return FindFirstUserResolver_1.FindFirstUserResolver; } });
var FindManyUserResolver_1 = require("./User/FindManyUserResolver");
Object.defineProperty(exports, "FindManyUserResolver", { enumerable: true, get: function () { return FindManyUserResolver_1.FindManyUserResolver; } });
var CreateUserResolver_1 = require("./User/CreateUserResolver");
Object.defineProperty(exports, "CreateUserResolver", { enumerable: true, get: function () { return CreateUserResolver_1.CreateUserResolver; } });
var CreateManyUserResolver_1 = require("./User/CreateManyUserResolver");
Object.defineProperty(exports, "CreateManyUserResolver", { enumerable: true, get: function () { return CreateManyUserResolver_1.CreateManyUserResolver; } });
var DeleteUserResolver_1 = require("./User/DeleteUserResolver");
Object.defineProperty(exports, "DeleteUserResolver", { enumerable: true, get: function () { return DeleteUserResolver_1.DeleteUserResolver; } });
var UpdateUserResolver_1 = require("./User/UpdateUserResolver");
Object.defineProperty(exports, "UpdateUserResolver", { enumerable: true, get: function () { return UpdateUserResolver_1.UpdateUserResolver; } });
var DeleteManyUserResolver_1 = require("./User/DeleteManyUserResolver");
Object.defineProperty(exports, "DeleteManyUserResolver", { enumerable: true, get: function () { return DeleteManyUserResolver_1.DeleteManyUserResolver; } });
var UpdateManyUserResolver_1 = require("./User/UpdateManyUserResolver");
Object.defineProperty(exports, "UpdateManyUserResolver", { enumerable: true, get: function () { return UpdateManyUserResolver_1.UpdateManyUserResolver; } });
var UpsertUserResolver_1 = require("./User/UpsertUserResolver");
Object.defineProperty(exports, "UpsertUserResolver", { enumerable: true, get: function () { return UpsertUserResolver_1.UpsertUserResolver; } });
var AggregateUserResolver_1 = require("./User/AggregateUserResolver");
Object.defineProperty(exports, "AggregateUserResolver", { enumerable: true, get: function () { return AggregateUserResolver_1.AggregateUserResolver; } });
var GroupByUserResolver_1 = require("./User/GroupByUserResolver");
Object.defineProperty(exports, "GroupByUserResolver", { enumerable: true, get: function () { return GroupByUserResolver_1.GroupByUserResolver; } });
