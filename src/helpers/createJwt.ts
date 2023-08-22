import jwt from "jsonwebtoken";
const JWT =process.env.JWT;
export default async (payload) => {
    const token = jwt.sign(payload,JWT || "Dobby-sock",{expiresIn: "1h"});
    return token;
};
