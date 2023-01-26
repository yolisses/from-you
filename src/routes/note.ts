import '../db'
import { model, Schema } from 'mongoose'

const noteSchema = new Schema({
    title: String,
    description: String
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