"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserCrudResolver = exports.QuestionCrudResolver = exports.ProfileCrudResolver = exports.PostCrudResolver = void 0;

var PostCrudResolver_1 = require("./Post/PostCrudResolver");

Object.defineProperty(exports, "PostCrudResolver", {
  enumerable: true,
  get: function () {
    return PostCrudResolver_1.PostCrudResolver;
  }
});

var ProfileCrudResolver_1 = require("./Profile/ProfileCrudResolver");

Object.defineProperty(exports, "ProfileCrudResolver", {
  enumerable: true,
  get: function () {
    return ProfileCrudResolver_1.ProfileCrudResolver;
  }
});

var QuestionCrudResolver_1 = require("./Question/QuestionCrudResolver");

Object.defineProperty(exports, "QuestionCrudResolver", {
  enumerable: true,
  get: function () {
    return QuestionCrudResolver_1.QuestionCrudResolver;
  }
});

var UserCrudResolver_1 = require("./User/UserCrudResolver");

Object.defineProperty(exports, "UserCrudResolver", {
  enumerable: true,
  get: function () {
    return UserCrudResolver_1.UserCrudResolver;
  }
});