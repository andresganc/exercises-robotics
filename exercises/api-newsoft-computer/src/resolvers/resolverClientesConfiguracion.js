import mongoose from 'mongoose';
import {modelClientesConfigurationSchema} from '../schema/schemaClientes.js';
import { rejects } from 'assert';



// Export Nuevo con schema.graphql, GraphQL Tools y GraphQL Import
export const resolvers = {


    // ==================================================================================================================
    // modelClientesConfigurationSchema
    // ==================================================================================================================

    // Query y Mutation Funciones de GraphQL Tools para hacer Mapeo
    Query: {
        // Resolver para obtener todos los clientes (getClientes)
        getClientesConfiguracion: () => {
            return modelClientesConfigurationSchema.find({})
        },
        // Resolver para obtener clientes con un limite de registros (getClientesLimite)
        getClientesConfiguracionLimite: (root, {limite}) => {
            return modelClientesConfigurationSchema.find({}).limit(limite)
        },
        // Resolver para obtener un cliente por su id (getCliente)
        getClienteConfiguracionID : (root, {id}) => {
            return new Promise((resolve, object) => {
                modelClientesConfigurationSchema.findById(id, (error, user) => {
                    if(error) rejects(error)
                    else resolve(user)
                });
            });
        },
    },

    Mutation: {
        crearClienteConfiguracion : (root, {input}) => {
            const nuevoClienteConfiguracion = new modelClientesConfigurationSchema ({
                created_at: input.created_at,
                currency: input.currency,
                language: input.language,
                payment_terms: input.payment_terms,
                notes: input.notes,
                notes_private: input.notes_private,
                company_size: input.company_size,
                industry: input.industry
            });
            // Propiedad del id
            nuevoClienteConfiguracion.id = nuevoClienteConfiguracion._id;

            // Con el Promise guardamos en la base de datos de MongoDB
            return new Promise((resolve, Object) => {
                nuevoClienteConfiguracion.save((error) => {      // Se hace un CallBack para saber si se inserto o no se inserto el registro
                    if(error) rejects(error)        // Si hay error hacemos un rejects lo nos muestra en consola
                    else resolve(nuevoClienteConfiguracion)      // De lo contrario hacemos un resolve y Guardaria
                });
            });
        },
        editarClienteConfiguracion: (root, {input}) => {
            return new Promise((resolve, object) => {
                modelClientesConfigurationSchema.findOneAndUpdate({ _id: input.id}, input, {new: true}, (error, user) => {
                    if(error) rejects(error)
                    else resolve(user)
                });
            });
        },
        eliminarClienteConfiguracion: (root, {id}) => {
            return new Promise((resolve, object) => {
                //Clientes.remove   // Se puede usar remove tambien
                modelClientesConfigurationSchema.findOneAndRemove({_id: id}, (error) => {
                    if (error) rejects(error)
                    else resolve("Se elimino correctamente")
                });
            });
        }
    },
    // ==================================================================================================================

}