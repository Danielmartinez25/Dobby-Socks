import { Request, Response } from "express";

export const  hello = async (req:Request,res:Response) => {
    res.send("Welcome api Dobby Sock");
};