import {Schema,model} from "mongoose";
import { Cart } from "@/interfaces/cart.interface";
const cartSchema = new Schema<Cart>({
    user:{type: Schema.Types.ObjectId,ref:"User"},
    product:[{
        product:{type:Schema.Types.ObjectId,ref:"Product"},
        quantity:{type:Number}  
}]
});
export default model<Cart>("Cart",cartSchema);

