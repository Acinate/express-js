const router = require('express').Router();
const passport = require('passport');

// auth-login
router.get('/login', (req, res) => {
    res.render('login', {user: req.user});
});

// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile');
});

// auth with facebook
router.get('/facebook', passport.authenticate('facebook'));

// callback route for google to redirect to
router.get('/facebook/redirect', passport.authenticate('facebook', {
    scope: ['profile', 'email']
}), (req, res) => {
    res.redirect('/profile');
});

// auth with twitter
router.get('/twitter', passport.authenticate('twitter'));

// callback route for twitter to redirect to
router.get('/twitter/redirect', passport.authenticate('twitter', {
    scope: ['profile', 'email']
}), (req, res) => {
    res.redirect('/profile');
});

module.exports = router;