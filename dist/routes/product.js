"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../controllers/product");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router
    .get("/", product_1.hello);
exports.default = router;
