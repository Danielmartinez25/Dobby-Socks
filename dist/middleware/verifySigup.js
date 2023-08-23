"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRolesExisted = void 0;
const ROLES = ["admin", "moderator", "user"];
const checkRolesExisted = ({ body }, res, next) => {
    if (body.roles) {
        for (let i = 0; i < body.length; i++) {
            if (!ROLES.includes(body.roles[i])) {
                return res.status(400).json({
                    message: `Role ${body.roles[i]} does not exists`
                });
            }
        }
    }
    next();
};
exports.checkRolesExisted = checkRolesExisted;
