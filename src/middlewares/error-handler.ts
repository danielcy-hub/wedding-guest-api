/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import CommonException from '../exceptions/common';
import UrlNotFoundException from '../exceptions/url-not-found';

export const urlNotFound = function (request: Request, response: Response, next: NextFunction):void {
  const language = request.headers['accept-language'];
  next(new UrlNotFoundException(404,'URL-NOT-FOUND',language));
}

export const errorHandler = function (
  error: CommonException,
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const status = error.status;
  const message = error.message;
  response.status(status).send({ status, message });
};
