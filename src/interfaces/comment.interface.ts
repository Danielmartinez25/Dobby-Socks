import { Types } from "mongoose";

export interface Comment {
    text:string;
    date:Date;
    product:Types.ObjectId;
    user:Types.ObjectId;
}