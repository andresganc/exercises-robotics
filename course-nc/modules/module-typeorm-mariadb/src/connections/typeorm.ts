
import {createConnection} from 'typeorm'
import path from 'path'

export async function connect() {
  await createConnection({
    type:"mysql",
    host: "10.10.1.15",
    port: 3306,
    username: "andres",
    password: "M1m2d3a4a5***",
    database: "nc-test-01",
    entities: [
      path.join(__dirname, '../entity/**/**.ts')
    ],
    synchronize: true
  });
  console.log('Database is Connected')
}