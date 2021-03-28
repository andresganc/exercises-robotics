
// Apollo Server solo (Sin express)
import { ApolloServer } from 'apollo-server';
//const { ApolloServer } = require('apollo-server');        // Uso cuando no se tiene instalado babel


// ======================================= IMPORT TYPES =================================================
import typeDefs from './src/types';
// ======================================================================================================

// ====================================== IMPORT RESOLVERS =================================================
import resolvers from './src/resolvers';
// ======================================================================================================


// CONEXION & PUERTO
// ======================================================================================================

// IMPORTANDO TYPE'S & RESOLVERS'S
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });
    

// PUERTO
//Middleware para conectar Apollo Server
const PORT = process.env.PORT || '4000';

// The `listen` method launches a web server.
server.listen(PORT).then(({ url }) => {
    console.log(` 🚀 Servidor corriendo en: 🚀 ${url}`);
  });


