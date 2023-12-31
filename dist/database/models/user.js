"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const mongoose_findorcreate_1 = __importDefault(require("mongoose-findorcreate"));
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        lowercase: true
    },
    surname: {
        type: String,
        required: true,
        min: 4,
        lowercase: true
    },
    token: {
        type: String
    },
    checked: {
        type: Boolean,
        default: false
    },
    phone: {
        type: Number,
        required: true,
        min: 10
    },
    avatar: {
        type: String
    },
    mail: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    googleId: {
        type: String
    },
    roles: [{
            type: mongoose_1.Schema.Types.ObjectId, ref: "Role"
        }],
    cart: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Cart" }],
}, {
    timestamps: true,
    versionKey: false
});
userSchema.methods.encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcryptjs_1.default.genSalt(10);
    return bcryptjs_1.default.hash(password, salt);
});
userSchema.methods.verifyPassword = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.compare(password, this.password);
    });
};
userSchema.plugin(passport_local_mongoose_1.default);
userSchema.plugin(mongoose_findorcreate_1.default);
exports.default = (0, mongoose_1.model)("User", userSchema);
