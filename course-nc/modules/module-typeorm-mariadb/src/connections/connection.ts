
import { createConnection } from "typeorm";
import path from 'path'


export async function connect() {
    
    createConnection({
        type: "mysql",
        host: "10.10.1.15",
        port: 3306,
        username: "andres",
        password: "M1m2d3a4a5***",
        database: "nc-server-db-mariadb-test-01",
        entities: [
            path.join(__dirname, '../entity/**/**.ts')
        ],
        synchronize: true,
        logging: false
    }).then(connection => {
        // here you can start to work with your entities
        console.log('Database is Connected')
    }).catch(error => console.log(' Error connection data base', error));

}
