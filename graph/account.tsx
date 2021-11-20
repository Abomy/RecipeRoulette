import { nonNull, objectType, stringArg } from "nexus"
import prisma from "../lib/prisma"

export const Account = objectType({
    name: "Account",
    definition(t) {
      t.string("id")
      t.string("name")
      t.string("email")
    },
  })

  export const Mutation = objectType({
    name: "Mutation",
    definition(t) {
      t.field("signupUser", {
        type: "Account",
        args: {
          username: stringArg(),
          email: nonNull(stringArg()),
          password:nonNull(stringArg())
        },
        resolve: (_, { username, email, password }, ctx) => {
          return prisma.account.create({
            data: {              
              username,
              email,
              password,
            },
          })  
        },
      })    
    },
  })