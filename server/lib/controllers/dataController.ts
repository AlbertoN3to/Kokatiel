import * as mongoose from 'mongoose';
import { DataSchema } from '../models/dataModel';
import { Request, Response } from 'express';

const Data = mongoose.model('Data', DataSchema);

export class DataController {

    public addNewData(req: Request, res: Response) {
        req.body.sessionTime = Math.abs(Math.round(((new Date(req.body.sessionEnd).getTime() - new Date(req.body.sessionStart).getTime()) / 1000) / 60));
        
        let newData = new Data(req.body);
        
        newData.save((err, Data) => {     
            if (err) {
                res.send(err);
            }
            res.json(Data);
        });
    }

    public getData(req: Request, res: Response) {
        Data.find({}, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    
    public saveSessionTime(data){
        data.sessionTime = Math.round(((data.sessionEnd.getTime() - data.sessionStart.getTime() % 86400000) % 3600000) / 600000);
    }
    public getDataById(req: Request, res: Response) {
        Data.findById(req.params.visitorId, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }

    // public updateVisit(req: Request, res: Response) {
    //     Visit.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, visit) => {
    //         if (err) {
    //             res.send(err);
    //         }
    //         res.json(visit);
    //     });
    // }

    // public deleteVisit(req: Request, res: Response) {
    //     Visit.remove({ _id: req.params.id }, (err, visit) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json({message: 'Successfully deleted a visit!'});
    //     });
    // }
    
}