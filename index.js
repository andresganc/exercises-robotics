const express = require('express');                     // Pido o requiero Express
const app = express();                                  // Almaceno Express en una constante llamada app

const express_graphql = require('express-graphql');     // Requiero Express-GraphQL
const { buildSchema } = require('graphql');             // Requiero el Modulo de GraphQL que sirve para almacenar y mostrar el esquema de una base de datos

const {courses} = require('./data.json');
console.log (courses);

// Creamos los Esquemas y las Almacenamos en la constante Schema
const Schema = buildSchema(`
    type Query{
        course(id: Int!): Course
        courses(topic: String): [Course]
    }

    type Course {
        id: Int
        title: String
        description: String
        author: String
        topic: String
        url: String

    }
`);                           

let getCourse = (args) => {
    let id = args.id;
    return courses.filter(course => {
        return course.id == id;
    }) [0]
}

let getCourses = (args) => {
    if (args.topic){
        let topic = args.topic;
        return courses.filter(course => course.topic === topic);
    } else {
        return courses;
    }
};

// Para asignar permisos de consulta
const Root = {                                          
    course: getCourse,
    courses: getCourses
}

app.use('/graphql', express_graphql({
    schema: Schema,
    rootValue : Root,
    graphiql: true              // Aplicacion grafica para hacer consultas a la base de datos - La activamos
}));

app.listen (3000, () => console.log('Servidor corriendo en puerto: 3000'));