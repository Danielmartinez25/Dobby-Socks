import user from "@/database/models/user";
import { Request, Response } from "express";
export const register = async(req:{body},res:Response) =>{
    try {
        const {name,surname,} = body;
        const newUser = new user(

        );
    } catch (error) {
        console.error(error);
        
    }
};
export const login = async(req:{body},res:Response) =>{
    try {
        const {} = body
    } catch (error) {
        console.error(error); 
    }
};