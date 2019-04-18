import { DataController } from '../controllers/dataController';
import { Request, Response, NextFunction } from 'express';
var PRIVATE = require('../../config/private.json');

export class Routes {

    public dataController: DataController = new DataController();

    public routes(app): void {

        app.route('/data')
            .post(this.dataController.addNewData)
        // app.route('/visits/')
        //     .post(this.visitsController.addNewVisit)
             .get(this.dataController.getData);

        app.route('/data/:visitorId')
             .get(this.dataController.getDataById);
        //     .put(this.visitsController.updateVisit)
        //     .delete(this.visitsController.deleteVisit);
        
    }
}





// (req: Request, res: Response, next:NextFunction) => {
    //         if(req.query.key !== PRIVATE.privateKey){
    //             res.status(401).send('Authentication failed.')
    //         }else{
    //             next();
    //         }
        // },