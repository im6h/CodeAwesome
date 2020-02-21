// require module
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const cors = require('cors');

// require env
import { MONGO_URI } from '../utils/secret';

// require router
import router from '../routes';

// create class
class App {
  public app: express.Application;
  public mongoUrl: string = MONGO_URI;
  constructor() {
    this.app = express();
    this.appConfig();
    this.mongoConfig();
  }

  // config function
  private appConfig(): void {
    // config app
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());

    // config router
    router.postRouter(this.app);
    router.commentRouter(this.app);
  }

  // config database
  private mongoConfig(): void {
    mongoose.Promise = global.Promise;

    // check connect database
    mongoose
      .connect(this.mongoUrl, { useNewUrlParser: true })
      .then(() => {
        console.log('Connect to database');
      })
      .catch(error => console.log(error));
  }
}

// create new instance
const app = new App().app;

// export instance
export default app;
