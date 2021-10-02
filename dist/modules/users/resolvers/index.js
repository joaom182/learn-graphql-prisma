"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _typeGraphql = require("../../../prisma/generated/type-graphql");

const resolvers = [_typeGraphql.UserCrudResolver, _typeGraphql.UserRelationsResolver];
exports.resolvers = resolvers;