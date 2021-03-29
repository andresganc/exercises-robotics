import mongoose from 'mongoose';
import {Schema, model} from 'mongoose';

// Crear la conexion
mongoose.Promise = global.Promise;

mongoose.set('useUnifiedTopology', true);

// Conexion
mongoose.connect('mongodb+srv://andresganc:mmdaa12345@nc-mongodb-clusternc-fggwa.gcp.mongodb.net/nc-system?retryWrites=true&w=majority', {useNewUrlParser: true});


// SCHEMA PROVEEDORES (SUPPLIER)

// supplierSchema
const supplierSchema = new Schema({
    created_at: String,
    documenttype: String,
    document: String,
    company: String,
    phones: String,
    emails: String,
    web: String,
    status: String
})

// supplierAddressSchema
const supplierAddressSchema = new Schema ({
    created_at: String,
    address: String,
    bloq_pta: String,
    cp: String,
    city: String,
    state: String,
    country: String
})

// customerConfigurationSchema
const supplierConfigurationSchema = new Schema ({
    created_at: String,
    currency: String,
    language: String,
    payment_terms: String,
    notes: String,
    notes_private: String,
    company_size: String,
    industry: String
})

// customerContactSchema
const supplierContactSchema = new Schema ({
    created_at: String,
    documenttype: String,
    document: String,
    name: String,
    lastname: String,
    phones: String,
    emails: String,
    address: String,
    state: String,
    country: String
})


// MODELOS (Nombre de Tablas)

// Model customers
const modelProveedoresSchema = model('supplier', supplierSchema);
// Model customers_address
const modelProveedoresDireccionSchema = model('supplier_address', supplierAddressSchema);
// Model customers_Configuration
const modelProveedoresConfigurationSchema = model('supplier_configuration', supplierConfigurationSchema);
// Model customers_contact
const modelProveedoresContactosSchema = model('supplier_contact', supplierContactSchema);

export {modelProveedoresSchema, modelProveedoresDireccionSchema};