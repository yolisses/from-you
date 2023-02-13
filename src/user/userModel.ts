import { model, Schema } from "mongoose";

const userSchema = new Schema({
    address: String,
})

export const User = model('user', userSchema)