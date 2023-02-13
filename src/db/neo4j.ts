import '../env'
import Neode from 'neode';
import { UserNode } from "../user/userNode";
import { NoteNode } from "../note/noteNode";

export const neo4j = Neode.fromEnv().with({
    User: UserNode,
    Note: NoteNode,
})