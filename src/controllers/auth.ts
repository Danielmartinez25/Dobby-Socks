import { Request, Response } from "express";

export const login = async(req:Request,res:Response) =>{
    try {
        res.send("Bienvenido al login");
    } catch (error) {
        console.error(error);
        
    }
};
export const register = async(req:Request,res:Response) =>{
    try {
        res.send("Bienvenido al register");
    } catch (error) {
        console.error(error);
        
    }
};