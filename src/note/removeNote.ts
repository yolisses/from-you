import { Note } from "./noteModel"
import { ObjectId } from "mongodb"
import { neo4j } from "../nodes/neo4j"

export async function removeNote(id: string) {
    await Note.deleteOne({ _id: new ObjectId(id) })
    await neo4j.query().match('n', 'Note')
        .where('n.id', id)
        .delete('n')
        .execute()
}