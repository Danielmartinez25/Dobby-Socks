import { Types } from "mongoose";

export interface Type {
    name:string;
    product:Types.ObjectId;
}