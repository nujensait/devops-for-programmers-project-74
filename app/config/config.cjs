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
  //   dialect: 'postgres',
  //   database: process.env.DATABASE_NAME || 'postgres',
  //   username: process.env.DATABASE_USERNAME || 'postgres',
  //   password: process.env.DATABASE_PASSWORD || 'password',
  //   host: process.env.DATABASE_HOST || 'db',
  //   port: process.env.DATABASE_PORT || 5432,
    // Опционально можно добавить:
    // migrations: {
    //   directory: './migrations',
    // },
//  },

  test: {
     dialect: 'sqlite',
     storage: './database.test.sqlite',
  },

  // test: {
  //   dialect: 'postgres',
  //   database: process.env.DATABASE_NAME,
  //   username: process.env.DATABASE_USERNAME,
  //   password: process.env.DATABASE_PASSWORD,
  //   port: process.env.DATABASE_PORT,
  //   host: process.env.DATABASE_HOST,
  // },
};
