import mongoose from 'mongoose';
import {modelClientesSchema, modelClientesDireccionSchema, modelClientesConfigurationSchema, modelClientesContactosSchema} from '../schema/schemaClientes.js';
import { rejects } from 'assert';



// Export Nuevo con schema.graphql, GraphQL Tools y GraphQL Import
export const resolvers = {


    // ==================================================================================================================
    // modelClientesDireccionSchema
    // ==================================================================================================================
    // Query y Mutation Funciones de GraphQL Tools para hacer Mapeo
    Query: {
        // Resolver para obtener todos los clientes (getClientes)
        getClientesDireccion: () => {
            return modelClientesDireccionSchema.find({})
        },
        // Resolver para obtener clientes con un limite de registros (getClientesLimite)
        getClientesDireccionLimite: (root, {limite}) => {
            return modelClientesDireccionSchema.find({}).limit(limite)
        },
        // Resolver para obtener un cliente por su id (getCliente)
        getClienteDireccionID : (root, {id}) => {
            return new Promise((resolve, object) => {
                modelClientesDireccionSchema.findById(id, (error, user) => {
                    if(error) rejects(error)
                    else resolve(user)
                });
            });
        },
    },

    Mutation: {
        crearClienteDireccion : (root, {input}) => {
            const nuevoClienteDireccion = new modelClientesDireccionSchema ({
                created_at : input.created_at,
                address: input.address,
                bloq_pta: input.bloq_pta,
                cp: input.cp,
                city : input.city,
                state: input.state,
                country: input.country
            });
            // Propiedad del id
            nuevoClienteDireccion.id = nuevoClienteDireccion._id;

            // Con el Promise guardamos en la base de datos de MongoDB
            return new Promise((resolve, Object) => {
                nuevoClienteDireccion.save((error) => {      // Se hace un CallBack para saber si se inserto o no se inserto el registro
                    if(error) rejects(error)        // Si hay error hacemos un rejects lo nos muestra en consola
                    else resolve(nuevoClienteDireccion)      // De lo contrario hacemos un resolve y Guardaria
                });
            });
        },
        editarClienteDireccion: (root, {input}) => {
            return new Promise((resolve, object) => {
                modelClientesDireccionSchema.findOneAndUpdate({ _id: input.id}, input, {new: true}, (error, user) => {
                    if(error) rejects(error)
                    else resolve(user)
                });
            });
        },
        eliminarClienteDireccion: (root, {id}) => {
            return new Promise((resolve, object) => {
                //Clientes.remove   // Se puede usar remove tambien
                modelClientesDireccionSchema.findOneAndRemove({_id: id}, (error) => {
                    if (error) rejects(error)
                    else resolve("Se elimino correctamente")
                });
            });
        }
    }


}