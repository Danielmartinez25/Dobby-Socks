"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("@/controllers/auth");
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const verifySigup_1 = require("@/middleware/verifySigup");
const passportController_1 = require("@/controllers/passportController");
const router = express_1.default.Router();
router
    .get("/auth/google", passport_1.default.authenticate("google", { scope: ["profile"] }))
    .get("/auth/google/callback", passport_1.default.authenticate("google", { failureRedirect: "/login" }), passportController_1.redirection)
    .put("login/", verifySigup_1.checkRolesExisted, auth_1.login)
    .post("/register", verifySigup_1.checkRolesExisted, auth_1.register);
