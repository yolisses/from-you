import { Note } from "./note"

import type { PageServerLoad } from './$types';

import type { Actions } from "@sveltejs/kit"

export const load: PageServerLoad = async ({ url }) => {
    const query = url.searchParams.get('q')

    if (query) {
        const notes = await Note.find(
            { $text: { $search: query } },
            { _id: false, score: { $meta: 'textScore' } })
            .sort({ 'score': { $meta: 'textScore' } }).lean()
        return { notes }
    }

    const notes = await Note.find({}, { _id: false }).sort('-_id').lean()
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
    }
}