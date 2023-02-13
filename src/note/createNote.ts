import { Note } from "./noteModel";
import { neo4j } from "../nodes/neo4j";
import type { Note as NoteInterface } from "./note";


export async function createNote({ title, description }: NoteInterface) {
    const note = new Note({ title, description })
    await note.save()
    await neo4j.create('Note', {
        title: note.title,
        id: note._id.toString(),
    })
}