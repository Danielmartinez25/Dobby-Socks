console.log("Welcome Dobby-Socks");
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { connectDB } from "./database/connection";
import productRouter from "./routes/product";
import { createRoles } from "./libs/initialSetup";
createRoles();
connectDB();
const app = express();
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api/product",productRouter);
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "http://localhost";
app.listen(PORT, () => {
    console.log(
        `Servidor corriendo el el puerto ${HOST}:${PORT}`
    );
});

export default app;
