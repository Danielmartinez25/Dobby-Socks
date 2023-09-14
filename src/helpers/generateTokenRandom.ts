import crypto from "crypto";
export default () => {
    const token = crypto.randomBytes(32).toString("hex");
    return token;
};