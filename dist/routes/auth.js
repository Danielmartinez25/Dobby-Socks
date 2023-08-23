"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("@/controllers/auth");
const express_1 = __importDefault(require("express"));
const verifySigup_1 = require("@/middleware/verifySigup");
const router = express_1.default.Router();
router
    .put("login/", verifySigup_1.checkRolesExisted, auth_1.login)
    .post("/register", verifySigup_1.checkRolesExisted, auth_1.register);
