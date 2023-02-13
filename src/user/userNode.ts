import type { SchemaObject } from "neode";

export const UserNode: SchemaObject = {
    id: {
        unique: true,
        primary: true,
        type: 'string',
    },
    created: {
        target: 'Note',
        direction: 'out',
        type: 'relationship',
        relationship: 'CREATED',
    }
}