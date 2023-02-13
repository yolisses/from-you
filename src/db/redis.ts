import { createClient } from 'redis';

export const redis = createClient();
redis.on('error', error => console.error('Redis Client Error', error));
redis.connect();
