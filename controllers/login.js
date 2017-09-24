var User = require('../models/user');
path = require('path')
module.exports = {

	logout: function(req,res){
		req.logout();
		res.send({redirect:'home.select'});
	},
	signup: function(req,res){
		console.log('signed up!');
		res.send({redirect:'home.select', user: req.user});
	},
	login: function(req,res){

		console.log('logged in');
		res.send({redirect:'home.select', user: req.user});
	},
	updateOrg:function(req,res){
		console.log('updateOrg')
		User.findOne({'local.email':req.user.local.email}, function(err,user){

			if(err){
				res.send({
					message:"Err!",
					status:500
				})
			}	
			else if(user){
				User.find({'org':req.body.org}, function(err, users){
					if(users.length > 0){
						res.send({
							message:"Org already in use",
							class: "bg-warning",
							status:500
						})
					}
					else{
						user.org = req.body.org
						user.save(function(err){
							if(err){
								res.send({
									message:"erred saving data",
									class: "bg-danger",
									status:500
								})
							}	
							else{
								res.send({
									message:"updated!",
									class: "bg-success",
									status:200
								})
							}

						})
					}
				})
			}
		})
	},
	update:function(req,res){
		console.log('update')
		User.findOne({'local.email':req.user.local.email}, function(err,user){
				if(user.fName != req.body.fName && req.body.fName != undefined){
					change = true;
					user.fName = req.body.fName;
					changeMsg += 'fName,';
				}
				if(user.lName != req.body.lName && req.body.lName != undefined){
					change = true;
					user.lName = req.body.lName;
					changeMsg += 'lName,';
				}
				if(req.body.password === req.body.cPassword && req.body.password != undefined){
					change = true;
					user.local.password = user.generateHash(req.body.password);
					changeMsg += 'password,';
				}
				user.save(function(err){
					if(err){
						res.send({
							message:"erred saving data",
							class: "bg-danger",
							status:500
						})
					}
					else{
						res.send({
							fName:user.fName,
							lName:user.lName,
							email:user.local.email,
							status:200,
							class: "bg-success",
							message:"success"
						})
					}
				})
			
		})
	}
}