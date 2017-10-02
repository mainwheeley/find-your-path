module.exports = function(app, passport) {

	//Home page
	app.get('/', function(req, res) {
	res.render('../views/home.ejs'); // load the index.ejs file
	});

	// route for showing the profile page


app.get('/main', function(req, res)
{
		res.render('../views/mainpage.ejs', {
user : req.user
		});
});

// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
app.get('/', passport.authenticate('facebook', { scope : 'email' }));

//maybe have to change env variable and uri to https instead of http?


app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
});

// handle the callback after facebook has authenticated the user
app.get('/auth/facebook/callback',
		passport.authenticate('facebook', {
failureRedirect : '/profile'
}), function(req, res)
		{
		res.redirect('/main');
		});

// route for logging out
app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
		});

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
	{
		console.log("hello");
		return next();
	}
	// if they aren't redirect them to the home page
	res.redirect('/');
}

