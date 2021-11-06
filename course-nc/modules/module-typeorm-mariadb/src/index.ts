
import "reflect-metadata";
//import { connect } from "./connections/connection";
import { connect } from "./connections/connection";
import { startServer } from "./app";

async function main() {
    connect();
    const app = await startServer();
    app.listen(4000);
    console.log("Server on port 4000");
    console.log(` 🚀 Servidor corriendo en: 🚀 http://localhost:4000/graphql `);
}

main();