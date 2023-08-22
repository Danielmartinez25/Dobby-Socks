"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../controllers/product");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router
    .get("/list", product_1.list)
    .put("/update", product_1.update)
    .post("/create", product_1.create)
    .delete("/remove", product_1.remove);
exports.default = router;
