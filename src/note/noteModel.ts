import '../db/mongo'
import { model, Schema } from 'mongoose'
import { ObjectId } from 'mongodb'

const noteSchema = new Schema({
    title: String,
    description: String,
    userId: { type: ObjectId, ref: 'User' }
})

noteSchema.index(
    { title: 'text', description: 'text' },
    {
        weights: { title: 2, description: 1 },
        default_language: 'portuguese'
    }
)

export const Note = model('note', noteSchema)
Note.createIndexes()