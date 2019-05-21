"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const dataModel_1 = require("../models/dataModel");
const Data = mongoose.model('Data', dataModel_1.DataSchema);
class DataController {
    addNewData(req, res) {
        req.body.sessionTime = Math.abs(Math.round(((new Date(req.body.sessionEnd).getTime() - new Date(req.body.sessionStart).getTime()) / 1000) / 60));
        let newData = new Data(req.body);
        newData.save((err, Data) => {
            if (err) {
                res.send(err);
            }
            res.json(Data);
        });
    }
    getData(req, res) {
        Data.find({}, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    saveSessionTime(data) {
        data.sessionTime = Math.round(((data.sessionEnd.getTime() - data.sessionStart.getTime() % 86400000) % 3600000) / 600000);
    }
    getDataById(req, res) {
        Data.findById(req.params.visitorId, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
}
exports.DataController = DataController;
//# sourceMappingURL=dataController.js.map