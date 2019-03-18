import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const VisitsSchema = new Schema({
    id: {
        type: String,
        default: Math.random().toString(36).substr(2, 9)
    },
    date: {
        type: Date,
        default: Date.now()
    }
});
