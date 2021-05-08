import { Dialect } from 'sequelize/types';

export const config = {
  environment: {
    url: process.env.URL,
    port: process.env.PORT,
  },
  database: {
    dialect: 'mysql' as Dialect,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    storage: process.env.DB_DATABASE,
    loggin: false,
  },
};
