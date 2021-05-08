import { Dialect } from 'sequelize/types';

export const config = {
  environment: {
    url: 'http://dev.host.com',
    port: 3000,
  },
  database: {
    dialect: 'mysql' as Dialect,
    host: 'dev.db.host.com',
    port: 3306,
    user: 'user',
    password: 'password',
    storage: 'database',
    loggin: false,
  },
};
