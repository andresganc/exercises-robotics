
import {  } from "./connections/connection";
import { startServer } from "./app";
//import { startServer } from "./app-graphql";
//import { startServer } from "./app-typegraphql";

async function main() {
    connect();
    const app = await startServer();
    app.listen(4000);
    console.log("Server on port 4000");
    console.log(` 🚀 Servidor corriendo en: 🚀 http://localhost:4000/graphql `);
}

main();