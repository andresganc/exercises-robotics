import mongoose from 'mongoose';
import { modelProveedoresDireccionSchema } from '../schema/schemaProveedores.js';
import { rejects } from 'assert';



// Export Nuevo con schema.graphql, GraphQL Tools y GraphQL Import
export const resolvers = {


    // ==================================================================================================================
    // modelProveedoresSchema
    // ==================================================================================================================

    // Query y Mutation Funciones de GraphQL Tools para hacer Mapeo
    Query: {
        // Resolver para obtener todos los clientes (getClientes)
        getProveedoresDireccion: () => {
            return modelProveedoresDireccionSchema.find({})
        },
        // Resolver para obtener clientes con un limite de registros (getClientesLimite)
        getProveedoresDireccionLimite: (root, {limite}) => {
            return modelProveedoresDireccionSchema.find({}).limit(limite)
        },
        // Resolver para obtener un cliente por su id (getCliente)
        getProveedorDireccionID : (root, {id}) => {
            return new Promise((resolve, object) => {
                modelProveedoresDireccionSchema.findById(id, (error, user) => {
                    if(error) rejects(error)
                    else resolve(user)
                });
            });
        },
    },

    Mutation: {
        crearProveedorDireccion : (root, {input}) => {
            const nuevoProveedorDireccion = new modelProveedoresDireccionSchema ({
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
            nuevoProveedorDireccion.id = nuevoProveedorDireccion._id;

            // Con el Promise guardamos en la base de datos de MongoDB
            return new Promise((resolve, Object) => {
                nuevoProveedorDireccion.save((error) => {      // Se hace un CallBack para saber si se inserto o no se inserto el registro
                    if(error) rejects(error)        // Si hay error hacemos un rejects lo nos muestra en consola
                    else resolve(nuevoProveedorDireccion)      // De lo contrario hacemos un resolve y Guardaria
                });
            });
        },
        editarProveedorDireccion: (root, {input}) => {
            return new Promise((resolve, object) => {
                modelProveedoresDireccionSchema.findOneAndUpdate({ _id: input.id}, input, {new: true}, (error, user) => {
                    if(error) rejects(error)
                    else resolve(user)
                });
            });
        },
        eliminarProveedorDireccion: (root, {id}) => {
            return new Promise((resolve, object) => {
                //Proveedores.remove   // Se puede usar remove tambien
                modelProveedoresDireccionSchema.findOneAndRemove({_id: id}, (error) => {
                    if (error) rejects(error)
                    else resolve("Se elimino correctamente")
                });
            });
        }
    },
    // ==================================================================================================================

}