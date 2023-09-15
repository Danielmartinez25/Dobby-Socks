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
exports.login = exports.register = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const user_1 = __importDefault(require("@/database/models/user"));
const generateTokenRandom_1 = __importDefault(require("@/helpers/generateTokenRandom"));
const register = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, surname, mail, password, phone } = body;
        if ([name, surname, mail, password, phone].includes("")) {
            throw (0, http_errors_1.default)(400, "Todos los campos son obligatorios");
        }
        const userMail = yield user_1.default.findOne({ mail });
        if (userMail) {
            throw (0, http_errors_1.default)(400, "El mail se encuentra registrado");
        }
        const token = (0, generateTokenRandom_1.default)();
        const NewUser = new user_1.default({
            body
        });
        NewUser.token = token;
        const userStore = yield NewUser.save();
        return res.status(200).json({
            ok: true,
            status: 200,
            data: userStore
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.register = register;
const login = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { mail, password } = body;
    }
    catch (error) {
        console.error(error);
    }
});
exports.login = login;
