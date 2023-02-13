import "./env"
import Neode from 'neode';
import { User } from './user/user';
import { NoteNode } from './note/noteNode';

export const neo4j = Neode.fromEnv().with({ User, Note: NoteNode })