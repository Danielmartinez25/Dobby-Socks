import { Types } from "mongoose";

export interface User {
    name:string;
    surname:string;
    mail:string;
    password:string;
    avatar:string;
    role:string;
    phone:number;
    cart:[Types.ObjectId];
    encryptPassword(password:string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
}