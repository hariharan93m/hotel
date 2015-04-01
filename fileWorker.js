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
var Updateschema = new mongoose.Schema({
	Location : "string",
	chicken65 : "number",
	prawnfry : "number",
	muttonbriyani : "number",
}, {
	collection : 'foodDescription'
});

var cols = mongoose.model('hotel', Insertschema);
var model_1 = mongoose.model('foodDescription', Updateschema);
exports.getData = function(req, res) {
	function display(mycallback) {
		model_1.find({}, function(err, resultData) {
			mycallback(err, resultData);

		});
	}
	display(function(err, data) {
		if (err) {
			res.jsonp(err);
		} else {
			res.jsonp(data);
		}
	});

};

exports.updateForm = function(req, res) {
	//function updateForm(mycallback) {
		Location = req.query["Location"];
		chicken = req.query["Q1"];
		prawn = req.query["Q2"];
		mutton = req.query["Q3"];
		model_1.find({
			"Location" : Location
		}, function(err, coll) {
			var sub_chicken = coll[0].chicken65 - (-chicken);
			var sub_prawn = coll[0].prawnfry - (-prawn);
			var sub_mutton = coll[0].muttonbriyani - (-mutton);
			if (sub_chicken >= 0 && sub_prawn >= 0 && sub_mutton >= 0) {
				model_1.update({
					"Location" : Location
				}, {
					$inc : {
						"chicken65" : chicken,
						"prawnfry" : prawn,
						"muttonbriyani" : mutton
					}
				}, function(err, coll) {
					//var update = function(req, res) {
					//	function updating(mycallback) {
							Location = req.query["Location"];
							chicken65 = req.query["price_1"];
							prawnfry = req.query["price_2"];
							muttonbriyani = req.query["price_3"];
							/* console.log(muttonbriyani); */
							cols.update({
								"Location" : Location
							}, {
								$inc : {
									"chicken65" : chicken65,
									"prawnfry" : prawnfry,
									"muttonbriyani" : muttonbriyani
								}
							}, function(err, coll) {
								//mycallback(err, coll);
								if (err) {

									res.jsonp(err);
								} else {
									if (coll == "1") {
										res.jsonp({"key":"success"});
									} else {
										res.jsonp({"key":"failure"});
									}
								}
							});
						//}
					/*	updating(function(err, coll) {

							if (err) {
								console.log("error"); 
								res.jsonp("error");
							} else {
								 console.log("entered"); 
								res.jsonp("coll");
							}

						});*/

					//};

					//mycallback(err, coll);
				});

			} else {
				/* console.log("cannot upload"); */
				res.jsonp({"key":"failed"});
			}
		});
	//}
	/*updateForm(function(err, data) {
		if (err) {

			res.jsonp(err);
		} else {
			if (data == "1") {
				res.jsonp({"key":"success"});
			} else {
				res.jsonp({"key":"failure"});
			}
		}

	});*/
};