
import express from "express"
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"

// Resolvers
import { PingResolver } from "./resolvers/ping"
import { ProductResolver } from "./resolvers/ProductResolver"
import { ResolverPrueba01 } from './resolvers/resolver-prueba01'

export async function startServer() {

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver, ProductResolver, ResolverPrueba01],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res })
  });

  await server.start()
  server.applyMiddleware({app, path: '/graphql'})

  return app;
}


