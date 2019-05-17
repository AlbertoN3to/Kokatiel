"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataController_1 = require("../controllers/dataController");
const statisticsController_1 = require("../controllers/statisticsController");
var PRIVATE = require('../../config/private.json');
class Routes {
    constructor() {
        this.dataController = new dataController_1.DataController();
        this.statisticsController = new statisticsController_1.StatisticsController();
    }
    routes(app) {
        app.route('/data')
            .post(this.dataController.addNewData)
            // app.route('/visits/')
            //     .post(this.visitsController.addNewVisit)
            .get(this.dataController.getData);
        app.route('/data/:visitorId')
            .get(this.dataController.getDataById);
        //     .put(this.visitsController.updateVisit)
        //     .delete(this.visitsController.deleteVisit);
        app.route('/statistics/sales')
            .get(this.statisticsController.getSalesBySector);
    }
}
exports.Routes = Routes;
// (req: Request, res: Response, next:NextFunction) => {
//         if(req.query.key !== PRIVATE.privateKey){
//             res.status(401).send('Authentication failed.')
//         }else{
//             next();
//         }
// },
//# sourceMappingURL=routes.js.map