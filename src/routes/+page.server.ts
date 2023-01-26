import { Note } from "./note"
import type { PageServerLoad } from './$types';
import type { Actions } from "@sveltejs/kit"
import type { Note as NoteInterface } from "../types/note";
import { ObjectId } from "mongodb";

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
        const note = new Note({
            title: data.get('title'),
            description: data.get('description'),
        })
        await note.save()
    },

    async remove({ request }) {
        const data = await request.formData()
        const _id = new ObjectId(data.get('id') as string)
        await Note.deleteOne({ _id })
    }
}