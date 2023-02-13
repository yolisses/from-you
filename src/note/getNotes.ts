import { Note } from "./noteModel"
import type { Note as NoteInterface } from "./note"
import { ObjectId } from "mongodb"

interface Params {
    query?: string
    userId: string
}

export async function getNotes({ userId: userIdString, query }: Params) {

    let notes: NoteInterface[]
    const userId = new ObjectId(userIdString)

    if (query) {
        notes = await Note
            .find({ userId, $text: { $search: query }, })
            .sort({ 'score': { $meta: 'textScore' } })
            .lean()
    } else {
        notes = await Note
            .find({ userId })
            .sort('-_id')
            .lean()
    }

    notes.forEach(note => {
        note._id = String(note._id)
        note.userId = String(note.userId)
    })

    return notes
}