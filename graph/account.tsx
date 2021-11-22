import { extendType, nonNull, objectType, stringArg } from "nexus";
import prisma from "../lib/prisma";
import crypto from "crypto";
import { Account as PrismaAccount } from ".prisma/client";

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
    t.field("createAccount", {
      type: "Account",
      args: {
        username: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: (_, { username, email, password }, ctx) => {
        const salt = crypto.randomBytes(16).toString("hex");
        const passwordHash = crypto
          .pbkdf2Sync(password, salt, 1000, 64, "sha512")
          .toString("hex");

        return prisma.account.create({
          data: {
            username,
            email,
            password: passwordHash,
            salt,
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
        return prisma.account.findUnique({
          where: { email: String(args.email) },
        });
      },
    });
  },
});

export function validatePassword(user: PrismaAccount, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, "sha512")
    .toString("hex");

  return user.password === inputHash;
}

export const findAccount = async (username: string) => {
  const user = await prisma.account.findFirst({
    where: {
      username: {
        equals: username,
      },
    },
  });

  return user;
};

export const logIn = extendType({
  type: "Mutation",
  definition(t) {
    t.field("logIn", {
      type: "Account",
      args: {
        username: stringArg(),
        password: nonNull(stringArg()),
      },
      resolve: async (_, { username, password }, ctx) => {
        const user = await findAccount(username);

        if (validatePassword(user, password)) {
          return user;
        }

        throw new Error("Invalid");
      },
    });
  },
});
