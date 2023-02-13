import { Note } from "./noteModel"
import { ObjectId } from "mongodb"
import { neo4j } from "../db/neo4j"

interface Params {
    id: string,
    userId: string
}

export async function removeNote({ id, userId }: Params) {
    const note = await Note.findById(id)

    if (!note) {
        throw new Error("Note not found")
    }

    if (!new ObjectId(userId).equals(note.userId)) {
        throw new Error("Unauthorized note remove")
    }

    await note.delete()

    const noteNode = await neo4j.find("Note", id)
    await noteNode.delete()
}