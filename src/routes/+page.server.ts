import { ObjectId } from "mongodb";
import { Note } from "../note/noteModel"
import type { Actions } from "@sveltejs/kit"
import type { PageServerLoad } from './$types';
import { createNote } from "../note/createNote";
import { removeNote } from "../note/removeNote";
import type { Note as NoteInterface } from "../note/note";
import { signIn } from "../user/signIn";
import { sessionSecondsDuration } from "../user/sessionSecondsDuration";
import { logout } from "../user/logout";
import { createSession } from "../user/createSession";
import { getNotes } from "../note/getNotes";

export const load = (async ({ url, locals }) => {
    const query = url.searchParams.get('q') as string
    const userId = locals.userId as string
    const notes = await getNotes({ userId, query })
    return { notes, logged: locals.logged }
}) satisfies PageServerLoad

export const actions: Actions = {
    async add({ request, locals }) {
        const data = await request.formData()
        await createNote({
            userId: locals.userId,
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

    async signIn({ request, cookies, locals }) {
        const data = await request.formData()
        const signature = data.get('signature') as string
        const address = data.get('address') as string
        const user = await signIn({ address, signature })
        const userId = user._id.toString()
        const sessionId = await createSession(userId)

        locals.logged = true
        locals.userId = userId
        cookies.set("Authorization", sessionId, {
            maxAge: sessionSecondsDuration, httpOnly: true
        })
    },

    async logout({ cookies, locals }) {
        const sessionId = cookies.get("Authorization")
        if (!sessionId) return
        await logout(sessionId)

        delete locals.logged
        delete locals.userId
        cookies.delete("Authorization")
    }
}