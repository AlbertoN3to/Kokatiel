"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routes/routes");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.routePrv = new routes_1.Routes();
        this.mongoUrl = 'mongodb://localhost:27017/KokatielDB';
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    mongoSetup() {
        // mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
    config() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map