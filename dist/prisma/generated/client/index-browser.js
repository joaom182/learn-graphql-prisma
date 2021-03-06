"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const {
  Decimal
} = require("./runtime/index-browser");

const Prisma = {};
exports.Prisma = Prisma;
/**
 * Prisma Client JS version: 3.0.1
 * Query Engine version: 2452cc6313d52b8b9a96999ac0e974d0aedf88db
 */

Prisma.prismaVersion = {
  client: "3.0.1",
  engine: "2452cc6313d52b8b9a96999ac0e974d0aedf88db"
};

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};

Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};

Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};

Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};

Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};

Prisma.Decimal = Decimal;
/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};

Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};

Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};

Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};

Prisma.validator = () => val => val;
/**
 * Shorthand utilities for JSON filtering
 */


Prisma.DbNull = 'DbNull';
Prisma.JsonNull = 'JsonNull';
Prisma.AnyNull = 'AnyNull';
/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

function makeEnum(x) {
  return x;
}

exports.Prisma.PostScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  title: 'title',
  content: 'content',
  published: 'published',
  authorId: 'authorId'
});
exports.Prisma.ProfileScalarFieldEnum = makeEnum({
  id: 'id',
  bio: 'bio',
  userId: 'userId'
});
exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  name: 'name',
  password: 'password'
});
exports.Prisma.QuestionScalarFieldEnum = makeEnum({
  id: 'id',
  content: 'content'
});
exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});
exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.Prisma.ModelName = makeEnum({
  Post: 'Post',
  Profile: 'Profile',
  User: 'User',
  Question: 'Question'
});
/**
 * Create the Client
 */

class PrismaClient {
  constructor() {
    throw new Error(`PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
  }

}

exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);