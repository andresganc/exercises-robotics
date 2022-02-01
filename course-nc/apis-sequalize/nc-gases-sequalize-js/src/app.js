
import express from "express"
import { ApolloServer } from "apollo-server-express"
//import { buildSchema } from 'graphql'

// Schema
import { schema } from './modules/index'


// Resolvers Cylinders
import { CylCylinders } from './modules/module-cylinders/resolvers/resolver-cylinders'
import { resolvers } from './modules/module-cylinders/resolvers/resolver-cylinders-test'
//import { CylResolverCylindersTypeGraphQL } from './modules/module-cylinders/resolvers/resolver-cylinders-typegraphql'
//import { CylResolverCylinderFill } from './modules/module-cylinders/resolvers/resolver-cylinder-fill'
//import { CylResolverCylinderMovement } from './modules/module-cylinders/resolvers/resolver-cylinder-movement'

// Resolvers Hotel

// Resolvers Restaurants

// Resolvers Stores

// Resolvers Tests
import { TestPingResolver } from "./tests/ping"

export async function startServer() {

  const app = express();

  const server = new ApolloServer({
        schema,
        resolvers: resolvers
  });

  await server.start()
  server.applyMiddleware({app, path: '/graphql'})

  return app;
}