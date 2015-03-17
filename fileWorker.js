var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/test');
var http = require('http');
var Insertschema = new mongoose.Schema({
	Location : "string",
	chicken65:"number",
	prawnfry:"number",
	muttonbriyani:"number",
	/*fishbriyani:{type:Number, default:4545}*/
// resetPasswordToken: "string",

}, {
	collection : 'hotel'
});

var cols = mongoose.model('hotel', Insertschema);
exports.formsubmit = function(req, res) {
	inserting(function(err,coll) {

		if (err) {
			res.jsonp("error");
		} else {
			
			/*for(var i = 0; i < coll.length; i++) {
				console.log(coll[i].fishbriyani);*/
			console.log(coll);
			}
			
		
	});
	function inserting(mycallback) {
		
		Location = req.query["Location"];
		chicken65 = req.query["price_1"];
		prawnfry = req.query["price_2"];
		muttonbriyani = req.query["price_3"];
		/*console.log(muttonbriyani);*/
		cols.update({"Location":Location},{$inc:{"chicken65":chicken65,"prawnfry":prawnfry,"muttonbriyani":muttonbriyani}},function(err,coll) {
			mycallback(err,coll);
		});
		/*cols.find({},function(err, data) {
			mycallback(err,data);
		})*/

	}

}
