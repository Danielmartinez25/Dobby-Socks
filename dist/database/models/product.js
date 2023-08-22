"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    price: {
        type: Number,
        required: [true, "price is required"],
    },
    description: {
        type: String,
        required: [true, "description is required"],
    },
    stock: {
        type: Boolean,
        required: [true, "stock is required"],
    },
    cart: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Cart" }],
    comment: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Comment" }],
    user: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
    type: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Type" }],
}, {
    timestamps: true,
    versionKey: false
});
exports.default = (0, mongoose_1.model)("Product", productSchema);
