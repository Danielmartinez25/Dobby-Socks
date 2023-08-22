import {Schema,model} from "mongoose";
import { Comment } from "@/interfaces/comment.interface";
const commentSchema = new Schema({
    text: {
        type:String
    }
});

export default model<Comment>("Comment",commentSchema); 