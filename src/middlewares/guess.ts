import * as express from 'express';
import GuessException from '../exceptions/guess';
import { guessSortCol } from '../config';

class GuessMidleware {
  public get = function (request: express.Request, response: express.Response, next: express.NextFunction): void {
    const language = request.headers['accept-language'];
    const sortOrder = ['ASC', 'DESC'];
    if (Object.keys(request.body).length === 0 && request.body.constructor === Object)
      next(new GuessException(400, 'NO-REQUEST-BODY', language));
    else if (request.body.sort_col && !guessSortCol.includes(request.body.sort_col))
      next(new GuessException(400, 'INVALID-SORT-COL', language));
    else if (request.body.sort_order && !sortOrder.includes(request.body.sort_order))
      next(new GuessException(400, 'INVALID-SORT-ORDER', language));
    else if (request.body.page && !Number.isInteger(request.body.page))
      next(new GuessException(400, 'INVALID-PAGE', language));
    else if (request.body.size && !Number.isInteger(request.body.size))
      next(new GuessException(400, 'INVALID-SIZE', language));
    else next();
  };
  public create = function (request: express.Request, response: express.Response, next: express.NextFunction): void {
    const language = request.headers['accept-language'];
    if (Object.keys(request.body).length === 0 && request.body.constructor === Object)
      next(new GuessException(400, 'NO-REQUEST-BODY', language));
    else if (!request.body.name || typeof request.body.name !== 'string' || !request.body.name.trim())
      next(new GuessException(400, 'INVALID-NAME', language));
    else if (!request.body.address || typeof request.body.address !== 'string' || !request.body.address.trim())
      next(new GuessException(400, 'INVALID-ADDRESS', language));
    else if (!request.body.person_qty || !Number.isInteger(request.body.person_qty))
      next(new GuessException(400, 'INVALID-PERSON-QTY', language));
    else next();
  };
  public update = function (request: express.Request, response: express.Response, next: express.NextFunction): void {
    const language = request.headers['accept-language'];
    if (Object.keys(request.body).length === 0 && request.body.constructor === Object)
      next(new GuessException(400, 'NO-REQUEST-BODY', language));
    else if (!request.body.id || !Number.isInteger(request.body.id)) next(new GuessException(400, 'INVALID-ID-UPDATE', language));
    else if (!request.body.name || typeof request.body.name !== 'string' || !request.body.name.trim())
      next(new GuessException(400, 'INVALID-NAME', language));
    else if (!request.body.address || typeof request.body.address !== 'string' || !request.body.address.trim())
      next(new GuessException(400, 'INVALID-ADDRESS', language));
    else if (!request.body.person_qty || !Number.isInteger(request.body.person_qty))
      next(new GuessException(400, 'INVALID-PERSON-QTY', language));
    else next();
  };
  public delete = function (request: express.Request, response: express.Response, next: express.NextFunction): void {
    const language = request.headers['accept-language'];
    if (Object.keys(request.body).length === 0 && request.body.constructor === Object)
      next(new GuessException(400, 'NO-REQUEST-BODY', language));
    else if (!Array.isArray(request.body.id) || request.body.id.some(isNaN))
      next(new GuessException(400, 'INVALID-ID-DELETE', language));
    else next();
  };
}

export default GuessMidleware;
