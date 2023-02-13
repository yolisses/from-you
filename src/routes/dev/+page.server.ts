import type { Actions } from "@sveltejs/kit"
import { signIn } from "../../user/signIn"
import '../../db/redis'
import { sessionSecondsDuration } from "../../user/sessionSecondsDuration"
import type { PageServerLoad } from "../$types";

export const load = (({ locals }) => {
    return {
        userId: locals.userId
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    async signIn({ request, cookies }) {
        const data = await request.formData()
        const signature = data.get('signature') as string
        const address = data.get('address') as string
        const sessionId = await signIn({ address, signature })
        cookies.set("Authorization", sessionId, { maxAge: sessionSecondsDuration })
    }
}