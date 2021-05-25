import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';

dotenv.config();
const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['dist/entities/**/*.js'],
  migrations: ['dist/migrations/**/*.js'],
  cli: {
    entitiesDir: 'entities',
    migrationsDir: 'src/migrations'
  },
  migrationsRun: false,
  logging: true,
  synchronize: false
};
export = config;
