# Installing GraphQL Apollo Server

```
yarn add apollo-server graphql
```

# Initializing Apollo Server

app.ts
```ts
import { ApolloServer } from 'apollo-server';

const app = new ApolloServer({
  typeDefs: [],
  resolvers: {},
});

export default app;
```

server.ts
```ts
import app from './app';
const port = process.env.PORT || 5002;

app
  .listen({ port })
  .then(() => console.log(`Server is running on port :${port}`));
```

# Installing Prisma

```bash
yarn add prisma -D
yarn add pg @prisma/client
```


# Configuring

Make sure these configuration are on your `tsconfig.json`
```json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}
```

# Initializing a prisma project
```bash
npx prisma init
```

> This command created a new directory called prisma which contains a file named schema.prisma and a .env file in the root of the project. schema.prisma contains the Prisma schema with your database connection and the Prisma Client generator. .env is a dotenv file for defining environment variables (used for your database connection).


# Setting up the database connection
Edit your `prisma/schema.prisma` file:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Add the connection string to  your `.env` file:
```env
DATABASE_URL="postgresql://<USER>:<PASSWORD>@localhost:5432/<DB_NAME>?schema=public"
```

# Running migrations

```bash
npx prisma migrate dev --name init
```


# Integration tests

Install Jest dependencies
```bash
yarn add jest-environment-node jest ts-jest @types/jest -D
```

# Initializing Jest

```
yarn jest --init
```

# Add these configurations to jest.config.ts

```js
import { compilerOptions } from './tsconfig.json';
import { pathsToModuleNameMapper } from 'ts-jest/utils';

{
  ...otherConfigs,
  preset: 'ts-jest',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>'
  })
}
```


Execute migrations on your `jest-environment-node` file using `execSync` lib.
```typescript
const { execSync } = require('child_process');
const prismaCli = './node_modules/.bin/prisma';

execSync(`${prismaCli} migrate dev`);
```

You can load your test environment variables on jest-environment-file using the lib `dotenv`
```typescript
require('dotenv').config({
  path: '.env.test',
});
```

You can overwrite environment variables this way:
```typescript
this.global.process.env.DATABASE_URL = process.env.DATABASE_URL = 'NEW_VALUE';
```

Invoke the jest environment file before you execute your tests adding a comment block on the top of your test file
```typescript
/**
 * @jest-environment ./src/configs/jest-environment
 */

import app from '~/app';

describe('User resolvers', () => {
  it('should query all users', async () => {
    const response = await app.executeOperation({
      query: `
        query GetAllUsers {
          users {
            id
            age
            email
            name
          }
        }
      `,
    });
    expect(response.data?.users).toBeTruthy();
    expect(response.errors).toBeUndefined();
  });
});
```

# Tooling

## Transpiling with Babel

Install Babel plugins as dev dependencies to transpile the code
```
yarn add @babel/plugin-transform-typescript babel-plugin-transform-typescript-metadata @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties @babel/preset-typescript -D
```

Make sure that your `babel.config.js` includes the following configuration:
```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
          targets: {
            node: 'current',
          },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-transform-typescript'],
    ['babel-plugin-transform-typescript-metadata'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties'],
  ],
  ignore: ['**/*.spec.ts'],
};
```

## Eslint with GraphQL

Install `eslint-plugin-graphql`
```
yarn add eslint-plugin-graphql -D
```

Change configuration of your .eslintrc.json
```ts
module.exports = {
  rules: {
    "graphql/template-strings": ['error', {
      env: 'apollo',
      // Import your schema JSON here
      schemaJson: require('./schema.json'),
    }]
  },
  plugins: [
    'graphql'
  ]
}
```

# Tips
- Install [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma) extension on your VSCode

# Useful links
- [Modularizing your GraphQL schema code](https://www.apollographql.com/blog/backend/schema-design/modularizing-your-graphql-schema-code/)
- [apollo-tooling](https://github.com/apollographql/apollo-tooling)
- [Prisma Docs](https://www.prisma.io/docs/)
- [Prisma Studio](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/next-steps-typescript-postgres/#explore-the-data-in-prisma-studio)