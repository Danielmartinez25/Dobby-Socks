"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_google_oauth20_1 = require("passport-google-oauth20");
passport.use(new passport_google_oauth20_1.Strategy({
    clientID: process.env.ID_CLIENT_GOOGLE,
    clientSecret: process.env.SECRET_CLIENT_GOOGLE,
    callbackURL: "http://localhost:3000/auth/google/create"
}, function (accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
    });
}));
