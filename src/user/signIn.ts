import { verifyMessage } from "ethers"
import { neo4j } from "../neo4j"
import { loginMessage } from "./loginMessage"
import { User } from "./userModel"


interface Params {
    address: string
    signature: string
}
export async function signIn({ address, signature }: Params) {
    const signerAddress = verifyMessage(loginMessage, signature).toLowerCase()
    if (signerAddress !== address) {
        throw new Error("Wrong signature to provided address")
    }

    const user = new User({ address })
    await user.save()
    await neo4j.create('User', {
        address, id: user._id.toString(),
    })
}