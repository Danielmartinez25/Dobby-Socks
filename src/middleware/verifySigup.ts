import { NextFunction, Request, Response } from "express";

const ROLES : string[] = ["admin","moderator","user"];
export const checkRolesExisted = ({body}:Request,res:Response,next:NextFunction) =>{
    if(body.roles){
        for (let i = 0; i < body.length; i++) {
            if(!ROLES.includes(body.roles[i])){
                return res.status(400).json({
                    message : `Role ${body.roles[i]} does not exists`
                });
            }
           }
    }
    next();
};