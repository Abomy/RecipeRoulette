import {
  extendType,
  mutationField,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
import prisma from "../lib/prisma";

export const Account = objectType({
  name: "Account",
  definition(t) {
    t.string("id");
    t.string("username");
    t.string("email");
    t.date("created");
    t.date("last_login");
    t.date("updated");
  },
});

export const signupUser = extendType({
  type: "Mutation",
  definition(t) {
    t.field("signupUser", {
      type: "Account",
      args: {
        username: stringArg(),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: (_, { username, email, password }, ctx) => {
        return prisma.account.create({
          data: {
            username,
            email,
            password,
          },
        });
      },
    });
  },
});

export const getMe = extendType({
  type: "Query",
  definition(t) {
    t.field("getMe", {
      type: "Account",
      args: {
        email: nonNull(stringArg()),
      },
      resolve: (_, args) => {
        console.log(args.email);
        return prisma.account.findUnique({
          where: { email: String(args.email) },
        });
      },
    });
  },
});
