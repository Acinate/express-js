const User = require('../models/user-model');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
));

passport.use(new FacebookStrategy({
        clientID: process.env.FB_CLIENT_ID,
        clientSecret: process.env.FB_CLIENT_SECRET,
        callbackURL: "/auth/facebook/redirect"
    },
    function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        // User.findOrCreate({facebookId: profile.id}, function (err, user) {
        //     return cb(err, user);
        // });
    }
));

passport.use(new TwitterStrategy({
        consumerKey: process.env.TWITTER_CLIENT_ID,
        consumerSecret: process.env.TWITTER_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
    },
    function (token, tokenSecret, profile, cb) {
        User.findOrCreate({twitterId: profile.id}, function (err, user) {
            return cb(err, user);
        });
    }
));