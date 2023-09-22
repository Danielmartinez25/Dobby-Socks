"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_google_oauth20_1 = require("passport-google-oauth20");
const user_1 = __importDefault(require("@/database/models/user"));
const passport_1 = __importDefault(require("passport"));
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: process.env.ID_CLIENT_GOOGLE,
    clientSecret: process.env.SECRET_CLIENT_GOOGLE,
    callbackURL: "http://localhost:3000/auth/google/create"
}, function (accessToken, refreshToken, profile, cb) {
    console.log(profile);
    user_1.default.find({ googleId: profile.id }, { name: profile.displayName }, function (err, user) {
        return cb(err, user);
    });
}));
