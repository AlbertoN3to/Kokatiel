"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const dataModel_1 = require("../models/dataModel");
const Data = mongoose.model('Data', dataModel_1.DataSchema);
class StatisticsController {
    getSalesBySector(req, res) {
        let op;
        op.map = '() => {emit( this.section , 1 )}';
        op.reduce = '(keys,values) => {return values.length}';
        op.query = { originUrl: req.body.originUrl, IsVisit: false };
        Data.mapReduce(op, (err, results) => {
            if (err) {
                res.send(err);
            }
            res.json(results);
        });
    }
}
exports.StatisticsController = StatisticsController;
//# sourceMappingURL=statisticsController.js.map