import { connect } from "mongoose";
import { MONGO_URL } from "./env";

connect(MONGO_URL);
