import { verifyMessage } from "ethers"
import { loginMessage } from "./loginMessage"


interface Params {
    address: string
    signature: string
}
export function signIn({ address, signature }: Params) {

    const signerAddress = verifyMessage(loginMessage, signature).toLowerCase()
    if (signerAddress !== address) {
        throw new Error("Wrong signature to provided address")
    }

}