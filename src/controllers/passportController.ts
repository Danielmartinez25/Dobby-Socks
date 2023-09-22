import { Request, Response } from "express";

export const redirection = async (req: Request,res: Response)=>{
    res.redirect("/");
};