import jwt from "jsonwebtoken";
export const createJwt = async (user) => {
    return jwt.sign(
    {
        _id:user._id,
        role:user.role
    },
    process.env.JWT_SECRET || "D0BBY-S0CK"
    ,
    {
        expiresIn:"1h"
    }
    );
};

export const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET || "D0BBY-S0CK");
    } catch (e) {
        return null;
    }
};
export const decodeSing = (token) => {
    return jwt.decode(token,null || undefined);
};