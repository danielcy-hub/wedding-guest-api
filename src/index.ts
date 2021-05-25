import express from 'express';
import { createConnection } from 'typeorm';
import { dbConfig, appPort } from './config';

const app = express();

createConnection(dbConfig)
  .then(async () => {
    app.listen(appPort, '0.0.0.0');
    console.log('Server run on port', appPort);
  })
  .catch((error) => console.log(error));
