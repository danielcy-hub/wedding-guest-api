import * as express from 'express';
import { GlobalTypes } from '../interfaces';

type Controller = GlobalTypes.Controller;

class GuessController implements Controller {
  public path = '/guess';
  public router = express.Router();
  
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllGuess);
    this.router.put(this.path, this.updateGuess);
    this.router.post(this.path, this.createGuess);
    this.router.delete(this.path, this.deleteGuess);
  }

  private getAllGuess = function (request: express.Request, response: express.Response) {
    response.send('getall');
  }

  private updateGuess = function (request: express.Request, response: express.Response) {
    response.send('update');
  }

  private createGuess = function (request: express.Request, response: express.Response) {
    response.send('create');
  }

  private deleteGuess = function (request: express.Request, response: express.Response) {
    response.send('delete');
  }
}

export default GuessController