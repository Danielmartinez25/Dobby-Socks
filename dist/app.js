"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Welcome Dobby-Socks");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const connection_1 = require("./database/connection");
const product_1 = __importDefault(require("./routes/product"));
const initialSetup_1 = require("./libs/initialSetup");
(0, initialSetup_1.createRoles)();
(0, connection_1.connectDB)();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(passport_1.default.initialize);
app.use((0, express_session_1.default)({
    secret: "Dobby-sock",
    resave: false,
    saveUninitialized: true,
}));
app.use(passport_1.default.session());
app.use("/api/product", product_1.default);
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "http://localhost";
app.listen(PORT, () => {
    console.log(`Servidor corriendo el el puerto ${HOST}:${PORT}`);
});
exports.default = app;
