import { Note } from "./noteModel";
import { neo4j } from "../db/neo4j";
import type { Note as NoteInterface } from "./note";
import { ObjectId } from "mongodb";


export async function createNote({ title, description, userId }: NoteInterface) {
    const note = new Note({ title, description, userId: new ObjectId(userId), })
    await note.save()
    const noteNode = await neo4j.create('Note', {
        title: note.title,
        id: note._id.toString(),
    })
    const user = await neo4j.find('User', userId)
    await user.relateTo(noteNode, 'created')
}