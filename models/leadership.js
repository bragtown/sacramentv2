var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LeadershipSchema = new Schema({
	person:{type:String},
	phone:{type:String},
	userId:Schema.Types.ObjectId
});
module.exports = mongoose.model('Leadership', LeadershipSchema);
