import { Request, Response } from "express";

export const list = async (req: Request, res: Response) => {
    res.send("list");
};
export const update = async (req: Request, res: Response) => {
    res.send("update");
};
export const create = async (req: Request, res: Response) => {
    res.send("create");
};
export const remove = async (req: Request, res: Response) => {
    res.send("delete");
};