const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Chart = require('../models/pie-chart');

//Handling incomming GET request to chart route
router.get('/', (req, res, next) => {
	Chart.find()
		.then((doc) => {
			console.log(doc);
			res.status(200).json(doc);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

// Handling incomming GET by Id request to chart route
router.get('/:chartId', (req, res, next) => {
	const id = req.params.chartId;
	Chart.findById(id)
		.exec()
		.then((doc) => {
			console.log('From Database', doc);
			if (doc) {
				res.status(200).json(doc);
			} else {
				res.status(404).json({
					message: 'No valid entry found for provided entry'
				});
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

// Handling incomming POST request to chart route
router.post('/', (req, res, next) => {
	const chart = new Chart({
		_id: new mongoose.Types.ObjectId(),
		expenses: req.body.expenses,
		amount: req.body.amount
	});
	chart
		.save()
		.then((doc) => {
			console.log(doc);
			res.status(201).json({
				message: 'Handling POST request route to /Chart',
				createdStudent: chart
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

module.exports = router;
