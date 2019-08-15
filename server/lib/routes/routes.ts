import { DataController } from '../controllers/dataController';
import { AccessController } from '../controllers/accessController';
import { StatisticsController } from '../controllers/statisticsController';
import { Request, Response, NextFunction } from 'express';
var PRIVATE = require('../../config/private.json');

export class Routes {

    public dataController: DataController = new DataController();
    public accessController: AccessController = new AccessController();
    public statisticsController: StatisticsController = new StatisticsController();

    public routes(app): void {

        app.route('/data')
            .post(this.dataController.addNewData)
            .get(this.dataController.getData);

        app.route('/data/:visitorId')
            .get(this.dataController.getDataById);

        app.route('/statistics/:originUrl/sales')
            .get(this.statisticsController.getSalesBySector);

        app.route('/statistics/:originUrl/sales/visits')
            .get(this.statisticsController.getSalesWithVisits);

        app.route('/login')
            .post(this.accessController.login)
        
        app.route('/createuser')
            .post(this.accessController.createUser)
        
        app.route('/kokatiel.js')
            .get(this.dataController.sendKokatiel)
    }
}





// (req: Request, res: Response, next:NextFunction) => {
    //         if(req.query.key !== PRIVATE.privateKey){
    //             res.status(401).send('Authentication failed.')
    //         }else{
    //             next();
    //         }
        // },