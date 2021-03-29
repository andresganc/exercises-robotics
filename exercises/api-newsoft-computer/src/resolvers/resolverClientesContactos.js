import mongoose from 'mongoose';
import {modelClientesContactosSchema} from '../schema/schemaClientes.js';
import { rejects } from 'assert';



// Export Nuevo con schema.graphql, GraphQL Tools y GraphQL Import
export const resolvers = {


    // ==================================================================================================================
    // modelClientesContactosSchema
    // ==================================================================================================================

    // Query y Mutation Funciones de GraphQL Tools para hacer Mapeo
    Query: {
        // Resolver para obtener todos los clientes (getClientesContactos)
        getClienteContactos: () => {
            return modelClientesContactosSchema.find({})
        },
        // Resolver para obtener clientes con un limite de registros (getClientesContactosLimite)
        getClienteContactosLimite: (root, {limite}) => {
            return modelClientesContactosSchema.find({}).limit(limite)
        },
        // Resolver para obtener un cliente por su id (getCliente)
        getClienteContactoID : (root, {id}) => {
            return new Promise((resolve, object) => {
                modelClientesContactosSchema.findById(id, (error, user) => {
                    if(error) rejects(error)
                    else resolve(user)
                });
            });
        },
    },

    Mutation: {
        crearClienteContactos: (root, {input}) => {
            const nuevoClienteContactos = new modelClientesContactosSchema ({
                created_at: input.created_at,
                documenttype: input.documenttype,
                document: input.document,
                name: input.name,
                lastname: input.lastname,
                phones: input.phones,
                emails: input.emails,
                address: input.address,
                state: input.state,
                country: input.country
            });
            // Propiedad del id
            nuevoClienteContactos.id = nuevoClienteContactos._id;

            // Con el Promise guardamos en la base de datos de MongoDB
            return new Promise((resolve, Object) => {
                nuevoClienteContactos.save((error) => {      // Se hace un CallBack para saber si se inserto o no se inserto el registro
                    if(error) rejects(error)        // Si hay error hacemos un rejects lo nos muestra en consola
                    else resolve(nuevoClienteContactos)      // De lo contrario hacemos un resolve y Guardaria
                });
            });
        },
        editarClienteContactos: (root, {input}) => {
            return new Promise((resolve, object) => {
                modelClientesContactosSchema.findOneAndUpdate({ _id: input.id}, input, {new: true}, (error, user) => {
                    if(error) rejects(error)
                    else resolve(user)
                });
            });
        },
        eliminarClienteContactos: (root, {id}) => {
            return new Promise((resolve, object) => {
                //Clientes.remove   // Se puede usar remove tambien
                modelClientesContactosSchema.findOneAndRemove({_id: id}, (error) => {
                    if (error) rejects(error)
                    else resolve("Se elimino correctamente")
                });
            });
        }
    },
  

}