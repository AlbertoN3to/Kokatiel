import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    originUrl: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type:String,
        required:true
    }
});

