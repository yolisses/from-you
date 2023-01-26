import { Note } from "./note"
import type { Actions } from "@sveltejs/kit"

export async function load() {
    const notes = await Note.find({}, { _id: false }).lean()
    return { notes }
}

export const actions: Actions = {
    async default({ request }) {
        const data = await request.formData()
        const note = new Note({
            title: data.get('title'),
            description: data.get('description'),
        })
        await note.save()
    }
}