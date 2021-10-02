import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import * as path from 'path';
import { buildSchema } from 'type-graphql';
import { resolvers as postResolvers } from '~modules/posts/resolvers';
import { resolvers as userResolvers } from '~modules/users/resolvers';

const prisma = new PrismaClient();

async function app() {
  const schema = await buildSchema({
    resolvers: [...userResolvers, ...postResolvers],
    validate: false,
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });

  return new ApolloServer({
    schema,
    context: () => ({ prisma }),
  });
}

export default app;
