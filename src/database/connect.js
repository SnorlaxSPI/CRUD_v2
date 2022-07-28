import pg from 'pg';

let client 

if (process.env.DATABASE == 'postgres') {
  client = new pg.Client({
    user: 'postgres',
    host:'localhost',
    password: 'root',
    database: 'postgres',
    port: 5432,
  })
} else if (process.env.DATABASE == 'mongo') {
  client = new mongo.Client({

  })
}

//export const client = new pg.Client({
//  user: 'postgres',
//  host:'localhost',
//  password: 'root',
//  database: 'postgres',
//  port: 5432,
//})

client.connect()
.then(() => console.log('📦📦 Database connected!'))