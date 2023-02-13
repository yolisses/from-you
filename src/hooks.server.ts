import type { Handle } from "@sveltejs/kit";
import { redis } from "./db/redis";

export const handle: Handle = async ({ event, resolve }) => {
    const authCookie = event.cookies.get("Authorization")

    if (authCookie) {
        const userId = await redis.get(authCookie)
        if (userId) {
            event.locals.userId = userId
            event.locals.logged = !!userId
        }
    }
    return await resolve(event);
};