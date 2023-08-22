import { create, list, remove, update } from "../controllers/product";
import express from "express";
const router = express.Router();

router
.get("/list", list)
.put("/update", update)
.post("/create", create)
.delete("/remove",remove);


export default router;