"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServer = require("apollo-server");

var _client = require("@prisma/client");

var path = _interopRequireWildcard(require("path"));

var _typeGraphql = require("type-graphql");

var _resolvers = require("./modules/posts/resolvers");

var _resolvers2 = require("./modules/users/resolvers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const prisma = new _client.PrismaClient();

async function app() {
  const schema = await (0, _typeGraphql.buildSchema)({
    resolvers: [..._resolvers2.resolvers, ..._resolvers.resolvers],
    validate: false,
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  });
  return new _apolloServer.ApolloServer({
    schema,
    context: () => ({
      prisma
    })
  });
}

var _default = app;
exports.default = _default;