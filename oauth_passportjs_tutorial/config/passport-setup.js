const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
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
            callbackURL: '/auth/google/redirect',
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        }, (token, tokenSecret, profile, done) => {
            // check if user already exists in our db
            console.log(profile);
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
                        thumbnail: profile.photos[0].value
                    }).save().then((newUser) => {
                        console.log(`new user created ${newUser}`);
                        done(null, newUser);
                    });
                }
            });
        }
    )
);