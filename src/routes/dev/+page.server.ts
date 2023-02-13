import { verifyMessage } from "ethers"
import type { Actions } from "@sveltejs/kit"
import { loginMessage } from "./loginMessage"

export const actions: Actions = {
    async signIn({ request }) {
        const data = await request.formData()
        const signature = data.get('signature') as string
        const address = data.get('address') as string

        const signerAddress = verifyMessage(loginMessage, signature)
        if (signerAddress !== address) {
            throw new Error("Wrong signature to provided address")
        }
    }
}