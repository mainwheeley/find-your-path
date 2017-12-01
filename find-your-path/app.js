'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var db = require('./db');

/*****
 ajax

  $.ajax({
    url: 'http://localhost:3000/fbdata',
    dataType: 'json',
    type: 'post',
    contentType: 'application/json',
    data: JSON.stringify(fbdata),
    processData: false,
    success: function( data, textStatus, jQxhr ){
        console.log(data);
        console.log("success!");
    },
    error: function( jqXhr, textStatus, errorThrown ){
      console.log("error ajax");  
      console.log( errorThrown );
    }
});


collecting to backend and then send to db

app.post('/setimg', function(req, res) {
        var email = req.query.email;
        var img = req.query.img;
        var query = "update profile set img = '" + img + "' where email = '" + email + "'";

        console.log(query);

        db.query(query, function(err, result) {
            if (err) {
                console.log("Error posting image");
                throw (err);
            } else {
                res.status(200).json({tatus: "ok"});
            }
        });
    });

 example of what a query might look like

 the img and email within the quotes are the names of the columns

the img and email without the quotes are the variable names


 */
var async = require("async");

var FacebookStrategy = require("passport-facebook").Strategy;

var app = express();

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

app.post('/fbdata', function(req, res)
{

    var email = req.body.email;
    var name =  req.body.name;
    var query1 = "select * from facebook where email = '" + email + "'";
    var query = "insert into facebook (name, email) values ('"+ name +"', '" + email +"')";
    var flag = 0;
    db.query(query1, function(err, result)
    {
        if (err)
        {
            console.log("error checking if email is already in db");
            throw err;
        }
        else
        {
            //console.log(result[0]);
            //if (result[0] === undefined)
            //{
            var res = 1;
            if (result[0] !== undefined)
                res = result[0].email.localeCompare(email);
            console.log("completed name checking");
            //console.log(result[0].email);



            if (!res) // if res = 0 it is already in the database
            {
                flag = 1;
            }
            console.log(flag);
            if (!flag)
                {
                db.query(query, function(err, result1)
                {
                    if (err)
                    {
                        console.log("error");
                        throw err;
                    }
                    else
                    {
                        console.log("posted user into db");
                        console.log(result1);
                    }
                });
            }
                else
                {
                    console.log("user is already in db");
                }
        //}
    }
    });

    var query3 = "select * from facebook where email = '" + email + "'";
   /* app.get('/play1', function(req, res)
    {
        db.query(query3, function(err, result)
        {
            if (err)
            {
                console.log("error requesting name");
                throw err;
            }
            else
            {
                res.send(result);
            }
        });

    }); */
});

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
