import { redis } from "../db/redis"

export async function logout(sessionId: string) {
    return await redis.del(sessionId)
}