import { DataController } from '../controllers/dataController';
import { StatisticsController } from '../controllers/statisticsController';
import { Request, Response, NextFunction } from 'express';
var PRIVATE = require('../../config/private.json');

export class Routes {

    public dataController: DataController = new DataController();
    public statisticsController: StatisticsController = new StatisticsController();

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
        
        app.route('/statistics/:originUrl/sales')
            .get(this.statisticsController.getSalesBySector);
    }
}





// (req: Request, res: Response, next:NextFunction) => {
    //         if(req.query.key !== PRIVATE.privateKey){
    //             res.status(401).send('Authentication failed.')
    //         }else{
    //             next();
    //         }
        // },