'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var async = require("async");

var FacebookStrategy = require("passport-facebook").Strategy;

var app = express();

// view engine setup
/* app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); */

var passport = require('passport');
var config =  require('./authenticate/session.js');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//app.use(express.static(path.join(__dirname, 'public')));
//app.use(app.router);


/*app.get('/', routes.index);
app.get('/users', users.list);*/

function fbProf(profile) {
    var name = profile.name;
    var avatar =  profile.picture.data.url;
}


passport.serializeUser(function(user, done) {
    done(null, user.id);
    });

passport.deserializeUser(function(id, done) {
            done(null, user);
        });

app.use(passport.initialize());
app.use(passport.session());


app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
failureRedirect : '/auth/facebook'
}), function(req, res) {
res.redirect('/main');
});

var facebook = 
{
    clientID : '152108875375918',
    clientSecret : 'bd42eddd9914fbaa28a3b3878a34db99',
    callbackURL : 'http://localhost:3000/auth/facebook/callback'
};

async function fb(accessToken, refreshToken, profile, done)
{
    done(null, fbProf(profile._json));
}

passport.use(new FacebookStrategy(facebook, fb));
      // Return done callback and pass transformed user object

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
/*if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}*/

// production error handler
// no stacktraces leaked to user


var debug = require('debug')('my-application');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
      debug('Express server listening on port ' + server.address().port);
});

module.exports = app;
