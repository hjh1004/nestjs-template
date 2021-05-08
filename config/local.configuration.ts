import { Dialect } from 'sequelize/types';

export const config = {
  environment: {
    url: 'http://localhost',
    port: 3000,
  },
  database: {
    dialect: 'mysql' as Dialect,
    host: 'localhost',
    port: 3306,
    user: 'user',
    password: 'password',
    storage: 'database',
    loggin: false,
  },
};
