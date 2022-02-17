import * as express from 'express';
import { GlobalTypes, Guess } from '../interfaces';
import GuessMidleware from '../middlewares/guess';
import GuessService from '../services/guess';
import GuessException from '../exceptions/guess';

type Controller = GlobalTypes.Controller;
const validator = new GuessMidleware();
const dbService = new GuessService();
//cant handle middleware error
class GuessController implements Controller {
  public path = '/guess';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, validator.get, this.getAllGuess);
    this.router.put(this.path, validator.update, this.updateGuess);
    this.router.post(this.path, validator.create, this.createGuess);
    this.router.delete(this.path, validator.delete, this.deleteGuess);
  }

  private getAllGuess = function (request: express.Request, response: express.Response, next: express.NextFunction) {
    const language = request.headers['accept-language'];
    if (!request.body.sortCol) request.body.sortCol = 'id';
    if (!request.body.sortOrder) request.body.sortOrder = 'DESC';
    if (!request.body.limit) request.body.limit = 200;
    if (!request.body.offset) request.body.offset = 0;
    dbService
      .get(request.body)
      .then((data) => {
        response.send(data);
      })
      .catch((err) => {
        next(new GuessException(err.status, err.message, language));
      });
  };

  private updateGuess = function (request: express.Request, response: express.Response) {
    response.send('update');
  };

  private createGuess = function (request: express.Request, response: express.Response, next: express.NextFunction) {
    const language = request.headers['accept-language'];
    dbService
      .create(request.body)
      .then((inserted) => {
        if (inserted) response.status(201).send('Guess Created');
        else throw { status: 500, message: 'INTERNAL-SERVER-ERROR' };
      })
      .catch((err) => {
        next(new GuessException(err.status, err.message, language));
      });
  };

  private deleteGuess = function (request: express.Request, response: express.Response) {
    response.send('delete');
  };
}

export default GuessController;
