import { login, register } from "@/controllers/auth";
import express from "express";
import { checkRolesExisted } from "@/middleware/verifySigup";
const router = express.Router();
router
.put("login/",checkRolesExisted,login)
.post("/register",checkRolesExisted,register);