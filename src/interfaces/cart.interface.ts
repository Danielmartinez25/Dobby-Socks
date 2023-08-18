import { Types } from "mongoose";

export interface cart {
    user:Types.ObjectId;
    product:[
        product:Types.ObjectId,
        quantity:number
    ]
}