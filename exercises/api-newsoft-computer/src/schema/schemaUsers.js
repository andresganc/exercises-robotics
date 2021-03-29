
import Schema from 'mongoose';
//import mon{ Schema } from 'mongoose';

const mongoose = require('../db/db-newsoft-computer.js');




// SCHEMA USER
const userSchema =  mongoose.Schema({
    created_at: String,
    name: String,
    lastname: String,
    email: String,
    password: String,
    image: String,
    status: Boolean
})

/*
const userSchema = new mongoose.Schema ({
    created_at: String,
    name: String,
    lastname: String,
    email: String,
    password: String,
    image: String,
    status: Boolean
})
*/

//const myDB = mongoose.connection.useDb('newsoft-computer');

// Creacion del Modelo (Seria como la DB o Tabla)
// ('Nombre de la tabla', NombreDelSchema)
const modelUsers = mongoose.model('users', userSchema );

export {modelUsers};