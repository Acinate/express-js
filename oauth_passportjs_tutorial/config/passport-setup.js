const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: '/auth/google/redirect'
        }, (token, tokenSecret, profile, done) => {
            console.log(profile);
            // check if user already exists in our db
            User.findOne({googleId: profile.id}).then((currentUser) => {
                if (currentUser) {
                    // already have the user
                    console.log(`user is ${currentUser}`);
                    done(null, currentUser);
                } else {
                    // create user in our db
                    new User({
                        username: profile.displayName,
                        googleId: profile.id,
                        thumbnail: profile.picture,
                        email: profile.email
                    }).save().then((newUser) => {
                        console.log(`new user created ${newUser}`);
                        done(null, newUser);
                    });
                }
            });
        }
    )
);