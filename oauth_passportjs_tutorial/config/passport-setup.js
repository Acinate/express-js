const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user-model');

passport.use(
    new GoogleStrategy({
            callbackURL: '/auth/google/redirect',
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        }, (token, tokenSecret, profile, done) => {
            // User.findOrCreate({googleId: profile.id}, function (err, user) {
            //     return done(err, user);
            // });
            console.log(profile);
            console.log('saving user to database');
            new User({
                username: profile.displayName,
                googleId: profile.id
            }).save().then((newUser) => {
                console.log('new user created');
                console.log(newUser);
            }).catch((error) => {
                console.error(error);
            }).finally(() => {
                return done();
            })
        }
    ));