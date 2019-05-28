import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { DataSchema } from '../models/dataModel';

const Data = mongoose.model('Data', DataSchema);

export class StatisticsController {

    public getSalesBySector(req: Request, res: Response) {
        Data.aggregate([{$match:{originUrl:req.params.visitorId,isVisit:false}},{$group:{_id:"$section",count: {$sum:1}}}],(err,results)=>{
            if (err) { res.send(err); }
            res.json(results);
        });
        
        
        // Data.mapReduce({ map: "function(){emit( this.section  )}", reduce: (keys, values) => { return values.length }, query: { originUrl: req.body.originUrl, IsVisit: false } }, (err, results) => {
        //     if (err) { res.send(err); }
        //     res.json(results);
        // });
    }

}