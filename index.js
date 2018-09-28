const express = require('express');                     // Pido o requiero Express
const app = express();                                  // Almaceno Express en una constante llamada app

const express_graphql = require('express-graphql');     // Requiero Express-GraphQL
const { buildSchema } = require('graphql');             // Requiero el Modulo de GraphQL que sirve para almacenar y mostrar el esquema de una base de datos

// Almacenamos en la constante
const Schema = buildSchema(`
    type Query{
        message: String
    }
`);                           

// Para asignar permisos de consulta
const Root = {                                          
    message: () => "Hola"
}

app.use('/graphql', express_graphql({
    schema: Schema,
    root: Root,
    graphiql: true              // Aplicacion grafica para hacer consultas a la base de datos - La activamos
}));

app.listen (3000, () => console.log('Servidor corriendo en puerto: 3000'));