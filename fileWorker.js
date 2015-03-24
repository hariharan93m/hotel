var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/test');
var http = require('http');
var Insertschema = new mongoose.Schema({
	Location : "string",
	chicken65 : "number",
	prawnfry : "number",
	muttonbriyani : "number",
/* fishbriyani:{type:Number, default:4545} */
// resetPasswordToken: "string",
}, {
	collection : 'hotel'
});

var cols = mongoose.model('hotel', Insertschema);
exports.formsubmit = function(req, res) {
	function updating(mycallback) {
		Location = req.query["Location"];
		chicken65 = req.query["price_1"];
		prawnfry = req.query["price_2"];
		muttonbriyani = req.query["price_3"];
		/* console.log(muttonbriyani); */
		cols.update({"Location" : Location
			}, {
			$inc : {
				"chicken65" : chicken65,
				"prawnfry" : prawnfry,
				"muttonbriyani" : muttonbriyani
			}
		}, function(err, coll) {
			mycallback(err, coll);
		});
	}
	updating(function(err, coll) {

		if (err) {
			res.jsonp("error");
		} else {
			console.log(coll);
		}

	});

};

exports.getData = function(req, res) {
	function display(mycallback) {
		cols.find({}, function(err, resultData) {
			mycallback(err, resultData);
		});
	}
	display(function(err, data) {
		if (err) {
			res.jsonp(err);
		} else {
			console.log(data);
			/*res.jsonp(data);*/
		}
	});

};
