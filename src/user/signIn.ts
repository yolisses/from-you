import { User } from "./userModel"
import { neo4j } from "../db/neo4j"
import { verifyMessage } from "ethers"
import { loginMessage } from "./loginMessage"


interface Params {
    address: string
    signature: string
}
export async function signIn({ address, signature }: Params) {
    const signerAddress = verifyMessage(loginMessage, signature).toLowerCase()
    if (signerAddress !== address) {
        throw new Error("Wrong signature to provided address")
    }

    let user = await User.findOne({ address })
    if (!user) {
        user = new User({ address })
        await user.save()
        await neo4j.create('User', {
            address, id: user._id.toString(),
        })
    }

    return user
}