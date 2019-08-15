"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.DataSchema = new Schema({
    visitorId: {
        type: String,
        required: true
    },
    userId: {
        type: String
    },
    originUrl: {
        type: String,
        required: true
    },
    sessionStart: {
        type: Date,
        required: true
    },
    sessionEnd: {
        type: Date,
        required: true
    },
    sessionTime: {
        type: Number,
        default: 0
    },
    section: {
        type: String,
        required: true
    },
    item: {
        name: String,
        price: Number,
        priceUnit: String
    },
    geolocalization: {
        type: String
    },
    shoppingCart: [
        {
            itemName: String,
            itemType: String,
            itemQuantity: Number
        }
    ],
    isVisit: {
        type: Boolean,
        required: true
    },
    // userDefined: Schema.Types.Mixed
    userDefined: [
        {
            name: String,
            value: Number,
            isBool: Boolean
        }
    ]
});
//# sourceMappingURL=dataModel.js.map