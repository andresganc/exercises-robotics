import mongoose from 'mongoose';
import { modelProveedoresSchema } from '../schema/schemaProveedores.js';
import { rejects } from 'assert';



// Export Nuevo con schema.graphql, GraphQL Tools y GraphQL Import
export const resolvers = {


    // ==================================================================================================================
    // modelProveedoresSchema
    // ==================================================================================================================

    // Query y Mutation Funciones de GraphQL Tools para hacer Mapeo
    Query: {
        // Resolver para obtener todos los clientes (getClientes)
        getProveedores: () => {
            return modelProveedoresSchema.find({})
        },
        // Resolver para obtener clientes con un limite de registros (getClientesLimite)
        getProveedoresLimite: (root, {limite}) => {
            return modelProveedoresSchema.find({}).limit(limite)
        },
        // Resolver para obtener un cliente por su id (getCliente)
        getProveedorID : (root, {id}) => {
            return new Promise((resolve, object) => {
                modelProveedoresSchema.findById(id, (error, user) => {
                    if(error) rejects(error)
                    else resolve(user)
                });
            });
        },
    },

    Mutation: {
        crearProveedor : (root, {input}) => {
            const nuevoProveedor = new modelProveedoresSchema ({
                created_at: input.created_at,
                documenttype: input.documenttype,
                document: input.document,
                company: input.company,
                phones: input.phones,
                emails: input.emails,
                web: input.web,
                status: input.status
            });
            // Propiedad del id
            nuevoProveedor.id = nuevoProveedor._id;

            // Con el Promise guardamos en la base de datos de MongoDB
            return new Promise((resolve, Object) => {
                nuevoProveedor.save((error) => {      // Se hace un CallBack para saber si se inserto o no se inserto el registro
                    if(error) rejects(error)        // Si hay error hacemos un rejects lo nos muestra en consola
                    else resolve(nuevoProveedor)      // De lo contrario hacemos un resolve y Guardaria
                });
            });
        },
        editarProveedor: (root, {input}) => {
            return new Promise((resolve, object) => {
                modelProveedoresSchema.findOneAndUpdate({ _id: input.id}, input, {new: true}, (error, user) => {
                    if(error) rejects(error)
                    else resolve(user)
                });
            });
        },
        eliminarProveedor: (root, {id}) => {
            return new Promise((resolve, object) => {
                //Proveedores.remove   // Se puede usar remove tambien
                modelProveedoresSchema.findOneAndRemove({_id: id}, (error) => {
                    if (error) rejects(error)
                    else resolve("Se elimino correctamente")
                });
            });
        }
    },
    // ==================================================================================================================

}