import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const DataSchema = new Schema({
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
        required:true
    },
    sessionEnd: {
        type: Date,
        required:true
    },
    sessionTime: {
        type: Number,
        default:0
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
        type:Boolean,
        required:true 
    },
    // userDefined: Schema.Types.Mixed
    userDefined: [
        {
            name:String,
            value:Number,
            isBool:Boolean
        }
    ]
});
