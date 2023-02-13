import type { SchemaObject } from "neode";

export const NoteNode: SchemaObject = {
    id: {
        unique: true,
        primary: true,
        type: 'string',
    },
    title: 'string'
}