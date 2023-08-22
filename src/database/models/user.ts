import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { User } from "@/interfaces/user.interface";
const userSchema = new Schema<User>({
    name: {
        type: String,
        required: true,
        min: 4,
        lowercase: true
    },
    surname: {
        type: String,
        required: true,
        min: 4,
        lowercase: true
    },
    phone: {
        type: Number,
        required: true,
        min: 10
    },
    avatar: {
        type:String
    },
    mail: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    cart: [{ type: Schema.Types.ObjectId, ref: "Cart" }],
}, {
    timestamps: true,
    versionKey: false
});

userSchema.methods.encryptPassword = async (password:string) : Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salt);
};
userSchema.methods.verifyPassword = async function(password:string) : Promise<boolean>{
    return await bcrypt.compare(password,this.password);
};

export default model<User>("User", userSchema);