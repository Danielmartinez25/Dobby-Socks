import {Schema,model} from "mongoose";
import { Role } from "@/interfaces/role.interface";
const roleSchema = new Schema<Role>({
    name: {
        type:String
    }
},
{
    versionKey:false
});
export default model<Role>("Role",roleSchema);