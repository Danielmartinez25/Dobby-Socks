import { login, register } from "@/controllers/auth";
import express from "express";
import passport from "passport";
import { checkRolesExisted } from "@/middleware/verifySigup";
import { redirection } from "@/controllers/passportController";
const router = express.Router();
router
.get("/auth/google",passport.authenticate("google", { scope: ["profile"] }))
.get("/auth/google/callback",passport.authenticate("google", { failureRedirect: "/login" }),redirection)
.put("login/",checkRolesExisted,login)
.post("/register",checkRolesExisted,register);