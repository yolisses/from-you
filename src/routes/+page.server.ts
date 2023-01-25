import type { Note } from "../types/note";

export async function load() {
    const notes: Note[] = [
        { title: 'hello world', description: "it's me, Ulisses" },
        { title: 'the future of humanity', description: 'self replicate nano machines' }
    ]

    return { notes }
}