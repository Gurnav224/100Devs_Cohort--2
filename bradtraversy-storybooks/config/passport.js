const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = function(passport){// Passport Google OAuth strategy
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,      // From Google Developer Console
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,  // From Google Developer Console
        callbackURL: '/auth/google/callback'
    }, async (accessToken, refreshToken, profile, done) => {
        // Find or create a user in your database

        let newUser = {
            googleId:profile.id,
            displayName:profile.displayName,
            firstName:profile.name.givenName,
            lastName:profile.name.familyName,
            image:profile.photos[0].value
        }

        try {
            let user = await User.findOne({googleId:profile.id});

            if(user){
                done(null, user)
            }
            else{
                user = await User.create(newUser);
                done(null, user)
            }
        } catch (error) {
           console.error('error ',error)
        }

    }));
    
    // Serialize user into session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    
  
    // Deserialize user from session

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (err) {
            done(err);
        }
    });
    
}