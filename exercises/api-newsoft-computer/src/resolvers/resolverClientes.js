//import mongoose from 'mongoose';
import {modelClientesSchema} from '../schema/schemaClientes.js';
import { rejects } from 'assert';



// Export Nuevo con schema.graphql, GraphQL Tools y GraphQL Import
export const resolvers = {


    // ==================================================================================================================
    // modelClientesSchema
    // ==================================================================================================================

    // Query y Mutation Funciones de GraphQL Tools para hacer Mapeo
    Query: {
        // Resolver para obtener todos los clientes (getClientes)
        getClientes: () => {
            return modelClientesSchema.find({})
        },
        // Resolver para obtener clientes con un limite de registros (getClientesLimite)
        getClientesLimite: (root, {limite}) => {
            return modelClientesSchema.find({}).limit(limite)
        },
        // Resolver para obtener un cliente por su id (getCliente)
        getClienteID : (root, {id}) => {
            return new Promise((resolve, object) => {
                modelClientesSchema.findById(id, (error, user) => {
                    if(error) rejects(error)
                    else resolve(user)
                });
            });
        },
    },

    Mutation: {
        crearCliente : (root, {input}) => {
            const nuevoCliente = new modelClientesSchema ({
                created_at: input.created_at,
                documenttype: input.documenttype,
                document: input.document,
                company: input.company,
                phones: input.phones,
                emails: input.emails,
                web: input.web,
                address: input.address,
                bloq_pta: input.bloq_pta,
                cp: input.cp,
                city : input.city,
                state: input.state,
                country: input.country,
                currency: input.currency,
                language: input.language,
                payment_terms: input.payment_terms,
                notes: input.notes,
                notes_private: input.notes_private,
                company_size: input.company_size,
                industry: input.industry,
                contacts: input.contacts,
                status: input.status
            });
            // Propiedad del id
            nuevoCliente.id = nuevoCliente._id;

            // Con el Promise guardamos en la base de datos de MongoDB
            return new Promise((resolve, Object) => {
                nuevoCliente.save((error) => {      // Se hace un CallBack para saber si se inserto o no se inserto el registro
                    if(error) rejects(error)        // Si hay error hacemos un rejects lo nos muestra en consola
                    else resolve(nuevoCliente)      // De lo contrario hacemos un resolve y Guardaria
                });
            });
        },
        editarCliente: (root, {input}) => {
            return new Promise((resolve, object) => {
                modelClientesSchema.findOneAndUpdate({ _id: input.id}, input, {new: true}, (error, user) => {
                    if(error) rejects(error)
                    else resolve(user)
                });
            });
        },
        eliminarCliente: (root, {id}) => {
            return new Promise((resolve, object) => {
                //Clientes.remove   // Se puede usar remove tambien
                modelClientesSchema.findOneAndRemove({_id: id}, (error) => {
                    if (error) rejects(error)
                    else resolve("Se elimino correctamente")
                });
            });
        }
    },
    // ==================================================================================================================

}