import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import user from "@/database/models/user";
import passport from "passport";
passport.use(new GoogleStrategy({
    clientID: process.env.ID_CLIENT_GOOGLE,
    clientSecret: process.env.SECRET_CLIENT_GOOGLE,
    callbackURL: "http://localhost:3000/auth/google/create"
},
    function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        user.find({ googleId: profile.id }, {name : profile.displayName},function (err, user) {
            return cb(err, user);
        });
    }
));