require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');

const app = express();

// set up view engine
app.set('view engine', 'ejs');

// connect to mongodb
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected to mongodb");
});

// create auth routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});