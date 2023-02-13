import { v4 } from 'uuid'
import { redis } from "../db/redis";
import { sessionSecondsDuration } from './sessionSecondsDuration';

export async function createSession(userId: string) {
    const sessionId = v4()
    await redis.set(sessionId, userId, { EX: sessionSecondsDuration })
    return sessionId
}