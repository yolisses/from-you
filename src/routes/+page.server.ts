import { Note } from "../note/noteModel"
import { ObjectId } from "mongodb";
import type { Actions } from "@sveltejs/kit"
import type { PageServerLoad } from './$types';
import { NoteNode as NoteNode } from '../note/noteNode'
import type { Note as NoteInterface } from "../note/note";
import { neo4j } from "../nodes/neo4j";
import { createNote } from "../note/createNote";
import { removeNote } from "../note/removeNote";

export const load: PageServerLoad = async ({ url }) => {
    const query = url.searchParams.get('q')
    let notes: NoteInterface[]

    if (query) {
        notes = await Note.find(
            { $text: { $search: query } })
            .sort({ 'score': { $meta: 'textScore' } }).lean()
    }
    else {
        notes = await Note.find({}).sort('-_id').lean()
    }

    notes.forEach(note => note._id = String(note._id))
    return { notes }
}

export const actions: Actions = {
    async add({ request }) {
        const data = await request.formData()
        await createNote({
            title: data.get('title'),
            description: data.get('description'),
        } as NoteInterface)
    },

    async remove({ request }) {
        const data = await request.formData()
        const id = data.get('id') as string
        await removeNote(id)
    },

    async edit({ request }) {
        const data = await request.formData()
        const note = await Note.findById(new ObjectId(data.get('id') as string))
        if (!note) return
        note.title = data.get('title') as string
        note.description = data.get('description') as string
        await note.save()
    },
}