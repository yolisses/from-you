import type { SchemaObject } from "neode";

export const User: SchemaObject = {
    id: {
        type: 'uuid',
        primary: true,
    },
    name: 'string'
}