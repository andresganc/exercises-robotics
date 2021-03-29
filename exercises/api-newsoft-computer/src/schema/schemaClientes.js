import mongoose from 'mongoose';
import {Schema, model} from 'mongoose';

// Crear la conexion
mongoose.Promise = global.Promise;

mongoose.set('useUnifiedTopology', true);

// Conexion
mongoose.connect('mongodb+srv://andresganc:mmdaa12345@nc-mongodb-clusternc-fggwa.gcp.mongodb.net/nc-system?retryWrites=true&w=majority', {useNewUrlParser: true});


// SCHEMA CLIENTES

// customerSchema
const customerSchema = new Schema({
    created_at: String,
    documenttype: String,
    document: String,
    name: String,
    lastname: String,
    company: String,
    phones: String,
    emails: String,
    web: String,
    address: String,
    bloq_pta: String,
    cp: String,
    city: String,
    country: String,
    status: String,
    currency: String,
    language: String,
    payment_terms: String,
    notes: String,
    notes_private: String,
    company_size: String,
    industry: String,
    contacts: Array,
    state: String
    
})

// customerAddressSchema
const customerAddressSchema = new Schema ({
    created_at: String,
    address: String,
    bloq_pta: String,
    cp: String,
    city: String,
    state: String,
    country: String
})

// customerConfigurationSchema
const customerConfigurationSchema = new Schema ({
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
const customerContactSchema = new Schema ({
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
const modelClientesSchema = model('customers', customerSchema);
// Model customers_address
const modelClientesDireccionSchema = model('customers_address', customerAddressSchema);
// Model customers_Configuration
const modelClientesConfigurationSchema = model('customers_configuration', customerConfigurationSchema);
// Model customers_contact
const modelClientesContactosSchema = model('customers_contact', customerContactSchema);

export {modelClientesSchema, modelClientesDireccionSchema, modelClientesConfigurationSchema, modelClientesContactosSchema};