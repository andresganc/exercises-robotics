
// ./graphql/typeDefs.js
import path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';       // Deprecated
//import { mergeTypeDefs } from 'graphql-tools';
//import { loadFilesSync } from 'graphql-tools';

const typesArray = fileLoader(path.join(__dirname, './'));

export default mergeTypes(typesArray, { all: true });