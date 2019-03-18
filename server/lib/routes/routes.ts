import { VisitsController } from '../controllers/visitsController';
import { Request, Response, NextFunction } from 'express';
var PRIVATE = require('../../config/private.json');

export class Routes {

    public visitsController: VisitsController = new VisitsController();

    public routes(app): void {

        app.route('/visits/')
            .post(this.visitsController.addNewVisit)
            .get((req: Request, res: Response, next:NextFunction) => {
                if(req.query.key !== PRIVATE.privateKey){
                    res.status(401).send('Authentication failed.')
                }else{
                    next();
                }
            },this.visitsController.getVisits);

        app.route('/visits/:id')
            .get(this.visitsController.getVisitById)
            .put(this.visitsController.updateVisit)
            .delete(this.visitsController.deleteVisit)
        
    }
}