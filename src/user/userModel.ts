import { model, Schema } from "mongoose";

const userSchema = new Schema({
    address: { type: String, unique: true },
})

export const User = model('user', userSchema)
User.createIndexes()
