import * as express from 'express';
import { GlobalTypes } from '../interfaces';

type Controller = GlobalTypes.Controller;

class AttendanceController implements Controller {
  public path = '/attendance';
  public router = express.Router();
  
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllAttendance);
    this.router.put(this.path, this.updateAttendance);
    this.router.post(this.path, this.createAttendance);
    this.router.delete(this.path, this.deleteAttendance);
  }

  private getAllAttendance = function (request: express.Request, response: express.Response) {
    response.send('getall');
  }

  private updateAttendance = function (request: express.Request, response: express.Response) {
    response.send('update');
  }

  private createAttendance = function (request: express.Request, response: express.Response) {
    response.send('create');
  }

  private deleteAttendance = function (request: express.Request, response: express.Response) {
    response.send('delete');
  }
}

export default AttendanceController