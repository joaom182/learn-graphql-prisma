import {
  PostCrudResolver,
  PostRelationsResolver,
} from '~prisma/generated/type-graphql';

export const resolvers = [PostCrudResolver, PostRelationsResolver] as const;
