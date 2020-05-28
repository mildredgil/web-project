var express = require('express');
var router = express.Router();
var multer = require('multer');
const validateToken = require('../middleware/validate-token');

let formData = (x, y) => {
	return {x, y}
}

let storage = multer.diskStorage({
	destination: function (req, file, cb) {
	cb(null, 'data/region/')
  },
  filename: function (req, file, cb) {
	cb(null, file.originalname )
  }
})

var upload = multer({ storage: storage }).single('myFile');

router.post('/data/states', function(req, res) {
	var fs = require('fs');
	var d3 = require('d3');
	var edos_date;

	fs.readFile("data/region/edos_date.csv", "utf8", function(err, data){
		if(err) {
			res.statusMessage = `File doesn't exist or couldn't open`;
			return res.status(409).end();
		}

		edos_date = d3.csvParse(data);
		let values = Object.values(edos_date.columns.slice(1));
		let array =  {
			'data': []
		}

		values.forEach(val => {
			array.data.push({
				id: val,
				data: []
			})
		});

		for(day of edos_date) {
			let date = day.date;
			
			for(i in array.data) {
				let point = formData(date, day[array.data[i].id]);
				array.data[i].data.push(point)
			}			
		}

		//sort 
		var len = array.data[0].data.length
		
		array.data.sort((a,b) => {
			return b.data[len - 1].y - a.data[len - 1].y
		})

		console.log(array.data);
		res.status(200).json(array.data);
	});


	return res;
	
});

router.get('/states/csv', validateToken, function(req, res) {
	var fs = require('fs');
	var d3 = require('d3');
	var edos_date;

	fs.readFile("data/region/edos_date.csv", "utf8", function(err, data){
		if(err) {
			res.statusMessage = `El archivo no existe o no se pudo abrir.`;
			return res.status(409).end();
		}

		edos_date = d3.csvParse(data);
		let csv_data = {
			rows: edos_date,
			columns: edos_date["columns"]
		}
		
		return res.status(200).json(csv_data);
	});

	return res;
});

router.post('/upload/csv', validateToken, function(req, res) {
	upload(req, res, function (err) {
		if (err instanceof multer.MulterError) {
			return res.status(500).json(err)
		} else if (err) {
			return res.status(500).json(err)
		}
		return res.status(200).send(req.file);
	})
});

module.exports = router;