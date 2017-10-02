var bcrypt = require("bcrypt");
var FacebookStrategy = require("passport-facebook").Strategy;
var configAuth = require('./session.js');

module.exports = function(passport)
{
	// used to serialize the user for the session
	//The user id (you provide as the second argument of the done function)
	// is saved in the session and is later used to retrieve the whole object via
	//the deserializeUser function. serializeUser determines, which data of the user object should be stored in the session.


	passport.serializeUser(function(user, done) {
			done(null, user.id);
			});

	// used to deserialize the user
	//In deserializeUser that key is matched with the in memory array/ database or any data resource.
	//The fetched object is attached to the request object as req.user


	passport.deserializeUser(function(id, done) {
			db.query("select * from facebook where id = "+ id, function(err, user)
				{
				done(err, user);
				});
			});

	//facebook
	passport.use(new FacebookStrategy({
				// pull in our app id and secret from our auth.js file
clientID : configAuth.facebookAuth.clientID,
clientSecret : configAuth.facebookAuth.clientSecret,
callbackURL : configAuth.facebookAuth.callbackURL

},
// facebook will send back the token and profile
function(token, refreshToken, profile, done) {
console.log("hello1");
// asynchronous
process.nextTick(function() {

	// find the user in the database based on their facebook id
	db.query("select * from facebook where id = " + profile.id, function(err, user) {

		// if there is an error, stop everything and return that
		// ie an error connecting to the database
		if (err)
		return done(err);

		// if the user is found, then log them in
		if (user) {
		console.log("found");
		return done(null, user); // user found, return that user
		//return cb(err, user);
		} else {
		// if there is no user found with that facebook id, create them
		var newUser;
		console.log("not found");

		// set all of the facebook information in our user model
		newUser.id    = profile.id; // set the users facebook id
		newUser.token = token; // we will save the token that facebook provides to the user
		newUser.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
		newUser.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

		// save our user to the database
		var send = "(" + newUser.id + ", " + newUser.token + ", " + newUser.name + ", " + newUser.email + ")";
		db.query("insert into facebook (id, token, name, email) values "+send,function(err) {
				if (err)
				throw err;

				// if successful, return the new user
				return done(null, newUser);
				});
		}

	});
});

}));
};

