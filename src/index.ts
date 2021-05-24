import express from 'express';
import { createConnection, ConnectionOptions } from 'typeorm';
import { dbConfig, appPort } from './config';

const app = express();

const ormConfig: ConnectionOptions = {
  type: 'postgres',
  host: dbConfig.host,
  port: parseInt(dbConfig.port || '5432'),
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  entities: dbConfig.entities,
  migrations: dbConfig.migrations,
  cli: dbConfig.cli,
  migrationsRun: dbConfig.migrationsRun,
  logging: dbConfig.logging,
  synchronize: dbConfig.synchronize
};

createConnection(ormConfig)
  .then(async () => {
    app.listen(appPort, '0.0.0.0');
    console.log('Server run on port', appPort);
  })
  .catch((error) => console.log(error));
