require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');

const app = express();

// set up view engine
app.set('view engine', 'ejs');

app.use('/material', express.static(__dirname + '/node_modules/materialize-css/dist/'));

// set up express session
app.use(session({
    secret: process.env.SESSION_KEY,
    maxAge: 24 * 60 * 60 * 1000
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// connect to mongodb
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected to mongodb");
});

// create auth routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home', {user: req.user});
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});