import { Types } from "mongoose";

export interface comment {
    text:string;
    date:Date;
    product:Types.ObjectId;
    user:Types.ObjectId;
}