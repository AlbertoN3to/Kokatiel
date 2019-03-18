import * as mongoose from 'mongoose';
import { VisitsSchema } from '../models/visitsModel';
import { Request, Response } from 'express';

const Visit = mongoose.model('Visit', VisitsSchema);

export class VisitsController {

    public addNewVisit(req: Request, res: Response) {
        let newVisit = new Visit(req.body);

        newVisit.save((err, visit) => {
            if (err) {
                res.send(err);
            }
            res.json(visit);
        });
    }

    public getVisits(req: Request, res: Response) {
        Visit.find({}, (err, visit) => {
            if (err) {
                res.send(err);
            }
            res.json(visit);
        });
    }

    public getVisitById(req: Request, res: Response) {
        Visit.findById(req.params.id, (err, visit) => {
            if (err) {
                res.send(err);
            }
            res.json(visit);
        });
    }

    public updateVisit(req: Request, res: Response) {
        Visit.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, visit) => {
            if (err) {
                res.send(err);
            }
            res.json(visit);
        });
    }

    public deleteVisit(req: Request, res: Response) {
        Visit.remove({ _id: req.params.id }, (err, visit) => {
            if(err){
                res.send(err);
            }
            res.json({message: 'Successfully deleted a visit!'});
        });
    }
    
}