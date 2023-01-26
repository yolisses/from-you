import '../db'
import { model, Schema } from 'mongoose'

const noteSchema = new Schema({
    title: String,
    description: String
})

export const Note = model('note', noteSchema)