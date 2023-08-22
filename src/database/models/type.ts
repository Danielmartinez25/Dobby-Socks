import {Schema,model} from "mongoose";
import { Type } from "@/interfaces/type.interface";
const typeSchema = new Schema<Type>({
    name : {
        type:String
    },
    product: {type: Schema.Types.ObjectId,ref:"Product"}
});

export default model<Type>("Type",typeSchema);