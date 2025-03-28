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

  // test: {
  //   dialect: 'sqlite',
  //   storage: './database.test.sqlite',
  // },

  test: {
    client: 'postgresql',
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      dialect: 'postgres' // Явно указываем диалект
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

  // test: {
  //   dialect: 'postgres',
  //   database: process.env.DATABASE_NAME,
  //   username: process.env.DATABASE_USERNAME,
  //   password: process.env.DATABASE_PASSWORD,
  //   port: process.env.DATABASE_PORT,
  //   host: process.env.DATABASE_HOST,
  // },
};
