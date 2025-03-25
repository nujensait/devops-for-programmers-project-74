require('dotenv').config();

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
  },
  production: {
    dialect: 'postgres',
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
  },
  test: {
    client: 'pg', // Используем PostgreSQL
    connection: {
      host: process.env.DATABASE_HOST || 'db',
      database: process.env.DATABASE_NAME || 'postgres',
      user: process.env.DATABASE_USERNAME || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'password',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },

  // test: {
  //   dialect: 'sqlite',
  //   storage: './database.test.sqlite',
  // },

  // test: {
  //   dialect: 'postgres',
  //   database: process.env.DATABASE_NAME,
  //   username: process.env.DATABASE_USERNAME,
  //   password: process.env.DATABASE_PASSWORD,
  //   port: process.env.DATABASE_PORT,
  //   host: process.env.DATABASE_HOST,
  // },
};
