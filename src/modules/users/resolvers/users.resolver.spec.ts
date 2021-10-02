/**
 * @jest-environment ./src/configs/jest-environment
 */
import { gql } from 'apollo-server-core';
import { print } from 'graphql/language/printer';
import app from '~/app';

describe('Users resolvers', () => {
  it('should create a user', async () => {
    const { data } = await (
      await app()
    ).executeOperation({
      query: print(gql`
        mutation {
          createUser(
            data: {
              name: "João Mainka"
              email: "joaomainka1822@gmail.com"
              posts: {
                create: { title: "Hello world!", content: "Sample content" }
              }
              profile: { create: { bio: "I love turtles!" } }
            }
          ) {
            id
            name
            email
            posts {
              id
              title
              content
            }
          }
        }
      `),
    });
    const result = data?.createUser || {};
    expect(data).toHaveProperty('createUser');
    expect(result).toHaveProperty('id');
  });

  it('should query users', async () => {
    const { data } = await (
      await app()
    ).executeOperation({
      query: print(gql`
        query {
          users {
            name
          }
        }
      `),
    });
    const users = data?.users || [];
    expect(data).toHaveProperty('users');
    expect(users).toHaveLength(1);
  });
});
