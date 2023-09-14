import { Types } from "mongoose";

export interface User {
    name:string;
    surname:string;
    mail:string;
    password:string;
    avatar:string;
    token:string;
    checked:boolean;
    phone:number;
    role:[Types.ObjectId];
    cart:[Types.ObjectId];
    encryptPassword(password:string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
}