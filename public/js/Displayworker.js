var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/test');
var Updateschema = new mongoose.Schema({
	Location : "string",
	chicken65 : "number",
	prawnfry : "number",
	muttonbriyani : "number",
}, {
	collection : 'hotel'
});