"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controllers/user");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router
    .get("/list", user_1.list)
    .put("/update", user_1.update)
    .post("/create", user_1.create)
    .delete("/remove", user_1.remove);
exports.default = router;
