import pg from 'pg';

export const client = new pg.Client({
  user: 'postgres',
  host:'localhost',
  password: 'root',
  database: 'postgres',
  port: 5432,
})

client.connect()
.then(() => console.log('📦📦 Database connected!'))