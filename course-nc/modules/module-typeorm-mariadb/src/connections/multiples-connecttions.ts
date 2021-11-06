

import { createConnections } from "typeorm";
import path from 'path'


// Multiples Connections
export async function connect() {

    await createConnections([
        
        {
        name: "NCServerDBMariaDBTest01",
        type: "mysql",
        host: "10.10.1.15",
        port: 3306,
        username: "andres",
        password: "M1m2d3a4a5***",
        database: "nc-server-db-mariadb-test-01",
        entities: [
            path.join(__dirname, '../entity/**/**.ts')
        ],
        synchronize: true
    },
    
    {
        name: "NCServerDBMariaDBTest02",
        type: "mysql",
        host: "10.10.1.15",
        port: 3306,
        username: "andres",
        password: "M1m2d3a4a5***",
        database: "nc-server-db-mariadb-test-02",
        entities: [
            path.join(__dirname, '../entity/**/**.ts')
        ],
        synchronize: true
    }
    
    ]);
    console.log('Database is Connected')
}
