"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    text: {
        type: String
    },
    date: {
        type: Date
    },
    product: { type: mongoose_1.Schema.Types.ObjectId, ref: "Product" },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
}, {
    timestamps: true,
    versionKey: false
});
exports.default = (0, mongoose_1.model)("Comment", commentSchema);
