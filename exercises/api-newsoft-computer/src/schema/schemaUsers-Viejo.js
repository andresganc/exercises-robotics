
import mongoose from 'mongoose';            // Importacion de libreria Mongoose

mongoose.Promise = global.Promise;          // Crear la conexion

/*
DeprecationWarning: el motor actual de detección y supervisión del servidor está en desuso 
y se eliminará en un versión futura Para usar el nuevo motor de Descubrimiento y monitoreo 
del servidor, pase la opción {useUnifiedTopology: true} al constructor MongoClient.
*/
mongoose.set('useUnifiedTopology', true);

// Conexion con la base de datos
// ('url', {opciones})

// Conexion Local
//mongoose.connect('mongodb://localhost/clientes', {useNewUrlParser: true});

// Conexion Remota
//mongoose.connect('mongodb+srv://andresganc:mmdaa12345@nc-mongodb-clusternc-fggwa.gcp.mongodb.net/curso-clientes?retryWrites=true&w=majority', {useNewUrlParser: true});

// Conexion con Mongodb Atlas
// Proyecto: NC - Newsoft Computer
// Cluster: cluster-nc-server-mongodb-nc
// Base de datos: newsoft-computer

mongoose.connect('mongodb+srv://admin:M1m2d3a4a5***@cluster-nc-server-mongo.ryhbo.mongodb.net/newsoft-computer?retryWrites=true&w=majority', {useNewUrlParser: true});

// Conexion a cluster viejo
//mongoose.connect('mongodb+srv://andresganc:mmdaa12345@nc-mongodb-clusternc-fggwa.gcp.mongodb.net/newsoft-computer?retryWrites=true&w=majority', {useNewUrlParser: true});



// SCHEMA USER

const userSchema = new mongoose.Schema({
    created_at: String,
    name: String,
    lastname: String,
    email: String,
    password: String,
    image: String,
    status: Boolean
})


// Creacion del Modelo (Seria como la DB o Tabla)
// ('Nombre de la tabla', NombreDelSchema)
const modelUsers = mongoose.model('users', userSchema );

export {modelUsers};
