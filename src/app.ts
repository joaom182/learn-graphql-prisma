import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import * as path from 'path';
import { buildSchema } from 'type-graphql';
import { resolvers } from '~prisma/generated/type-graphql';

const prisma = new PrismaClient();

async function app() {
  const schema = await buildSchema({
    resolvers,
    validate: false,
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });

  return new ApolloServer({
    schema,
    context: () => ({ prisma }),
  });
}

export default app;
