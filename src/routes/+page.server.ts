import type { Note } from "../types/note"
import type { Actions } from "@sveltejs/kit"

export async function load() {
    const notes: Note[] = [
        { title: 'hello world', description: "it's me, Ulisses" },
        { title: 'the future of humanity', description: 'self replicate nano machines' }
    ]

    return { notes }
}

export const actions: Actions = {
    async default({ request }) {
        const data = await request.formData()
        const note: Note = {
            title: data.get('title'),
            description: data.get('description'),
        }
        await note.save()
    }
}