import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { DataSchema } from '../models/dataModel';

const Data = mongoose.model('Data', DataSchema);

export class StatisticsController {

    public getSalesBySector(req: Request, res: Response) {
        if (req.query.year) {
            getYearlySales(req, res);
        } else {
            Data.aggregate([{ $match: { originUrl: req.params.originUrl, isVisit: false } }, { $group: { _id: "$section", count: { $sum: 1 } } }], (err, results) => {
                if (err) { res.send(err); }
                res.json(results);
            });
        }
    }

    public getSalesWithVisits(req: Request, res: Response) {
        Data.aggregate([
            { $match: { originUrl: req.params.originUrl } },
            { $group: { _id: { visitor: "$visitorId" }, sales: { $addToSet: "$isVisit" } } },
            { $unwind: "$sales" },
            { $group: { _id: "$_id", salesCount: { $sum: 1 } } },
            { $match: { salesCount: { $gt: 1 } } },
            { $count: "total" }
        ], (err, results) => {
            if (err) { res.send(err); }
            res.json(results);
        });
    }

}

function getYearlySales(req: Request, res: Response) {
    let year = Number(req.query.year);
    Data.find({
        sessionEnd: {
            $gte: new Date(`${year}-01-01T00:00:00.000Z`),
            $lt: new Date(`${year + 1}-01-01T00:00:00.000Z`)
        },
        isVisit: false,
        originUrl: req.params.originUrl
    }).estimatedDocumentCount((err, count) => {
        if (err) { res.send(err); }
        res.json({ "count": count });
    });
}