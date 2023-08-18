import mongoose from "mongoose";
export const connectDB = async () : Promise<void> => {
    const DB_CONNECTION = process.env.DB_CONNECTION;
    try {
        const { connection } = await mongoose.connect(DB_CONNECTION || "mongodb + srv://danielMartinez:daniel1890@cluster0.npgghpc.mongodb.net/Dobby-Socks");
        const host = `${connection.host}:${connection.port}`;
        console.log(`connection database in ${host}`);
    } catch (error) {
        console.error(error);
    }
};