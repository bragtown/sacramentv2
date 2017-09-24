var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ProgramSchema = new Schema({
	date:{type: Date},
	ward:{type: String},
	presiding:{type: String},
	conducting:{type: String},
	organist:{type: String},
	chorister:{type: String},
	image:{
		name:{type: String},
		source:{type: String},
		fact:{type: String}
	},
	programName:{type: String},
	fast:{type: Boolean},
	program:{type: Boolean},
	youthSpeakers:[{
		name:{type:String}
	}],
	pSpeakers:[{
		name:{type:String}
	}],
	aSpeakers:[{
		name:{type:String}
	}],
	invocation:{type: String},
	benediction:{type: String},
	opening:{type: Number},
	sacrament:{type: Number},
	intermediate:{type: Number},
	closing:{type: Number},
	reminders:[{
		title:{type:String},
		data:[{
			name:{type:String},
			info:{type:String}
		}]
	}],
	sReminders:[{
		name:{type:String}
	}],
	announcements:[{
		name:{type:String},
		data:{type:String}
	}],
	sAnnouncements:[{
		name:{type:String}
	}],
	emergencyPrep:{
		contact:{type:String},
		recipeName:{type:String},
		recipe:{type:String}
	},
	userId:Schema.Types.ObjectId
});

module.exports = mongoose.model('Program', ProgramSchema);