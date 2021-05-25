import * as dotenv from 'dotenv';

dotenv.config();

export const appPort = parseInt(process.env.APP_PORT || '3000');

export const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['dist/entities/**/*.js'],
  migrations: ['dist/migrations/**/*.js'],
  cli: {
    entitiesDir: 'entities',
    migrationsDir: 'migration'
  },
  migrationsRun: false,
  logging: true,
  synchronize: false
};
