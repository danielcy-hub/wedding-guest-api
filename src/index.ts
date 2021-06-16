import App from './app';
import { createConnection } from 'typeorm';
import { dbConfig, appPort } from './config';
import controllers from './controllers';

createConnection(dbConfig)
  .then(async () => {
    const app = new App(controllers, appPort);
    app.listen();
  })
  .catch((error) => console.log('Error while connecting to the database', error));
