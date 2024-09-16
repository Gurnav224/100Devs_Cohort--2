
const express = require('express');
const passport = require('passport')
const router = express.Router();



// Route to initiate the Google OAuth login
router.get('/google', passport.authenticate('google', { scope: ['profile']}));

// Google OAuth callback URL after user grants or denies permission
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/dashboard')
    }
  )


  // @ desc logout user 
  // @ route /auth/logout



  router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/');
    });
});


module.exports = router;



