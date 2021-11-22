import { ApolloServer } from "apollo-server-micro";
import { NextApiHandler } from "next";
import { makeSchema } from "nexus";
import path from "path";
import cors from "micro-cors";
import * as GraphTypes from "../../graph";
import { getLoginSession } from "../../lib/auth/auth";
import cookies from "../../lib/auth/cookie";

export const schema = makeSchema({
  types: [GraphTypes],
  outputs: {
    typegen: path.join(process.cwd(), "generated/nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated/schema.graphql"),
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

async function isAuthenticated(req) {
  try {
    return await getLoginSession(req);
  } catch (error) {
    return null;
  }
}

async function context(ctx) {
  return {
    // expose the cookie helper in the GraphQL context object
    cookie: ctx.res.cookie,
    // allow queries and mutations to look for an `isMe` boolean in the context object
    user: await isAuthenticated(ctx.req),
  };
}

const apolloServer = new ApolloServer({ schema, context });

let apolloServerHandler: NextApiHandler;

async function getApolloServerHandler() {
  if (!apolloServerHandler) {
    await apolloServer.start();

    apolloServerHandler = apolloServer.createHandler({
      path: "/api",
    });
  }

  return apolloServerHandler;
}

const handler: NextApiHandler = async (req, res) => {
  const apolloServerHandler = await getApolloServerHandler();

  if (req.method === "OPTIONS") {
    res.end();
    return;
  }

  return apolloServerHandler(req, res);
};

export default cors()(cookies(handler));
