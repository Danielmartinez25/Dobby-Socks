import { Types } from "mongoose";

export interface Product {
    name: string;
    price:number;
    description:string;
    image:string;
    stock:boolean;
    color:string;
    type:Types.ObjectId;
    cart:[Types.ObjectId];
    comment:[Types.ObjectId];
    user:[Types.ObjectId];
}