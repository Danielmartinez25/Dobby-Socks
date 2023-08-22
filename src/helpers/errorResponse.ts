import { Response } from "express";
export default (res:Response,error,method:string) => {
    return res.status(error.status || 500).json({
        ok:false,
        msg: error.message || `Ups error en ${method}`
    });
};