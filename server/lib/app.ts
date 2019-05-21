import * as express from 'express';
import { Routes } from "./routes/routes";
import * as mongoose from 'mongoose';

class App {
    
    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost:27017/KokatielDB'


    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private mongoSetup(): void{
        // mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl,{useNewUrlParser: true});
    }


    private config(): void{
        this.app.use(express.json());

        this.app.use(express.urlencoded({extended:false}));
    }
}

export default new App().app;
