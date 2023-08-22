import { Product } from "@/interfaces/product.interface";
import {Schema, model} from "mongoose";

const productSchema = new Schema<Product>({
    name : {
    type:String,
    required:[true,"name is required"],
    },
    price:{
    type:Number,
    required: [true, "price is required"],
    },
    description:{
        type:String,
        required: [true, "description is required"],
    },
    stock:{
        type:Boolean,
        required: [true, "stock is required"],
    },
    cart: [{ type: Schema.Types.ObjectId, ref: "Cart" }],
    comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    user: [{ type: Schema.Types.ObjectId, ref: "User" }],
    type: [{ type: Schema.Types.ObjectId, ref: "Type" }],

},{
    
});

export default model<Product>("Product",productSchema);