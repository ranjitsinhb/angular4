const express = require('express');
const router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'hmeimaindb'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

// GET api listing. 
router.post('/posts', (req, res) => {

	var limit = req.body.limit;
	var pageNumber = req.body.offset;
	var start = pageNumber * limit;
	//var totalPages = totalElements / limit;

	var limitFrom = req.body.limitFrom;
	var limitTo = req.body.limitTo;
  	
	connection.query('SELECT count(*) as cnt FROM wp_posts', function(err, total){
		connection.query( 'SELECT * FROM wp_posts LIMIT '+start+','+limit, function(err, rows) {	
			var page = {
				pageNumber:pageNumber, 
				limit: limit,
				count: total[0].cnt,
				offset: req.body.offset,   
			  };

			//console.log(rows);
			return res.json({
				'success': true,
				'data': rows,
				'page': page,
				'message': 'Data fetch Successfully'
			});
		});
	});

});

module.exports = router;
