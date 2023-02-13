import "./env"
import Neode from 'neode';
import { NoteNode } from './note/noteNode';
import { UserNode } from "./user/userNode";

export const neo4j = Neode.fromEnv().with({
    User: UserNode,
    Note: NoteNode
})