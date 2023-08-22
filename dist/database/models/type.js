"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const typeSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    product: { type: mongoose_1.Schema.Types.ObjectId, ref: "Product" }
});
exports.default = (0, mongoose_1.model)("Type", typeSchema);
