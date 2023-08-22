import { Schema, model } from "mongoose";
import { Comment } from "@/interfaces/comment.interface";
const commentSchema = new Schema({
    text: {
        type:String
    },
    date: {
        type: Date
    },
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
}, {
    timestamps: true,
    versionKey: false
});

export default model<Comment>("Comment",commentSchema); 