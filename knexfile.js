require("dotenv").config(); //access to .env variables
// Update with your config settings.
const database = {
  client: 'pg',
      connection: {
          host: 'localhost',
          database: 'memories-us'
      },
      migrations: {
          directory: './data/migrations'
      },
      seeds: { 
          directory: './data/seeds' 
      },
  };

module.exports = {
  development:{
    ...database,
    connection: {
      port: 5432,
      database: 'memories-us',
      user: 'postgres',
      password: 'admin'
    },
    tableName: 'knex_migrations'
  },

  // testing: {
  //   ...database,
  //   connection: {
  //     port: process.env.POSTGRES_PORT,
  //     database: 'test',
  //     user: process.env.USER,
  //     password: process.env.PASSWORD
  //   },
  //   tableName: 'knex_migrations'
  // },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: { 
      directory: './data/seeds' 
    },
    tableName: 'knex_migrations'
  }
};
