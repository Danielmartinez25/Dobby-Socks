import { Types } from "mongoose";

export interface Cart {
    user:Types.ObjectId;
    product:[{
        product:Types.ObjectId,
        quantity:number
}]
}