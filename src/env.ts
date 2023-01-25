import { env } from '$env/dynamic/private';

export const {
    MONGO_URL,
    MONGO_INITDB_ROOT_USERNAME,
    MONGO_INITDB_ROOT_PASSWORD,
} = env