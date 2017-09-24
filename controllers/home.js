var Leadership = require("../models/leadership")
var Program =  require("../models/program")
module.exports = {
	sendIndex: function(req,res){
		res.redirect("/public/app/index.html")
	},
	getLeadership:function(req,res){
		Leadership.find({'userId':req.user._id}, function(err, leadership){
			if(err)
				console.log(err);
			else
				res.send(leadership);
		})
	},
	getProgram:function(req,res){
		var programId = req.params.programId;
		Program.findOne({'date':programId}, function(err, program){
			if(err)
				console.log(err)
			else
				res.send(program)
		});
	},
	setProgram:function(req,res){
		console.log(req.body)
		var rProgram = req.body
		var program = new Program()
		program.date = new Date(rProgram.date)
		program.ward = rProgram.ward
		program.presiding = rProgram.presiding
		program.conducting = rProgram.conducting
		program.organist = rProgram.organist
		program.chorister = rProgram.chorister
		program.image.name = rProgram.image.name
		program.image.source = rProgram.image.source
		program.image.fact = rProgram.image.fact
		program.programName = rProgram.programName
		program.fast = rProgram.fast
		program.program = rProgram.program
		program.youthSpeakers = rProgram.youthSpeakers
		program.pSpeakers = rProgram.pSpeakers
		program.aSpeakers = rProgram.aSpeakers
		program.invocation = rProgram.invocation
		program.benediction = rProgram.benediction
		program.opening = rProgram.opening
		program.sacrament = rProgram.sacrament
		program.intermediate = rProgram.intermediate
		program.closing = rProgram.closing
		if(rProgram.reminders != undefined){
			for(var i = 0; i < rProgram.reminders.length; i++){
				var p = rProgram.reminders[i]
				program.reminders[i].title = p.title
				for(var j = 0; j < p.data.length; p++){
					var d = p.data[j];
					program.reminders[i].data[j].name = d.name
					program.reminders[i].data[j].info = d.info
				}
			}
		}

		if(rProgram.sReminders != undefined)
			program.sReminders = rProgram.sReminders
		if(rProgram.announcements != undefined){
			for(var i = 0; i < rProgram.announcements.length; i++){
				var a = rProgram.announcements[i];
				program.announcements[i].name = a.name
				program.announcements[i].data = a.data
			}
		}
		if(rProgram.sAnnouncements != undefined)
			program.sAnnouncements = rProgram.sAnnouncements
			program.emergencyPrep = {}
			program.emergencyPrep.contact = rProgram.emergencyPrep == undefined ? '' : rProgram.emergencyPrep.contact
			program.emergencyPrep.recipeName = rProgram.emergencyPrep == undefined ? '' : rProgram.emergencyPrep.recipeName
			program.emergencyPrep.recipe = rProgram.emergencyPrep == undefined ? '' : rProgram.emergencyPrep.recipe
			program.userId = req.user._id;
		
			program.save(function(err){
			if(err){
				console.log(err)
				res.send({message:err, status:500})
			}
			else{
				res.send({message:"Success", status:200})
			}
		})
	},
	setLeadership:function(req,res) {
		error = [];
		console.log(req.body)
		for(var i = 0; i < req.body; i++){
			var l = req.body[0];
			if(l._id == undefined){
				leader = new Leadership();
				leader.person = l.person;
				leader.phone = l.phone;
				leader.userId = req.user._id;
				leader.save(function(err){
					if(err){
						console.log(err)
						error.push(err)
					}

				})

			}
			else{
				Leadership.findOne({"_id":l._id},function(leader) {
					leader.person = l.person
					leader.phone = l.phone
					leader.save(function(err){
						if(err){
							console.log(err)
							error.push(err)
						}
					})
				})
			}
		}
		res.send({message: error});
	},
	deleteLeader:function(req,res){
		Program.findOne({"userId":req.user._id, "_id":req.params.programId}, function(err, program){
			program.delete(function(err){
				if(err){
					console.log(err)
					res.send({message:"err", status:500})
				}
				else{
					res.send({message:"success", status:200})
				}
			})
		})
	},
	updateProgram:function(req,res){
		Program.findOne({"userId":req.user._id, "_id":req.body._id}, function(err, program){
			if(err){
				console.log(err)
				res.send({message:err, status:500})
			}
			else{
				var rProgram = req.body
				program.date = new Date(rProgram.date)
				program.ward = rProgram.ward
				program.presiding = rProgram.presiding
				program.conducting = rProgram.conducting
				program.organist = rProgram.organist
				program.chorister = rProgram.chorister
				program.image.name = rProgram.image.name
				program.image.source = rProgram.image.source
				program.image.fact = rProgram.image.fact
				program.programName = rProgram.programName
				program.fast = rProgram.fast
				program.program = rProgram.program
				program.youthSpeakers = rProgram.youthSpeakers
				program.pSpeakers = rProgram.pSpeakers
				program.aSpeakers = rProgram.aSpeakers
				program.invocation = rProgram.invocation
				program.benediction = rProgram.benediction
				program.opening = rProgram.opening
				program.sacrament = rProgram.sacrament
				program.intermediate = rProgram.intermediate
				program.closing = rProgram.closing
				for(var i = 0; i < rProgram.reminders.length; i++){
					var p = rProgram.reminders[i]
					program.reminders[i].title = p.title
					for(var j = 0; j < p.data.length; p++){
						var d = p.data[j];
						program.reminders[i].data[j].name = d.name
						program.reminders[i].data[j].info = d.info
					}
				}

				program.sReminders = rProgram.sReminders
				for(var i = 0; i < rProgram.announcements.length; i++){
					var a = rProgram.announcements[i];
					program.announcements[i].name = a.name
					program.announcements[i].data = a.data
				}
				program.sAnnouncements = rProgram.sAnnouncements
				program.emergencyPrep = {}
				program.emergencyPrep.contact = rProgram.emergencyPrep == undefined ? '' : rProgram.emergencyPrep.contact
				program.emergencyPrep.recipeName = rProgram.emergencyPrep == undefined ? '' : rProgram.emergencyPrep.recipeName
				program.emergencyPrep.recipe = rProgram.emergencyPrep == undefined ? '' : rProgram.emergencyPrep.recipe
				program.userId = req.user._id;
				program.save(function(err){
					if(err){
						console.log(err)
						res.send({message:err, status:500})
					}
					else{
						res.send({message:"Success", status:200})
					}
				})

			}
		})
	},
	getPrograms:function(req,res){
		Program.find({"userId":req.user._id}).sort('-date').exec(function(err,programs){
			if(err)
				console.log(err)
			else{
				console.log(programs)
				res.send(programs);
			}
		})
	}

}