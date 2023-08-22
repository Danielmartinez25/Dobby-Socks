import {Schema,model} from "mongoose";
import { Type } from "@/interfaces/type.interface";
const typeSchema = new Schema<Type>({
    name : {
        type:String
    },
    product: {type: Schema.Types.ObjectId,ref:"Product"}
}, {
    timestamps: true,
    versionKey: false
});

export default model<Type>("Type",typeSchema);