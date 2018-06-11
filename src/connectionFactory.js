const { Pool, Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'db',
  database: 'deSCubra',
  password: 'password',
  port: 5432,
})
