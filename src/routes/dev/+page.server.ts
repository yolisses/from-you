import type { Actions } from "@sveltejs/kit"
import { signIn } from "../../user/signIn"
import '../../db/redis'

export const actions: Actions = {
    async signIn({ request }) {
        const data = await request.formData()
        const signature = data.get('signature') as string
        const address = data.get('address') as string
        await signIn({ address, signature })
    }
}