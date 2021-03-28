// Creamos la configuracion de express (Como se instalo babel no es necesario hacer require)

// Configuracion del servidor express
import express from 'express';

// GraphQL y Apollo Server
// No se esta usando para usar Apollo-Express
//import graphqlHTTP from 'express-graphql';              // Dependencia para conectar Express con GraphQL
// Apollo Server Express
import { ApolloServer } from 'apollo-server-express';        // Dependencia para conectar Express con Apollo


// ======================================= IMPORT TYPES =================================================
import typeDefs from './types'
// ======================================================================================================

// ====================================== IMPORT SCHEMAS =================================================
// IMPORT SCHEMAS                                           // Importacion normal (no como objeto) - export default schema;
// Import schemas sin modularizar
//import { typeDefs } from './schemas/schema';               // Importacion como objeto - export {schema};

// Import schemas modularizados
//import {typeDef as schemaUsers} from './schemas/schema.js';
//import { typeDef as Author } from './author.js';
// ======================================================================================================


// ====================================== IMPORT RESOLVERS =================================================
// Import resolvers sin modularizar
//import { resolvers } from './resolvers/resolvers';


// Import resolvers 

//import { merge } from 'lodash';             // Se importa el merge de lodash que sirve para importar varios resolvers y juntarlos en uno
//import { typeDef as Author, resolvers as authorResolvers, } from './resolvers/resolvers-modulo-users/resolverUsers.js';             
//import { resolvers as resolverUsers } from './resolvers/resolvers-modulo-users/resolverUsers.js';
import resolvers from './resolvers'
// ======================================================================================================



// Almacenamos el server en una constante llamada app
const app = express();


// ======================================================================================================
    // Constantes donde almacenamos los Schemas(typeDefs) y los Resolvers usando Apollo Server 
    //Constante para almacenar sin modularizar
    // Opcion 1
    /*
    makeExecutableSchema({
        typeDefs: typeDefs,
        resolvers: {},
    });
    */
    // Opcion 2  
    const server = new ApolloServer({typeDefs, resolvers});

    //Constante para almacenar modularizando
    // Opcion 1
    /*
    makeExecutableSchema({
        typeDefs: [ schemaUsers, schemaClientes ],
        resolvers: merge(resolverUsers),
    });
    */
     

// ======================================================================================================


//Middleware para conectar Apollo Server - Express
server.applyMiddleware({app});

app.listen({port: 9000}, () => console.log(`El servidor esta corriendo http://localhost:9000${server.graphqlPath}`));



// YA NO USAMOS ESTE EXPRESS PORQUE VAMOS A USAR EL DE APOLLO
/*
// URL /
app.get('/', (req, res) => {
    res.send('Todo Listo');
});

// URL /graphql
app.use('/graphql', graphqlHTTP({
    // Schema que se va a usar
    //schema : schema,          // Forma antigua llave y valor
    schema,                     // Forma con nueva sintaxis con ESC6
    // Utilizar graphiql
    graphiql : true
}));

// Configuracion del puerto
app.listen(8000, () => console.log('El servidor esta funcionando'));
*/