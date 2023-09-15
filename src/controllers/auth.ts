import createError from "http-errors";
import { Request, Response } from "express";
import user from "@/database/models/user";
import generateTokenRandom from "@/helpers/generateTokenRandom";
export const register = async({body}:Request,res:Response) =>{
    try {
        const {name,surname,mail,password,phone} = body;
        if ([name,surname, mail, password, phone].includes("")) {
            throw createError(400, "Todos los campos son obligatorios");
        }
        const userMail = await user.findOne({mail});  
        if(userMail){
            throw createError(400,"El mail se encuentra registrado");
        }
        const token = generateTokenRandom();
        const NewUser = new user({
            body
        });
        NewUser.token = token;
        const userStore = await NewUser.save();
        return res.status(200).json({
            ok:true,
            status: 200, 
            data: userStore
        });
    } catch (error) {
        console.error(error);
        
    }
};
export const login = async({body}:Request,res:Response) =>{
    try {
        const {mail,password} = body;
    } catch (error) {
        console.error(error); 
    }
};