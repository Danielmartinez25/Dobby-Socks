import { Types } from "mongoose";

export interface User {
    name:string;
    surname:string;
    mail:string;
    password:void;
    phone:number;
    cart:[Types.ObjectId];
    encryptPassword(password:string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
}