var home = require('../controllers/home');
var login = require('../controllers/login');

module.exports.initialize = function(app, passport, router){
	
	router.get('/', home.sendIndex)
	//router.get('/authenticate', isLoggedIn, home.getHome);
	router.get('/logout', login.logout);
	router.post('/signup', passport.authenticate('local-signup'), login.signup);
	router.post('/login',passport.authenticate('local-login'), login.login);
	router.post('/updateuser',isLoggedIn, login.update);
	router.post('/updateorg',isLoggedIn, login.updateOrg);
	router.get('/leadership', isLoggedIn, home.getLeadership)
	router.get('/program/:programId', isLoggedIn, home.getProgram)
	router.post('/program', isLoggedIn, home.setProgram)
	router.post('/leadership', isLoggedIn, home.setLeadership)
	router.post('/updateprogram', isLoggedIn, home.updateProgram)
	router.get('/programs', isLoggedIn, home.getPrograms)	
	router.delete('/leadership/:leaderId', isLoggedIn, home.deleteLeader)

	app.use('/', router);
}
function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	console.log('in isLoggedIn');
	res.send({redirect:'login'});
}