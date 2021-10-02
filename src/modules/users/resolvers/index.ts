import {
  UserCrudResolver,
  UserRelationsResolver,
} from '~prisma/generated/type-graphql';

export const resolvers = [UserCrudResolver, UserRelationsResolver] as const;
