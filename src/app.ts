import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { GlobalTypes } from './interfaces';

type Controller = GlobalTypes.Controller;

class App {
  private app: express.Application;
  private port: number;

  constructor(controllers:Controller[],port:number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
  
  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:true}));
  }

  private initializeControllers(controllers:Controller[]) {
    controllers.forEach((controller)=>{
      this.app.use('/',controller.router);
    });
  }

  public listen():void {
    this.app.listen(this.port, '0.0.0.0', ()=>{
      console.log(`App listening on port ${this.port}`);
    });
  }

  public getServer():express.Application {
    return this.app;
  }
}

export default App;