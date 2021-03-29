
import mongoose from 'mongoose';
import {modelUsers} from '../schema/schemaUsers.js';
import { rejects } from 'assert';


// Export Nuevo con schema.graphql, GraphQL Tools y GraphQL Import
export const resolvers = {
    // Query y Mutation Funciones de GraphQL Tools para hacer Mapeo
    Query: {
        // Resolver para obtener todos los clientes (getClientes)
        getUsers: () => {
            return modelUsers.find({})
        },
        // Resolver para obtener clientes con un limite de registros (getClientesLimite)
        getUsersLimite: (root, {limite}) => {
            return modelUsers.find({}).limit(limite)
        },
        // Resolver para obtener un cliente por su id (getCliente)
        getUserID : (root, {id}) => {
            return new Promise((resolve, object) => {
                modelUsers.findById(id, (error, user) => {
                    if(error) rejects(error)
                    else resolve(user)
                });
            });
        },
    },

    Mutation: {
        crearUser : (root, {input}) => {
            const nuevoUser = new modelUsers ({
                created_at: input.created_at,
                name: input.name,
                lastname: input.lastname,
                email: input.email,
                password: input.password,
                image: input.image,
                status: input.status
            });
            // Propiedad del id
            nuevoUser.id = nuevoUser._id;

            // Con el Promise guardamos en la base de datos de MongoDB
            return new Promise((resolve, Object) => {
                nuevoUser.save((error) => {      // Se hace un CallBack para saber si se inserto o no se inserto el registro
                    if(error) rejects(error)        // Si hay error hacemos un rejects lo nos muestra en consola
                    else resolve(nuevoUser)      // De lo contrario hacemos un resolve y Guardaria
                });
            });
        },
        editarUser: (root, {input}) => {
            return new Promise((resolve, object) => {
                modelUsers.findOneAndUpdate({ _id: input.id}, input, {new: true}, (error, user) => {
                    if(error) rejects(error)
                    else resolve(user)
                });
            });
        },
        eliminarUser: (root, {id}) => {
            return new Promise((resolve, object) => {
                //Clientes.remove   // Se puede usar remove tambien
                modelUsers.findOneAndRemove({_id: id}, (error) => {
                    if (error) rejects(error)
                    else resolve("Se elimino correctamente")
                });
            });
        }
    }
}
